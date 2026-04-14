import TaskCreation from "@/components/forms/TaskCreation";
import { useEffect, useState } from "react";
import TasksHeader from "./TasksHeader";
import TasksStats from "./TasksStats";
import TaskSelection from "./TaskSelection";
import { deleteTask, getTasks } from "@/app/backend/taskAction";
import TasksDisplay from "./TasksDisplay";
import { Search } from "lucide-react";

export default function Tasks() {
  const [showForm, setShowForm] = useState(false);
  const [total, setTotal] = useState(0);
  const [todo, setTodo] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [overdue, setOverdue] = useState(0);
  const [selected, setSelected] = useState("All Tasks");
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<any[]>([]);

  const handleDelete = async (id: number) => {
    const res = await deleteTask(id);
    if (res.success) {
      setTasks((prev) => prev.filter((c) => c.id !== id));
    } else {
      alert("Failed to delete task.");
    }
  };

  useEffect(() => {
    getTasks().then((data) => {
      if (data) {
        setTasks(data);
        setTotal(data.length);
        setTodo(data.filter((c) => c.status === "TODO").length);
        setCompleted(data.filter((c) => c.status === "DONE").length);
        setOverdue(data.filter((c) => c.status === "OVERDUE").length);
      }
    });
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const term = search.toLowerCase();
    const matchesSearch = task.title.toLowerCase().includes(term) || task.status.toLowerCase().includes(term);
    const matchesStatus =
      selected === "All Tasks" || task.status.toUpperCase() === selected.replace(" ", "").toUpperCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-5 text-slate-800 bg-slate-50 w-full p-6">
      <TasksHeader setShowForm={setShowForm} />
      <div className="grid gap-4 xl:grid-cols-[1fr_2fr]">
        <TasksStats statNumbers={[total, todo, completed, overdue]} />
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Task search</h3>
          <p className="mt-2 text-sm text-slate-500">Search tasks and keep the pipeline clear.</p>
          <div className="mt-5 flex rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
            <Search className="h-5 w-5 text-slate-500" />
            <input
              placeholder="Search tasks..."
              className="ml-3 w-full bg-transparent outline-none text-slate-900"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <TaskSelection selected={selected} setSelected={setSelected} />
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Tasks</h2>
            <p className="text-sm text-slate-500">Showing {filteredTasks.length} of {tasks.length} tasks</p>
          </div>
          <div className="text-sm text-slate-500">{filteredTasks.length === 0 ? "No tasks match filters." : `${filteredTasks.length} task${filteredTasks.length === 1 ? "" : "s"}`}</div>
        </div>
        <div className="mt-6">
          <TasksDisplay tasks={filteredTasks} handleDelete={handleDelete} />
        </div>
      </div>
      {showForm && <TaskCreation setShowForm={setShowForm} setTasks={setTasks} />}
    </div>
  );
}
