"use client";

import Sidebar from "@/components/forms/Sidebar";
import UserCreation from "@/components/forms/UserCreation";
import DashboardNavbar from "@/components/navbars/DashboardNavbar";
import Clients from "@/components/dashboard/Client/Clients";

export default function page() {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Clients></Clients>
      </div>
    </div>
  );
}
