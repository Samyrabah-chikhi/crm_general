import { addClient } from "@/app/backend/clientAction";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { X } from "lucide-react";

export default function UserCreation({
  setShowForm,
  setClients,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  setClients: Dispatch<SetStateAction<any[]>>;
}) {
  const [state, action, pending] = useActionState(addClient, { errors: {} });

  useEffect(() => {
    if (state?.success && state.client) {
      setClients((prev) => [...prev, state.client]);
      setShowForm(false);
    }
  }, [state, setClients, setShowForm]);

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
          <h2 className="text-2xl font-semibold text-slate-900">Add New Client</h2>
          <p className="text-sm text-slate-500">Save client details, status, and contact information quickly.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Client name"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Client@example.com"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
            required
          />
          <select
            name="status"
            defaultValue="LEAD"
            required
            className="sm:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          >
            <option value="LEAD">LEAD</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="CLOSED">CLOSED</option>
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
            className="rounded-3xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Adding..." : "Add client"}
          </button>
        </div>
        {state?.success && (
          <p className="mt-4 text-sm text-emerald-700">✅ Client created successfully!</p>
        )}
      </form>
    </div>
  );
}
