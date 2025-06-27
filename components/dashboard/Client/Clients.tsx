"use client";

import { useEffect, useState } from "react";
import ClientCard from "../../cards/ClientCard";
import { getClients } from "@/app/backend/clientAction";
import ClientHeader from "./ClientHeader";
import { Search } from "lucide-react";
import ClientStats from "./ClientStats";

export default function ClientDisplay() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  /**
   useEffect(() => {
    getClients().then((data) => {
      if (data) setClients(data);
      setLoading(false);
    }); 
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
   */
  return (
    <div className="flex flex-col gap-5 text-gray-800 bg-gray-50 w-full p-6">
      {/** Header  */}
      <ClientHeader></ClientHeader>
      {/** Search  */}
      <div className="bg-white p-6">
        <div className="flex gap-4 border-1 w-full h-14 items-center
       rounded-md border-gray-300 focus-within:ring-1">
        <Search className="mx-4"></Search>
        <input
        placeholder="Search clients by name, company, or email..."
        className="w-full h-full outline-none text-lg font-medium"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      </div>
      </div>
      {/** Stats  */}
      <ClientStats></ClientStats>

      {/** clients?.map((client, _) => {
        return (
          <ClientCard
            key={client.id}
            name={client.name}
            status={client.status}
          ></ClientCard>
        );
      }) */}
    </div>
  );
}
