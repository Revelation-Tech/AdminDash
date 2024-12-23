import React from "react";
import { MoviesLine } from "@data/chartData/moviesLine";
import { TransactionFailData } from "@data/chartData/TransactionFailData";

const SmallLineGraphCard = ({report, label, showCurrency}) => {
  return (
    <div className="md:mt-0 grid grid-cols-4 gap-6 shadow-sm rounded-md bg-white p-4">
      <div className="col-span-2 space-y-12">
        <h1 className="text-sm font-medium font-inter capitalize">{label}</h1>
        <h1 className="font-bold text-4xl mt-4"> {showCurrency && "&#x20A6;"} {report?.total || report?.currentCount}</h1>
      </div>
      <div className="col-span-2 text-green-800 font-semibold mt-6 inline-flex flex-col gap-4">
        <div className="text-xs self-end">
          <span className="">{report?.percentageChange} vs last month</span>
        </div>
         {report?.currentCount > 0 ? <MoviesLine /> : <TransactionFailData/>}
      </div>
    </div>
  );
};

export default SmallLineGraphCard;
