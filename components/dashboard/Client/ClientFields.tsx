import React from "react";

export default function ClientFields() {
  return (
    <div className="grid grid-cols-[2fr_2fr_3fr_1fr_1fr_1fr] gap-4 mt-10 p-4 font-medium">
      <h3>Client</h3>
      <h3>Company</h3>
      <h3>Contact</h3>

      <h3>Status</h3>
      <h3>Added</h3>
      <h3>Actions</h3>
    </div>
  );
}
