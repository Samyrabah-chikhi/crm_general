import React from "react";
import { Calendar } from "lucide-react";
import UserActivity from "../cards/UserActivity";

export default function ActivityTimeline() {
  const activities = [
    {
      title: "Called John Doe",
      time: "2 hours ago",
      color: "bg-blue-500",
    },
    {
      title: "Email sent to Sarah Miller",
      time: "5 hours ago",
      color: "bg-green-500",
    },
    {
      title: "Meeting scheduled",
      time: "1 day ago",
      color: "bg-amber-500",
    },
  ];
  return (
    <div
      className="flex flex-col bg-white border border-gray-300 
    w-[45vw] h-[70vh] p-6 rounded-lg gap-3
    hover:-translate-y-3 hover:bg-green-50 duration-500
    group"
    >
      <span className="flex gap-3 items-center">
        <Calendar
          className="w-10 h-10 text-white p-1 rounded-lg
        bg-gradient-to-l from-emerald-500 to-green-500
        group-hover:scale-110 duration-300"
        ></Calendar>
        <h2 className="text-black text-xl font-bold">Activity Timeline</h2>
      </span>
      <p>Track all interactions and follow-ups</p>
      <div className="mt-4 flex flex-col gap-7 p-2">
        {activities.map((activity, index) => {
          return (
            <UserActivity
              key={index}
              color={activity.color}
              time={activity.time}
              title={activity.title}
            ></UserActivity>
          );
        })}
      </div>
    </div>
  );
}
