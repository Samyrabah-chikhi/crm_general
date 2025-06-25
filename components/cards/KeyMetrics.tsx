import React from "react";
import MetricsCards from "./MetricsCards";
import { Users, Calendar, TrendingUp, BarChart3 } from "lucide-react";
export default function KeyMetrics() {
  const Metrics = [
    {
      title: "Total Customers",
      logo: Users,
      number: "2,847",
      comment: "+12% from last month",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Revenue",
      logo: TrendingUp,
      number: "$45,231",
      comment: "+8% from last month",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Active Deals",
      logo: BarChart3,
      number: "127",
      comment: "+3 new this week",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Conversion Rate",
      logo: Calendar,
      number: "24.5%",
      comment: "+2.1% from last month",
      color: "from-orange-500 to-red-500"  
    },
  ];
  return (
    <div className="flex gap-5">
      {Metrics.map((metric, index) => (
        <MetricsCards
          key={index}
          title={metric.title}
          logo={metric.logo}
          number={metric.number}
          comment={metric.comment}
          color={metric.color}
        ></MetricsCards>
      ))}
    </div>
  );
}
