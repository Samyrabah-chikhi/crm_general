import { signout } from "@/app/backend/loginAction";
import React from "react";

export default function Logout() {
  return (
    <button
      onClick={() => signout()}
      className={`font-semibold w-28 h-12 rounded bg-red-700 cursor-pointer 
          hover:scale-105 hover:text-white hover:bg-green-700 
          hover:rounded-lg duration-500`}
    >
      Logout
    </button>
  );
}
