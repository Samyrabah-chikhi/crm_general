import React from "react";
import { Trash, SquarePen } from "lucide-react";

const statusColors: Record<string, string> = {
  TODO: "border-l-blue-500",
  OVERDUE: "border-l-rose-500",
  DONE: "border-l-green-500",
};

export default function TasksDisplay({
  tasks,
  handleDelete,
}: {
  tasks: any[];
  handleDelete: (id: number) => Promise<void>;
}) {
  return (
    <section className="grid grid-cols-3 gap-3 h-screen py-2">
      {tasks.map((task) => (
        <main
          key={task.id}
          className={`group flex flex-col gap-2 p-6
    border border-gray-200 bg-white shadow rounded-lg h-[25vh] border-l-6
    hover:-translate-y-1.5 hover:shadow-2xl duration-300
    ${statusColors[task.status]}`}
        >
          <div className="flex justify-between">
            <h1
              className="group-hover:text-purple-500 duration-200
            text-black text-md font-semibold line-clamp-2 "
            >
              {task.title}
            </h1>
            <span className="flex gap-1">
              <button
                className="opacity-0 group-hover:opacity-100 duration-500 
              w-8 h-8 flex items-center justify-center hover:cursor-pointer
               rounded-md hover:bg-fuchsia-100 duration-300"
              >
                <SquarePen className="w-5 h-5 text-fuchsia-500"></SquarePen>
              </button>
              <button
                className="opacity-0 group-hover:opacity-100 duration-500 
              w-8 h-8 flex items-center justify-center hover:cursor-pointer
               rounded-md hover:bg-rose-100 duration-300"
               onClick={() => handleDelete(task.id)}
              >
                <Trash className="w-5 h-5 text-rose-500"></Trash>
              </button>
            </span>
          </div>
          <p className="text-sm">{formatDateTime(task.due_Date)}</p>
        </main>
      ))}
    </section>
  );
}

function formatDateTime(dateString: string | Date) {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: "numeric",
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
