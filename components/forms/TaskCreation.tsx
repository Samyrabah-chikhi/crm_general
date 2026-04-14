import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { addTasks } from "@/app/backend/taskAction";
import { X } from "lucide-react";

export default function TaskCreation({
  setShowForm,
  setTasks,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  setTasks: Dispatch<SetStateAction<any[]>>;
}) {
  const [state, action, pending] = useActionState(addTasks, { errors: {} });

  useEffect(() => {
    if (state?.success && state.task) {
      setTasks((prev) => [...prev, state.task]);
      setShowForm(false);
    }
  }, [state, setTasks, setShowForm]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
      <form
        action={action}
        className="relative w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200"
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
          <h2 className="text-2xl font-semibold text-slate-900">Add New Task</h2>
          <p className="text-sm text-slate-500">Keep your work on track with a clear task entry.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="title"
            placeholder="Title of the task"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
            required
          />
          <input
            type="date"
            name="due_Date"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
            required
          />
          <select
            name="status"
            defaultValue="TODO"
            required
            className="sm:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400"
          >
            <option value="TODO">TODO</option>
            <option value="DONE">DONE</option>
            <option value="OVERDUE">OVERDUE</option>
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
            className="rounded-3xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Adding..." : "Add task"}
          </button>
        </div>
        {state?.success && (
          <p className="mt-4 text-sm text-emerald-700">✅ Task created successfully!</p>
        )}
      </form>
    </div>
  );
}
