"use client";

import { signout } from "@/app/backend/loginAction";
import UserCreation from "@/components/forms/UserCreation";

export default function page() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-full min-w-full">
      <button
        onClick={() => signout()}
        className={`font-semibold mt-4 w-28 h-12 rounded bg-red-700 cursor-pointer 
          hover:scale-115 hover:text-white hover:bg-green-700 
          hover:rounded-lg duration-500`}
      >
        Logout
      </button>
      <UserCreation></UserCreation>
    </div>
  );
}
