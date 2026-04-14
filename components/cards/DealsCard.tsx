import { $Enums } from "@/app/generated/prisma";
import { Trash, SquarePen } from "lucide-react";

const statusStyles: Record<string, string> = {
  OPEN: "bg-amber-100 text-amber-800",
  WON: "bg-emerald-100 text-emerald-800",
  LOST: "bg-rose-100 text-rose-800",
};

const stageStyles: Record<string, string> = {
  LEAD: "bg-slate-100 text-slate-700",
  CONTACT: "bg-indigo-100 text-indigo-700",
  NEGOTIATION: "bg-violet-100 text-violet-700",
  CLOSED: "bg-emerald-100 text-emerald-700",
};

function formatMoney(value: number) {
  return `£${value.toLocaleString("en-GB")}`;
}

export default function DealCard({
  title,
  value,
  stage,
  status,
  clientName,
  created_At,
  onDelete,
}: {
  title: string;
  value: number;
  stage: $Enums.DealStage;
  status: $Enums.DealStatus;
  clientName: string;
  created_At: Date;
  onDelete: () => void;
}) {
  return (
    <div className="grid gap-4 px-6 py-5 border border-slate-200 rounded-3xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg duration-300 md:grid-cols-[2fr_1.1fr_1fr_0.9fr_0.9fr_0.9fr] items-center">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{clientName}</p>
      </div>
      <p className="text-lg font-semibold text-slate-900">{formatMoney(value)}</p>
      <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${stageStyles[stage] ?? "bg-slate-100 text-slate-700"}`}>
        {stage}
      </span>
      <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status] ?? "bg-slate-100 text-slate-700"}`}>
        {status}
      </span>
      <p className="text-sm text-slate-500">{created_At?.toLocaleDateString("en-GB")}</p>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:text-red-700 hover:bg-red-50 transition"
          onClick={onDelete}
          title="Delete deal"
        >
          <Trash className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition"
          title="Edit deal"
        >
          <SquarePen className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
