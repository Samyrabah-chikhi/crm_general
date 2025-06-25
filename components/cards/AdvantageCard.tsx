import React from "react";

export default function AdvantageCard({
  logo,
  title,
  text,
  color,
}: {
  logo: React.ElementType;
  title: string;
  text: string;
  color: string;
}) {

  return (
    <div
      className={`bg-white hover:-translate-y-3 hover:bg-fuchsia-100 duration-500 group       
    flex flex-col items-center justify-center gap-1 border border-gray-300
    w-[30vw] h-[40vh] rounded-lg`}
    >
      {logo &&
        React.createElement(logo, {
          className: `mb-6 w-18 h-18 p-4 text-white bg-gradient-to-r ${color} rounded-2xl bg-blue-500 group-hover:rotate-15 group-hover:scale-110 duration-500`,
        })}
      <h2 className="text-2xl text-black font-semibold group-hover:text-blue-600">
        {title}
      </h2>
      <p className="text-center w-3/4">{text}</p>
    </div>
  );
}
