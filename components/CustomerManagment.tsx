import React from "react";
import { Users } from "lucide-react";
import ActiveCustomer from "./ActiveCustomer";

export default function CustomerManagment() {
  const customers = [
    {
      abreviation: "JD",
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      abreviation: "SM",
      name: "Sarah Miller",
      email: "sarah@company.com",
      status: "Lead",
      gradient: "from-green-500 to-green-500",
    },
  ];
  return (
    <div
      className="flex flex-col bg-white border border-gray-300 
    w-[45vw] h-[70vh] p-6 rounded-lg gap-3
    hover:-translate-y-3 hover:bg-gray-50 duration-500
    group"
    >
      <span className="flex gap-3 items-center">
        <Users
          className="w-10 h-10 text-white p-1 rounded-lg
        bg-gradient-to-l from-cyan-500 to-blue-500
        group-hover:scale-110 duration-300"
        ></Users>
        <h2 className="text-black text-xl font-bold">Customer Management</h2>
      </span>
      <p>Keep track of all your customer information in one place</p>
      <div className="flex flex-col gap-6 px-4 py-4 w-full">
        {customers.map((customer, index) => {
          return (
            <ActiveCustomer
              key={index}
              name={customer.name}
              email={customer.email}
              abreviation={customer.abreviation}
              status={customer.status}
              gradient={customer.gradient}
            ></ActiveCustomer>
          );
        })}
      </div>
    </div>
  );
}
