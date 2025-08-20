import React, { Dispatch, SetStateAction } from "react";

export default function TaskFilterButton({
  text,
  selected,
  setSelected
}: {
  text: string;
  selected: string;
  setSelected:Dispatch<SetStateAction<string>>
}) {
  return (
    <button
      className={`w-22 h-10 rounded-md font-medium
    border border-gray-300  ${
      selected==text ? 
      "bg-neutral-900 text-white hover:bg-neutral-700" :
       "bg-white text-neutral-700 hover:bg-neutral-200"
    } duration-300 cursor-pointer`}
     onClick={(e) => {setSelected(text)}}
    >
      {text}
    </button>
  );
}
