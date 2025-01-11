import { ArrowUp } from "iconsax-react";
import React from "react";

const ReportCard = ({ title, value, percent }) => {
  // console.log(value);

  return (
    <div className="flex justify-between bg-white p-4 rounded-md">
      <div className="inline-flex flex-col gap-8">
        <h6 className="font-inter text-sm">{title}</h6>
        <h1 className="font-bold font-clashGrotesk text-4xl">{value ?? 0}</h1>
      </div>
      <div className="inline-flex flex-col gap-8">
        {percent && (
          <p className="inline-flex items-center gap-0.5 text-xs font-inter">
            <ArrowUp className="size-3 text-green-600" />
            <span className="text-green-600">{percent}%</span>
            vs last month
          </p>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
