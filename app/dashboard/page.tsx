"use client";

import Sidebar from "@/components/forms/Sidebar";
import UserCreation from "@/components/forms/UserCreation";
import DashboardNavbar from "@/components/navbars/DashboardNavbar";
import ClientDisplay from "@/components/sections/ClientDisplay";

export default function page() {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col items-center gap-4 justify-center items-center min-h-full">    
          <UserCreation></UserCreation>
          <ClientDisplay></ClientDisplay>
      </div>
      </div>
    </div>
  );
}
