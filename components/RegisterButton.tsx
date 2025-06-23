import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RegisterButton({
  text = "Register",
}: {
  text: string;
}) {
  return text === "Register" ? (
    <Link
      href="/register"
      className="bg-blue-600 px-4 py-2.5 rounded-lg text-white cursor-pointer hover:bg-blue-800 hover:scale-110 duration-500"
    >
      {text}
    </Link>
  ) : (
    <Link
      href="/register"
      className="group bg-linear-to-r from-blue-500 to-violet-500 hover:bg-linear-to-l w-[30%] px-4.5 py-2.5 rounded-lg text-xl font-semibold text-white cursor-pointer hover:scale-105 duration-500"
    >
      <span className="flex items-center justify-center gap-2">
        {text}
        <ArrowRight className="transition-transform group-hover:translate-x-1.5 duration-300"></ArrowRight>
      </span>
    </Link>
  );
}
