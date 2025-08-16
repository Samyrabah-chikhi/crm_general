"use client";

import Sidebar from "@/components/forms/Sidebar";
import DashboardNavbar from "@/components/navbars/DashboardNavbar";
import Clients from "@/components/dashboard/Client/Clients";
import { useState } from "react";
import Overview from "@/components/dashboard/Overview/Overview";
import Deals from "@/components/dashboard/Deal/Deals";
import Tasks from "@/components/dashboard/Task/Tasks";

export default function page() {
  const [activeTab, setActiveTab] = useState("Clients");
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}></Sidebar>
        {activeTab === "Clients" && <Clients />}
        {activeTab === "Overview" && <Overview />}
        {activeTab === "Deals" && <Deals />}
        {activeTab === "Tasks" && <Tasks />}
      </div>
    </div>
  );
}
