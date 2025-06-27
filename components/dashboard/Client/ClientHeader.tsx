import React from "react";

export default function ClientHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2.5 ">
        <h2 className="font-bold text-bold text-3xl text-cyan-900">
          Client Management
        </h2>
        <p>Manage your clients and track their information</p>
      </div>
      <button
        className="flex items-center justify-center text-white font-semibold
        bg-gradient-to-l from-purple-600 to-blue-600 p-5 h-8 rounded-lg text-md
        hover:scale-105 duration-300 cursor-pointer"
      >
        + Add Client
      </button>
    </div>
  );
}
