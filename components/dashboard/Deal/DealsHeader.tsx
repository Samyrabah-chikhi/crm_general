import React from "react";
import { Dispatch, SetStateAction } from "react";

export default function DealsHeader({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-slate-900">Deal Management</h2>
        <p className="max-w-2xl text-sm text-slate-500">
          Track your pipeline, filter by stage, and surface the deals that need your attention.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Keep every deal progressing toward close with clear status visibility.
        </div>
        <button
          className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
          onClick={() => setShowForm(true)}
        >
          + Add Deal
        </button>
      </div>
    </div>
  );
}
