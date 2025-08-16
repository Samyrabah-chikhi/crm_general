import React from "react";
import { Dispatch, SetStateAction } from "react";

export default function TasksHeader({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2.5 ">
        <h2 className="font-bold text-bold text-3xl text-cyan-900">
          Task Management
        </h2>
        <p>Organize and track your tasks efficiently</p>
      </div>
      <button
        className="flex items-center justify-center text-white font-semibold
        bg-gradient-to-l from-orange-600 to-amber-600 p-5 h-8 rounded-lg text-md
        hover:scale-105 duration-300 cursor-pointer"
        onClick={() => {
          setShowForm(true);
        }}
      >
        + Add Task
      </button>
    </div>
  );
}
