import React from "react";
import { Dispatch, SetStateAction } from "react";

export default function ClientHeader({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2.5 ">
        <h2 className="font-bold text-bold text-3xl text-cyan-900">
          Deal Management
        </h2>
        <p>Track your sales pipeline and manage deals</p>
      </div>
      <button
        className="flex items-center justify-center text-white font-semibold
        bg-gradient-to-l from-green-600 to-emerald-600 p-5 h-8 rounded-lg text-md
        hover:scale-105 duration-300 cursor-pointer"
        onClick={() => {
          setShowForm(true);
        }}
      >
        + Add Deal
      </button>
    </div>
  );
}
