import React from "react";

export default function ClientCard({
  name,
  status,
}: {
  name: string;
  status: string;
}) {
  return (
    <div className="w-[40vw] h-[20vh] bg-pink-300 text-center">
      <h3>{name}</h3>
      <p>{status}</p>
    </div>
  );
}
