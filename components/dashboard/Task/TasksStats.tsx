import React from "react";
import { Clock, CheckSquare, Bell } from "lucide-react";

export default function TasksStats({
  statNumbers = [3, 2, 1, 1],
}: {
  statNumbers: number[];
}) {
  const stats = [
    {
      title: "Total Tasks",
      icon: CheckSquare,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "To Do",
      icon: Clock,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Completed",
      icon: CheckSquare,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Overdue",
      icon: Bell,
      color: "from-pink-500 to-rose-500",
    },
  ];
  return (
    <div className="flex gap-5">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className="w-full h-28 p-5 flex justify-between items-center 
            hover:shadow-xl duration-300 shadow-md
          rounded-lg bg-white"
          >
            <div className="flex flex-col">
              <h1 className="text-gray-500 font-medium">{stat.title}</h1>
              <p
                className={`text-2xl font-bold ${
                  stat.title == "Active" ? "text-green-700" : ""
                }
                  ${stat.title == "Leads" ? "text-blue-700" : ""}`}
              >
                {statNumbers[index]}
              </p>
            </div>
            {React.createElement(stat.icon, {
              className: `text-white w-11 h-11 rounded-lg p-3
              bg-gradient-to-l ${stat.color}`,
            })}
          </div>
        );
      })}
    </div>
  );
}
