import React from "react";
import MetricsCards from "./MetricsCards";

export default function KeyMetrics() {
  const Metrics = [
    {
      title: "Total Customers",
      logo: "",
      number: "2,847",
      comment: "+12% from last month",
    },
    {
      title: "Revenue",
      logo: "",
      number: "$45,231",
      comment: "+8% from last month",
    },
    {
      title: "Active Deals",
      logo: "",
      number: "127",
      comment: "+3 new this week",
    },
    {
      title: "Conversion Rate",
      logo: "",
      number: "24.5%",
      comment: "+2.1% from last month",
    },
  ];
  return (
    <div className="flex gap-4">
      {Metrics.map((metric, index) => (
        <MetricsCards
          key={index}
          title={metric.title}
          logo={null}
          number={metric.number}
          comment={metric.comment}
        ></MetricsCards>
      ))}
    </div>
  );
}
