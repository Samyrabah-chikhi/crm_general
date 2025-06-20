import React from "react";

export default function MetricsCards({
  title,
  logo,
  number,
  comment,
}: {
  title: string;
  logo: string;
  number: string;
  comment: string;
}) {
  return (
    <div className="bg-white border border-gray-300 w-[22vw] h-[22vh] p-6 rounded-lg flex flex-col justify-center">
      <div className="flex justify-between text-black font-medium text-md mb-2">
        {" "}
        <h3>{title}</h3> <img src={logo}></img>
      </div>
      <h3 className="font-bold text-black text-2xl">{number}</h3>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
