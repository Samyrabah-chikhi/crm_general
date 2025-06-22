"use client";
import { useActionState } from "react";
import { signin } from "../backend/loginAction";
import Link from "next/link";

export default function page() {
  const [state, action, pending] = useActionState(signin, { errors: {} });

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <form
        action={action}
        className="text-center rounded-lg p-5 flex flex-col items-center justify-center bg-blue-700 w-[35vw] h-[85vh] gap-2"
      >
        <input
          className="w-full px-3 py-2 rounded bg-gray-300 hover:scale-x-102 duration-700"
          type="text"
          name="email"
          placeholder="email"
        />
        {state?.errors?.email && (
          <p className="text-red-600 font-semibold text-sm">
            {state.errors.email}
          </p>
        )}
        <input
          className="w-full px-3 py-2 rounded bg-gray-300 hover:scale-x-102 duration-700"
          type="password"
          name="password"
          placeholder="password"
        />
        {state?.errors?.password && (
          <p className="text-red-600 font-semibold text-sm">
            {state.errors.password}
          </p>
        )}
        <button
          disabled={pending}
          className={`font-semibold mt-4 w-28 h-12 rounded bg-red-700 cursor-pointer hover:scale-115 hover:text-white hover:bg-green-700 hover:rounded-lg duration-500`}
        >
          {pending ? "Submitting...." : "Sign Up"}
        </button>
        <div className="mt-10 flex gap-8 w-full text-white items-center justify-center">
          {" "}
          <p>Not a member?</p>{" "}
          <Link
            href={"/register"}
            className="text-2xl hover:text-green-500 duration-300 underline"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
