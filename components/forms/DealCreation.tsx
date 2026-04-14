import { addDeal } from "@/app/backend/dealAction";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { X } from "lucide-react";

export default function DealCreation({
  setShowForm,
  setDeals,
  clients,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  setDeals: Dispatch<SetStateAction<any[]>>;
  clients: any[];
}) {
  const [state, action, pending] = useActionState(addDeal, { errors: {} });

  useEffect(() => {
    if (state?.success && state.deal) {
      setDeals((prev) => [...prev, state.deal]);
      setShowForm(false);
    }
  }, [state, setDeals, setShowForm]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
      <form
        action={action}
        className="relative w-full max-w-2xl rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200"
      >
        <button
          type="button"
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          onClick={() => setShowForm(false)}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mb-6 space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">Add New Deal</h2>
          <p className="text-sm text-slate-500">Create a new deal and track it through your sales pipeline.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="title"
            placeholder="Deal title"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
            required
          />
          <input
            type="number"
            name="value"
            placeholder="Deal value"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          />
          <select
            name="status"
            defaultValue="OPEN"
            required
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          >
            <option value="OPEN">OPEN</option>
            <option value="WON">WON</option>
            <option value="LOST">LOST</option>
          </select>
          <select
            name="stage"
            defaultValue="LEAD"
            required
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          >
            <option value="LEAD">LEAD</option>
            <option value="CONTACT">CONTACT</option>
            <option value="NEGOTIATION">NEGOTIATION</option>
            <option value="CLOSED">CLOSED</option>
          </select>
          <select
            name="clientName"
            required
            className="sm:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          >
            <option value="">Choose a client</option>
            {clients?.map((client) => {
              return (
                <option key={client.id} value={client.name}>
                  {client.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-8 flex items-center justify-end gap-4">
          <button
            type="button"
            className="rounded-3xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={pending}
            className="rounded-3xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Adding..." : "Add deal"}
          </button>
        </div>
        {state?.success && (
          <p className="mt-4 text-sm text-emerald-700">✅ Deal created successfully!</p>
        )}
      </form>
    </div>
  );
}
