import React from "react";
import { TrendingUp } from "lucide-react";

export default function MetricsCards({
  title,
  logo,
  number,
  comment,
  color,
}: {
  title: string;
  logo: React.ElementType;
  number: string;
  comment: string;
  color: string;
}) {
  var [fromColor, toColor] = color
    .split(" ")
    .map((part) => part.split("-")[1]);
  console.log(fromColor);
  console.log(toColor);
  if (toColor == "emerald") {
    toColor = "oklch(97.9% 0.021 166.113)";
  }
  return (
    <div
      className="group bg-white border border-gray-300 cursor-pointer
      gradient-card
     w-[22vw] h-[27vh] p-6 rounded-lg flex flex-col justify-center"
      style={
        {
          "--from-color": fromColor,
          "--to-color": toColor,
        } as React.CSSProperties
      }
    >
      <div className="flex justify-between items-center font-medium text-md mb-3">
        {" "}
        <h3>{title}</h3>
        <div
          className={`p-3 rounded-xl bg-gradient-to-r ${color} group-hover:rotate-15 group-hover:scale-110 duration-500`}
        >
          {logo &&
            React.createElement(logo, {
              className: "w-4 h-4 text-white",
            })}
        </div>
      </div>
      <h3 className="font-bold text-black text-2xl">{number}</h3>
      <span className="flex text-sm text-green-500 gap-1.5 items-center">
        <TrendingUp className="w-3 h-3"></TrendingUp>
        <p>{comment}</p>
      </span>
    </div>
  );
}
