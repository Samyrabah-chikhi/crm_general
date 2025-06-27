import React, { Dispatch, ReactElement, SetStateAction } from "react";

export default function SidebarButton({
  label,
  icon,
  activeTab,
  setActiveTab,
}: {
  label: string;
  icon: React.ElementType;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button
      className={`flex items-center gap-3 p-1 group cursor-pointer ${
        activeTab == label
          ? "bg-gradient-to-r from-blue-400 to-blue-700/80 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100 "
      }
       hover:scale-110 hover:shadow-2xl duration-300
    w-[100%] h-12 p-2 rounded-xl `}
      onClick={() => {
        setActiveTab(label);
      }}
    >
      {icon &&
        React.createElement(icon, {
          className: `${activeTab != label && "group-hover:text-blue-700"}`,
        })}
      <h3 className="text-lg">{label}</h3>
      {activeTab == label && (
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      )}
    </button>
  );
}
