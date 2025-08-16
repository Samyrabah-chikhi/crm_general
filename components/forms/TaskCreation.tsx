import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { addTasks } from "@/app/backend/taskAction";
import { X } from "lucide-react";

export default function TaskCreation({
  setShowForm,
  setTasks
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  setTasks:Dispatch<SetStateAction<any[]>>;
}) {
  const [state, action, pending] = useActionState(addTasks, { errors: {} });

  useEffect(() => {
      if (state?.success && state.task) {
        setTasks((prev) => [...prev, state.task]);
        setShowForm(false);
      }
    }, [state, setTasks, setShowForm]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
    backdrop-blur-[2px] backdrop-brightness-10"
    >
      <form
        action={action}
        className="bg-orange-200 rounded-sm w-[40vw] h-[85vh] p-6 flex flex-col gap-3 items-center justify-center"
      >
        <X
          className="text-white ml-auto mb-auto rounded-lg
          hover:scale-110 duration-300
          w-10 h-10 bg-red-600 cursor-pointer"
          onClick={() => setShowForm(false)}
        />
        <input
          type="text"
          name="title"
          placeholder="Title of the task"
          className="bg-white rounded-lg w-5/6 p-3"
        />
        <input
          type="date"
          name="due_Date"
          placeholder="Due Date of the task"
          className="bg-white rounded-lg w-5/6 p-3"
        />
        <select
          name="status"
          defaultValue="TODO"
          required
          className="bg-white rounded-lg p-3 w-5/6"
        >
          <option value="TODO">TODO</option>
          <option value="DONE">DONE</option>
          <option value="OVERDUE">OVERDUE</option>
        </select>
        <button
          className="mt-3 text-white text-medium text-xl 
          hover:scale-110 hover:translate-y-3 duration-300
          p-2 w-42 h-10 rounded-xl bg-amber-600 cursor-pointer mb-20"
        >
          {pending ? "Adding..." : "Add"}
        </button>
        {state?.success && (
          <p className="text-green-600">✅ Task created successfully!</p>
        )}
      </form>
    </div>
  );
}
