import React from "react";
import { Building2 } from "lucide-react";
import LogoutButton from "../buttons/LogoutButton";

export default function DashboardNavbar() {
  return (
    <nav className="border-b border-gray-200 h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
      <div className="group flex justify-center items-center gap-2 cursor-pointer">
        <Building2 className="w-12 h-8 text-blue-700 group-hover:rotate-12 group-hover:scale-110 duration-300"></Building2>
        <div>
          <h1 className="font-bold text-xl text-slate-900 group-hover:text-blue-700 duration-300">CRM Pro</h1>
          <p className="text-sm text-slate-500">Sales, clients, and task management in one place</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <LogoutButton />
      </div>
    </nav>
  );
}
