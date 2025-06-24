"use client";
import { useActionState } from "react";
import { signup } from "../backend/loginAction";
import Link from "next/link";
import { Building2 } from "lucide-react";

export default function page() {
  const [state, action, pending] = useActionState(signup, { errors: {} });

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <form
        action={action}
        className="text-center rounded-lg p-5 my-5
        flex flex-col items-center justify-center bg-white w-[35vw] h-[105hv] gap-2"
      >
        <div className="flex flex-col items-center justify-between">
          <Building2 className="w-12 h-12 p-2 text-blue-700"></Building2>
          <h1 className="text-2xl font-bold mt-4">Register</h1>
          <p className="mt-2 text-gray-600">Create your CRM Pro account</p>
        </div>
        <div className="flex flex-col w-full  gap-1">
          <h3 className="mr-auto font-medium">Name</h3>
          <input
            className="w-full px-3 py-2 rounded bg-gray-300 hover:scale-x-102 duration-700"
            type="text"
            name="name"
            placeholder="Sam"
          />
          {state?.errors?.name && (
            <p className="text-red-600 font-semibold text-sm">
              {state.errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full  gap-1">
          <h3 className="mr-auto font-medium">Email</h3>
          <input
            className="w-full px-3 py-2 rounded bg-gray-300 hover:scale-x-102 duration-700"
            type="text"
            name="email"
            placeholder="Sam@example.com"
          />
          {state?.errors?.email && (
            <p className="text-red-600 font-semibold text-sm">
              {state.errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full  gap-1">
          <h3 className="mr-auto font-medium">Password</h3>
          <input
            className="w-full px-3 py-2 rounded bg-gray-300 hover:scale-x-102 duration-700"
            type="password"
            name="password"
            placeholder="Create a password"
          />
          {state?.errors?.password && (
            <p className="text-red-600 font-semibold text-sm">
              {state.errors.password}
            </p>
          )}
        </div>
        <button
          disabled={pending}
          className={`font-semibold mt-4 w-32 h-12 rounded bg-blue-700 
            cursor-pointer hover:scale-115 text-white
             hover:bg-green-700 hover:rounded-lg duration-500`}
        >
          {pending ? "Submitting...." : "Create Account"}
        </button>
        <div className="flex gap-2 w-full items-center justify-center">
          <p>Already have an account?</p>{" "}
          <Link
            href={"/login"}
            className="text-blue-700
             hover:text-emerald-500 duration-300 hover:underline duration-75"
          >
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
