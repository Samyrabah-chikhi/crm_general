import Link from "next/link";
import React from "react";

export default function LoginButton() {
  return <Link href="/login" className="  bg-white border border-gray-300 px-5 py-2.5 rounded-lg cursor-pointer text-gray-950 hover:bg-gray-200 hover:text-black hover:scale-110 duration-500">Login</Link>;
}
