import React from "react";

export default function UserActivity({
  title,
  time,
  color,
}: {
  title: string;
  time: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 p-2 ${color} rounded-full`}></div>
      <div className="flex flex-col">
        <h2 className="text-black font-medium">{title}</h2>
        <p>{time}</p>
      </div> 
    </div>
  );
}
