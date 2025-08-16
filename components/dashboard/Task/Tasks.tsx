import TaskCreation from "@/components/forms/TaskCreation";
import { useEffect, useState } from "react";
import TasksHeader from "./TasksHeader";
import TasksStats from "./TasksStats";
import TaskSelection from "./TaskSelection";
import { deleteTask, getTasks } from "@/app/backend/taskAction";
import TasksDisplay from "./TasksDisplay";

export default function Tasks() {
  const [showForm, setShowForm] = useState(false);
  const [total, setTotal] = useState(0);
  const [todo, setTodo] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [overdue, setOverdue] = useState(0);

  const [tasks, setTasks] = useState<any[]>([]);

  const handleDelete = async (id: number) => {
      const res = await deleteTask(id);
      if (res.success) {
        setTasks((prev) => prev.filter((c) => c.id !== id));
      } else {
        alert("Failed to delete client.");
      }
    };

  useEffect(() => {
    getTasks().then((data) => {
      if (data) {
        console.log(data);
        setTasks(data);
        setTotal(data.length)
        setTodo(data.filter((c) => c.status == "TODO").length);
        setCompleted(data.filter((c) => c.status == "DONE").length);
        setOverdue(data.filter((c) => c.status == "OVERDUE").length);
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 text-gray-800 bg-gray-50 w-full p-6">
      <TasksHeader setShowForm={setShowForm}></TasksHeader>
      <TasksStats statNumbers={[total, todo, completed, overdue]}></TasksStats>
      <TaskSelection></TaskSelection>
      <TasksDisplay tasks={tasks} handleDelete={handleDelete}></TasksDisplay>
      {showForm && (
        <TaskCreation
          setShowForm={setShowForm}
          setTasks={setTasks}
        ></TaskCreation>
      )}
    </div>
  );
}
