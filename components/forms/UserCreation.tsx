
import { addClient } from "@/app/backend/clientAction";
import { useActionState } from "react";

export default function UserCreation() {
  const [state, action, pending] = useActionState(addClient, { errors: {} });
  return (
    <form
      action={action}
      className="mt-2 flex flex-col gap-2 items-center justify-center
         bg-blue-300 rounded-md w-[30vw] h-[70vh] p-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Client name"
        className="mt-4 bg-white rounded-lg w-5/6 p-2"
      ></input>
      <input
        type="text"
        name="company"
        placeholder="Company name"
        className=" bg-white rounded-lg w-5/6 p-2"
      ></input>
      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        className="bg-white rounded-lg w-5/6 p-2"
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Client@example.com"
        className="mb-4 bg-white rounded-lg w-5/6 p-2"
      ></input>
      <select
        name="status"
        defaultValue="LEAD"
        required={true}
        className="bg-white rounded-lg p-2"
      >
        <option value="LEAD">LEAD</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="CLOSED">CLOSED</option>
      </select>
      <button
        className="mt-3 text-white text-medium text-xl hover:scale-110 duration-300
      p-2 w-20 h-10 rounded-xl bg-green-700 cursor-pointer"
      >
        Add
      </button>
      {state?.success && (
        <p className="text-green-600">✅ Client created successfully!</p>
      )}
    </form>
  );
}
