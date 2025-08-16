import { addClient } from "@/app/backend/clientAction";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { X } from "lucide-react";
import { stat } from "fs";

export default function UserCreation({
  setShowForm,
  setClients,
  data,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  setClients: Dispatch<SetStateAction<any[]>>;
  data: any[];
}) {
  const [state, action, pending] = useActionState(addClient, { errors: {} });

  useEffect(() => {
    if (state?.success && state.client) {
      setClients((prev) => [...prev, state.client]);
      setShowForm(false);
    }
  }, [state]);

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
          onClick={() => {
            setShowForm(false);
          }}
        ></X>
        <input
          type="text"
          name="name"
          placeholder="Client name"
          className="bg-white rounded-lg w-5/6 p-2"
        />
        <input
          type="text"
          name="company"
          placeholder="Company name"
          className="bg-white rounded-lg w-5/6 p-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="bg-white rounded-lg w-5/6 p-2"
        />
        <input
          type="text"
          name="email"
          placeholder="Client@example.com"
          className="bg-white rounded-lg w-5/6 p-2"
        />
        <select
          name="status"
          defaultValue="LEAD"
          required
          className="bg-white rounded-lg p-2 w-5/6"
        >
          <option value="LEAD">LEAD</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="CLOSED">CLOSED</option>
        </select>
        <button
          className="mt-3 text-white text-medium text-xl hover:scale-110 duration-300
          p-2 w-28 h-10 rounded-xl bg-green-700 cursor-pointer mb-20"
        >
          Add
        </button>
        {state?.success && (
          <p className="text-green-600">✅ Client created successfully!</p>
        )}
      </form>
    </div>
  );
}
