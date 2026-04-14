import React from "react";
import { Trash, SquarePen } from "lucide-react";

const badgeStyles: Record<string, string> = {
  TODO: "bg-blue-100 text-blue-700",
  OVERDUE: "bg-rose-100 text-rose-700",
  DONE: "bg-emerald-100 text-emerald-700",
};

export default function TasksDisplay({
  tasks,
  handleDelete,
}: {
  tasks: any[];
  handleDelete: (id: number) => Promise<void>;
}) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {tasks.length === 0 ? (
        <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
          No tasks found. Create a new task to get started.
        </div>
      ) : (
        tasks.map((task) => (
          <article
            key={task.id}
            className="group flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-lg font-semibold text-slate-900 line-clamp-2">
                  {task.title}
                </h1>
                <p className="mt-2 text-sm text-slate-600">Due {formatDateTime(task.due_Date)}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[task.status] ?? "bg-slate-100 text-slate-700"}`}>
                {task.status}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                title="Edit task"
              >
                <SquarePen className="mr-2 h-4 w-4" />
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(task.id)}
                className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-100 transition"
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </button>
            </div>
          </article>
        ))
      )}
    </section>
  );
}

function formatDateTime(dateString: string | Date) {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formatted = date.toLocaleString("en-US", options);
  const [day, time] = formatted.split(", ");
  return `${day} at ${time}`;
}
