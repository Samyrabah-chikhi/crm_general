import React from "react";
import { Users, Activity, TrendingUp, FileText } from "lucide-react";
export default function ClientStats({
  statNumbers = [4, 2, 1, 1],
}: {
  statNumbers: number[];
}) {
  const stats = [
    { title: "Total Clients", icon: Users, color: "from-cyan-500 to-blue-500" },
    { title: "Active", icon: Activity, color: "from-green-500 to-emerald-500" },
    { title: "Leads", icon: TrendingUp, color: "from-purple-500 to-blue-500" },
    { title: "Closed", icon: FileText, color: "from-neutral-500 to-gray-500" },
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
                  ${
                  stat.title == "Leads" ? "text-blue-700" : ""
                }`}
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
