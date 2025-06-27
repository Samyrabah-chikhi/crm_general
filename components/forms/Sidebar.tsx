import {
  BarChart3,
  CheckSquare,
  FileText,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import SidebarButton from "../buttons/SidebarButton";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("Overview");

  const sidebarItems = [
    { label: "Overview", icon: BarChart3 },
    { label: "Clients", icon: Users },
    { label: "Deals", icon: Handshake },
    { label: "Logs", icon: FileText },
    { label: "Tasks", icon: CheckSquare },
    { label: "Stats", icon: TrendingUp },
  ];
  return (
    <aside className="w-80 min-h-screen border-r border-gray-300 sticky top-16">
      <nav className="flex flex-col gap-2 p-4">
        {sidebarItems.map((item, _) => {
          return (
            <SidebarButton
              label={item.label}
              icon={item.icon}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            ></SidebarButton>
          );
        })}
      </nav>
    </aside>
  );
}
