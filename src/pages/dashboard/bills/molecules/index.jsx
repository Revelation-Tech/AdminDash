import React from "react";
import { formatCurrency } from "../../../../utils/functions";

const Index = ({
  total,
  today,
  yesterday,
  totalTitle,
  todayitle,
  yesterdayTitle,
}) => {
  return (
    <div className=" grid  grid-flow-row md:grid-flow-col gap-8">
      <div className="bg-white p-4 rounded shadow-light">
        <h1 className="text-sm font-semibold">{totalTitle ?? "Total Transaction"}</h1>
        <p className="text-2xl font-semibold mt-5"> {formatCurrency(total || 0)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-light">
        <h1 className="text-sm font-semibold">{todayitle ??"Today's Transaction"}</h1>
        <p className="text-2xl font-semibold mt-5"> {formatCurrency(today || 0)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-light">
        <h1 className="text-sm font-semibold">Yesterday's Transaction</h1>
        <p className="text-2xl font-semibold mt-5">
          {formatCurrency(yesterday || 0)}
        </p>
      </div>
    </div>
  );
};

export default Index;
