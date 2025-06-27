"use client";

import Sidebar from "@/components/forms/Sidebar";
import UserCreation from "@/components/forms/UserCreation";
import DashboardNavbar from "@/components/navbars/DashboardNavbar";
import Clients from "@/components/dashboard/Client/Clients";
import { useState } from "react";
import Overview from "@/components/dashboard/Overview/Overview";

export default function page() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}></Sidebar>
        {activeTab === "Clients" && <Clients />}
        {activeTab === "Overview" && <Overview />}
      </div>
    </div>
  );
}
