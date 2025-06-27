"use client";

import { useEffect, useState } from "react";
import ClientCard from "../cards/ClientCard";
import { getClients } from "@/app/backend/clientAction";

export default function ClientDisplay() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClients().then((data) => {
      if (data) setClients(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-purple-300 text-black">
      <h2 className="font-medium text-xl ">Clients:</h2>
      {clients?.map((client, _) => {
        return (
          <ClientCard
            key={client.id}
            name={client.name}
            status={client.status}
          ></ClientCard>
        );
      })}
    </div>
  );
}
