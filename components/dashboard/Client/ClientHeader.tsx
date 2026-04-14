import React from "react";
import { Dispatch, SetStateAction } from "react";

export default function ClientHeader({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-slate-900">Client Management</h2>
        <p className="max-w-2xl text-sm text-slate-500">
          Manage your clients, update status, and keep contact details organized in one place.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Keep your client pipeline accurate and ready for follow-up.
        </div>
        <button
          className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
          onClick={() => setShowForm(true)}
        >
          + Add Client
        </button>
      </div>
    </div>
  );
}
