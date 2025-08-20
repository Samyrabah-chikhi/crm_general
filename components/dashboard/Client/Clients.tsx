"use client";

import { useEffect, useState } from "react";
import ClientCard from "../../cards/ClientCard";
import { deleteClient, getClients } from "@/app/backend/clientAction";
import ClientHeader from "./ClientHeader";
import { Search, Users } from "lucide-react";
import ClientStats from "./ClientStats";
import ClientFields from "./ClientFields";
import UserCreation from "@/components/forms/UserCreation";

export default function ClientDisplay() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);

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
        setActive(data.filter((c) => c.status == "ACTIVE").length);
        setLeads(data.filter((c) => c.status == "LEAD").length);
        setClosed(data.filter((c) => c.status == "CLOSED").length);
      }
      setLoading(false);
    });
  }, []);


  const filteredClients = clients.filter((client) => {
    const value = search.toLowerCase();
    return (
      client.name.toLowerCase().includes(value) ||
      client.company?.toLowerCase().includes(value) ||
      client.email.toLowerCase().includes(value)
    );
  });

  return (
    <div className="flex flex-col gap-5 text-gray-800 bg-gray-50 w-full p-6">
      {/** Header  */}
      <ClientHeader setShowForm={setShowForm}></ClientHeader>
      {/** Search  */}
      <div className="bg-white p-6">
        <div
          className="flex gap-4 border-1 w-full h-14 items-center
       rounded-md border-gray-300 focus-within:ring-1"
        >
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
      <ClientStats statNumbers={[total, active, leads, closed]}></ClientStats>

      {/** Display  */}
      <div className="p-6 flex flex-col gap-1.5 bg-white w-full text-gray-500">
        <div className="flex items-center gap-4">
          <Users className="text-blue-600"></Users>
          <h2 className="text-black text-2xl font-semibold">
            Clients ({clients?.length})
          </h2>
        </div>
        <p className="text-sm">All your clients</p>
        <ClientFields></ClientFields>
        {filteredClients?.map((client, _) => {
          return (
            <ClientCard
              key={client.id}
              name={client.name}
              company={client.company}
              email={client.email}
              phone={client.phone}
              status={client.status}
              created_At={client.created_At}
              onDelete={() => handleDelete(client.id)}
            ></ClientCard>
          );
        })}
      </div>
      {showForm && (
        <UserCreation
          setShowForm={setShowForm}
          setClients={setClients}
          data={data}
        ></UserCreation>
      )}
    </div>
  );
}
