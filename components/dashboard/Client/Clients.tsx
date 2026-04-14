"use client";

import { useEffect, useState } from "react";
import ClientCard from "../../cards/ClientCard";
import { deleteClient, getClients } from "@/app/backend/clientAction";
import ClientHeader from "./ClientHeader";
import { Search, Users } from "lucide-react";
import ClientStats from "./ClientStats";
import UserCreation from "@/components/forms/UserCreation";

const clientStatuses = ["All", "ACTIVE", "LEAD", "CLOSED"];

export default function ClientDisplay() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(0);
  const [leads, setLeads] = useState(0);
  const [closed, setClosed] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = async (id: number) => {
    const res = await deleteClient(id);
    if (res.success) {
      setClients((prev) => prev.filter((c) => c.id !== id));
    } else {
      alert("Failed to delete client.");
    }
  };

  useEffect(() => {
    getClients().then((data) => {
      if (data) {
        setClients(data);
        setTotal(data.length);
        setActive(data.filter((c) => c.status === "ACTIVE").length);
        setLeads(data.filter((c) => c.status === "LEAD").length);
        setClosed(data.filter((c) => c.status === "CLOSED").length);
      }
      setLoading(false);
    });
  }, []);

  const filteredClients = clients.filter((client) => {
    const query = search.toLowerCase();
    const matchesSearch =
      client.name.toLowerCase().includes(query) ||
      client.company?.toLowerCase().includes(query) ||
      client.email.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All" || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-5 text-slate-800 bg-slate-50 w-full p-6">
      <ClientHeader setShowForm={setShowForm} />
      <div className="grid gap-4 xl:grid-cols-[1fr_2fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Client search</h3>
          <p className="mt-2 text-sm text-slate-500">Quickly find clients by name, company, email, or status.</p>
          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Search className="h-5 w-5 text-slate-500" />
              <input
                placeholder="Search clients..."
                className="w-full bg-transparent outline-none text-slate-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Status</label>
              <div className="flex flex-wrap gap-2">
                {clientStatuses.map((status) => (
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
          </div>
        </div>
        <ClientStats statNumbers={[total, active, leads, closed]} />
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-500">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Clients</h2>
              <p className="text-sm">Showing {filteredClients.length} of {clients.length} clients</p>
            </div>
          </div>
          <div className="text-sm text-slate-500">
            {loading ? "Loading clients..." : `${filteredClients.length} result${filteredClients.length === 1 ? "" : "s"}`}
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {filteredClients.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
              No clients match your search criteria.
            </div>
          ) : (
            filteredClients.map((client) => (
              <ClientCard
                key={client.id}
                name={client.name}
                company={client.company}
                email={client.email}
                phone={client.phone}
                status={client.status}
                created_At={new Date(client.created_At)}
                onDelete={() => handleDelete(client.id)}
              />
            ))
          )}
        </div>
      </div>

      {showForm && <UserCreation setShowForm={setShowForm} setClients={setClients} />}
    </div>
  );
}
