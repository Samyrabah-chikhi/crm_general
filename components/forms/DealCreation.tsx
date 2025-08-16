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
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[2px]">
      <form
        action={action}
        className="bg-gradient-to-l from-blue-500 to-cyan-600 rounded-md w-[40vw] h-[95vh] p-6 flex flex-col gap-3 items-center justify-center"
      >
        <X
          className="text-white ml-auto mb-auto rounded-lg
          hover:scale-110 duration-300
          w-10 h-10 bg-red-700 cursor-pointer"
          onClick={() => setShowForm(false)}
        />
        <input
          type="text"
          name="title"
          placeholder="Deal title"
          className="bg-white rounded-lg w-5/6 p-2"
          required
        />
        <input
          type="number"
          name="value"
          placeholder="Deal value"
          className="bg-white rounded-lg w-5/6 p-2"
        />
        <select
          name="status"
          defaultValue="OPEN"
          required
          className="bg-white rounded-lg p-2 w-5/6"
        >
          <option value="OPEN">OPEN</option>
          <option value="WON">WON</option>
          <option value="LOST">LOST</option>
        </select>
        <select
          name="stage"
          defaultValue="LEAD"
          required
          className="bg-white rounded-lg p-2 w-5/6"
        >
          <option value="LEAD">LEAD</option>
          <option value="CONTACT">CONTACT</option>
          <option value="NEGOTIATION">NEGOTIATION</option>
          <option value="CLOSED">CLOSED</option>
        </select>
        <select
          name="clientName"
          required
          className="bg-white rounded-lg p-2 w-5/6"
        >
          {clients?.map((client, id) => {
            return (
              <option key={client.id} value={client.name}>
                {client.name}
              </option>
            );
          })}
        </select>
        <button
          disabled={pending}
          className="mt-3 text-white text-medium text-xl hover:scale-110 duration-300
          p-2 w-28 h-10 rounded-xl bg-green-700 cursor-pointer mb-20 disabled:opacity-50"
        >
          {pending ? "Adding..." : "Add"}
        </button>
        {state?.success && (
          <p className="text-green-600">✅ Deal created successfully!</p>
        )}
      </form>
    </div>
  );
}
