"use client";

import { useEffect, useState } from "react";
import DealsCard from "../../cards/DealsCard";
import { getClients } from "@/app/backend/clientAction";
import DealsHeader from "./DealsHeader";
import { Search, Users } from "lucide-react";
import DealsStats from "./DealsStats";
import DealsFields from "./DealsFields";
import DealCreation from "@/components/forms/DealCreation";
import { deleteDeal, getDeals } from "@/app/backend/dealAction";

export default function ClientDisplay() {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);

  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(0);
  const [won, setWon] = useState(0);
  const [closed, setClosed] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [clients, setClients ] = useState<any[]>([])

  const handleDelete = async (id: number) => {
    const res = await deleteDeal(id);
    if (res.success) {
      setDeals((prev) => prev.filter((c) => c.id !== id));
    } else {
      alert("Failed to delete client.");
    }
  };

  useEffect(() => {
    getDeals().then((data) => {
      if (data) {
        setDeals(data);
        setTotal(data.length);
        setOpen(data.filter((c) => c.status == "OPEN").length);
        setWon(data.filter((c) => c.status == "WON").length);
        setClosed(data.filter((c) => c.status == "LOST").length);
      }
      setLoading(false);
    });
    getClients().then((data) => {
      if(data){
        setClients(data)
      }
    })
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md cursor-not-allowed"
          disabled
        >
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Loading...
        </button>
      </div>
    );
  }

  const filteredDeals = deals.filter((deals) => {
    const value = search.toLowerCase();
    return (
      deals.title.toLowerCase().includes(value) ||
      deals.stage?.toLowerCase().includes(value) ||
      deals.clientName.toLowerCase().includes(value) ||
      deals.status.toLowerCase().includes(value)
    );
  });

  return (
    <div className="flex flex-col gap-5 text-gray-800 bg-gray-50 w-full p-6">
      {/** Header  */}
      <DealsHeader setShowForm={setShowForm}></DealsHeader>
      {/** Search  */}
      <div className="bg-white p-6">
        <div
          className="flex gap-4 border-1 w-full h-14 items-center
       rounded-md border-gray-300 focus-within:ring-1"
        >
          <Search className="mx-4"></Search>
          <input
            placeholder="Search deals by title, client, or status..."
            className="w-full h-full outline-none text-lg font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
      </div>
      {/** Stats  */}
      <DealsStats statNumbers={[total, open, won, closed]}></DealsStats>

      {/** Display  */}
      <div className="p-6 flex flex-col gap-1.5 bg-white w-full text-gray-500">
        <div className="flex items-center gap-4">
          <Users className="text-blue-600"></Users>
          <h2 className="text-black text-2xl font-semibold">
            Deals ({deals?.length})
          </h2>
        </div>
        <p className="text-sm">All your deals</p>
        <DealsFields></DealsFields>
        {filteredDeals?.map((deals, _) => {
          return (
            <DealsCard
              key={deals.id}
              title={deals.title}
              value={deals.value}
              status={deals.status}
              stage={deals.stage}
              clientName={deals.clientName}
              created_At={deals.created_At}
              onDelete={() => handleDelete(deals.id)}
            ></DealsCard>
          );
        })}
      </div>
      {showForm && (
        <DealCreation
          setShowForm={setShowForm}
          setDeals={setDeals}
          clients={clients}
        ></DealCreation>
      )}
    </div>
  );
}
