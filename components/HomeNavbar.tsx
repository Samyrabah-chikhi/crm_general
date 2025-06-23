import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { Building2 } from "lucide-react";

export default function HomeNavbar() {
  return (
    <nav className="border-b border-gray-200 h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="group flex justify-center items-center gap-2 cursor-pointer">
        <Building2 className="pin w-12 h-8 text-blue-700 group-hover:rotate-15 group-hover:scale-110 duration-300"></Building2>
        <h1 className="font-bold text-xl text-black group-hover:text-blue-700 duration-300">CRM Pro</h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <LoginButton></LoginButton>
        <RegisterButton text="Register" />
      </div>
    </nav>
  );
}
