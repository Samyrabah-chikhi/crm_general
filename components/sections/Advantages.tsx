import React from "react";
import AdvantageCard from "../cards/AdvantageCard";
import { Shield, Zap, Star } from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      title: "Enterprise Security",
      text: "Bank-level encryption and security protocols to protect your data",
      logo: Shield,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Lightning Fast",
      text: "Optimized for speed and performance with real-time updates",
      logo: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "AI-Powered Insights",
      text: "Advanced analytics and AI-driven recommendations for better decisions",
      logo: Star,
      color: "from-purple-500 to-pink-500",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl text-cyan-900 font-bold">Why Choose CRM Pro?</h1>
      <p className="text-lg text-center w-7/12">
        Discover the powerful features that make CRM Pro the perfect choice for
        growing businesses
      </p>
      <div className="flex gap-7 my-6">
        {advantages.map((advantage, index) => {
          return (
            <AdvantageCard
              key={index}
              logo={advantage.logo}
              title={advantage.title}
              text={advantage.text}
              color={advantage.color}
            ></AdvantageCard>
          );
        })}
      </div>
    </div>
  );
}
