import React from "react";

export default function ActiveCustomer({
  abreviation,
  name,
  email,
  status,
  gradient
}: {
  abreviation: string;
  name: string;
  email: string;
  status: string;
  gradient: string;
}) {
  return (
    <div
      className="flex justify-between items-center p-4 rounded-lg  cursor-pointer
       bg-gray-50 group-hover:bg-white
        hover:scale-x-110 hover:scale-y-105 duration-300"
    >
      <div className="flex justify-center items-center gap-4">
        <p className={`w-12 h-12 bg-gradient-to-r ${gradient} text-white rounded-full 
        flex items-center justify-center`}>
          {abreviation}
        </p>
        <div>
          <p className="text-black font-semibold">{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <div
        className="text-blue-700 border border-blue-400 px-3 py-1 rounded-2xl
           bg-blue-50"
      >
        {status}
      </div>
    </div>
  );
}
