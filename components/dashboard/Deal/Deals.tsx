"use client";

import { useEffect, useState } from "react";
import DealsCard from "../../cards/DealsCard";
import { getClients } from "@/app/backend/clientAction";
import DealsHeader from "./DealsHeader";
import { Search, Users } from "lucide-react";
import DealsStats from "./DealsStats";
import DealCreation from "@/components/forms/DealCreation";
import { deleteDeal, getDeals } from "@/app/backend/dealAction";

const statuses = ["All", "OPEN", "WON", "LOST"];
const stages = ["All", "LEAD", "CONTACT", "NEGOTIATION", "CLOSED"];

export default function ClientDisplay() {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [stageFilter, setStageFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [clients, setClients] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(0);
  const [won, setWon] = useState(0);
  const [value, setValue] = useState(0);

  const handleDelete = async (id: number) => {
    const res = await deleteDeal(id);
    if (res.success) {
      setDeals((prev) => prev.filter((c) => c.id !== id));
    } else {
      alert("Failed to delete deal.");
    }
  };

  useEffect(() => {
    getDeals().then((items) => {
      if (items) {
        setDeals(items);
        setTotal(items.length);
        setOpen(items.filter((item) => item.status === "OPEN").length);
        setWon(items.filter((item) => item.status === "WON").length);
        const totalValue = items.reduce((sum: number, item: any) => sum + item.value, 0);
        setValue(totalValue);
      }
      setLoading(false);
    });
    getClients().then((data) => {
      if (data) setClients(data);
    });
  }, []);

  const filteredDeals = deals.filter((deal) => {
    const term = search.toLowerCase();
    const matchesSearch =
      deal.title.toLowerCase().includes(term) ||
      deal.clientName.toLowerCase().includes(term) ||
      deal.stage?.toLowerCase().includes(term) ||
      deal.status.toLowerCase().includes(term);

    const matchesStatus = statusFilter === "All" || deal.status === statusFilter;
    const matchesStage = stageFilter === "All" || deal.stage === stageFilter;

    return matchesSearch && matchesStatus && matchesStage;
  });

  return (
    <div className="flex flex-col gap-5 text-slate-800 bg-slate-50 w-full p-6">
      <DealsHeader setShowForm={setShowForm} />

      <div className="grid gap-4 xl:grid-cols-[1fr_2fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Deal search</h3>
          <p className="mt-2 text-sm text-slate-500">Filter your pipeline by title, client, stage, or status.</p>
          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Search className="h-5 w-5 text-slate-500" />
              <input
                placeholder="Search deals..."
                className="w-full bg-transparent outline-none text-slate-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setStatusFilter(status)}
                      className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                        statusFilter === status
                          ? "bg-blue-600 text-white shadow"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Stage</label>
                <div className="flex flex-wrap gap-2">
                  {stages.map((stage) => (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setStageFilter(stage)}
                      className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                        stageFilter === stage
                          ? "bg-blue-600 text-white shadow"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {stage}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DealsStats statNumbers={[total, open, won, value]} />
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-slate-500">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Deals</h2>
                <p className="text-sm">Viewing {filteredDeals.length} of {deals.length} deals</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-500">
            {loading ? "Loading deals..." : `${filteredDeals.length} result${filteredDeals.length === 1 ? "" : "s"}`}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {filteredDeals.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
              No deals match your filters. Try adjusting the search or status.
            </div>
          ) : (
            filteredDeals.map((deal) => (
              <DealsCard
                key={deal.id}
                title={deal.title}
                value={deal.value}
                status={deal.status}
                stage={deal.stage}
                clientName={deal.clientName}
                created_At={new Date(deal.created_At)}
                onDelete={() => handleDelete(deal.id)}
              />
            ))
          )}
        </div>
      </div>

      {showForm && (
        <DealCreation setShowForm={setShowForm} setDeals={setDeals} clients={clients} />
      )}
    </div>
  );
}
