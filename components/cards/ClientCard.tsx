import { $Enums } from "@/app/generated/prisma";
import { Trash, SquarePen } from "lucide-react";

const statusStyles: Record<string, string> = {
  ACTIVE: "bg-emerald-100 text-emerald-700",
  LEAD: "bg-blue-100 text-blue-700",
  CLOSED: "bg-slate-100 text-slate-700",
};

export default function ClientCard({
  name,
  company,
  phone,
  email,
  status,
  created_At,
  onDelete,
}: {
  name: string;
  status: $Enums.ClientStatus;
  phone: string;
  email: string;
  company: string | null;
  created_At: Date;
  onDelete: () => void;
}) {
  return (
    <div className="grid gap-4 px-6 py-5 border border-slate-200 rounded-3xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg duration-300 md:grid-cols-[1.6fr_1.4fr_1fr_0.9fr_0.9fr] items-center">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-500">{company ? company : "No company"}</p>
      </div>

      <div className="flex flex-col gap-1 text-sm text-slate-600">
        <span>{email}</span>
        <span>{phone}</span>
      </div>

      <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status] ?? "bg-slate-100 text-slate-700"}`}>
        {status}
      </span>

      <p className="text-sm text-slate-500">{created_At?.toLocaleDateString("en-GB")}</p>

      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:text-red-700 hover:bg-red-50 transition"
          onClick={onDelete}
          title="Delete client"
        >
          <Trash className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition"
          title="Edit client"
        >
          <SquarePen className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
