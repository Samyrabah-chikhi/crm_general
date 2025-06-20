import React from "react";
import RegisterButton from "./RegisterButton";

export default function InfoSection() {
  return (
    <div className="text-center flex flex-col gap-5 mt-6">
      <h2 className="text-4xl text-black font-bold">
        Manage Your Customer Relationships
      </h2>
      <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto ">
        Streamline your sales process, track customer interactions, and grow
        your business with our comprehensive CRM solution.
      </p>
      <div className="flex justify-center ">
        <RegisterButton text="  Get Started Free  "></RegisterButton>
      </div>
    </div>
  );
}
