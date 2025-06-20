import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

export default function HomeNavbar() {
  return (
    <nav className="border-b border-gray-200 h-16 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h1 className="font-bold text-2xl text-black">CRM Pro</h1>
      <div className="flex justify-center items-center gap-4">
        <LoginButton></LoginButton>
        <RegisterButton text="Register"/>
      </div>
    </nav>
  );
}
