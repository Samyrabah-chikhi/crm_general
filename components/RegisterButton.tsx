import React from "react";

export default function RegisterButton({
  text = "Register",
}: {
  text: string;
}) {
  return text === "Register" ? (
    <button className="bg-blue-600 px-4 py-2.5 rounded-lg text-white cursor-pointer hover:bg-blue-800 duration-500">
      {text}
    </button>
  ) : (
    <button className="bg-blue-600 w-2/9 px-4 py-2.5 rounded-lg text-white cursor-pointer hover:bg-blue-800 duration-500">
      {text}
    </button>
  );
}
