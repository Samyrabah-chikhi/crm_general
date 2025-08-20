import TaskFilterButton from "@/components/buttons/TaskFilterButton";
import React, { Dispatch, SetStateAction } from "react";

export default function TaskSelection({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex gap-2 bg-white p-4 w-full">
      <TaskFilterButton
        text="All Tasks"
        selected={selected}
        setSelected={setSelected}
      ></TaskFilterButton>
      <TaskFilterButton
        text="To Do"
        selected={selected}
        setSelected={setSelected}
      ></TaskFilterButton>
      <TaskFilterButton
        text="Done"
        selected={selected}
        setSelected={setSelected}
      ></TaskFilterButton>
      <TaskFilterButton
        text="Overdue"
        selected={selected}
        setSelected={setSelected}
      ></TaskFilterButton>
    </div>
  );
}
