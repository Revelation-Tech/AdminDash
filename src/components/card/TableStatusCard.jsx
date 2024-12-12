import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const TableStatusCard = ({ status, showIcon }) => {
  return (
    <span
      className={`${
        status == "active" || status == "success" || status == "successful"
          ? "bg-green-50 text-green-700"
          : "bg-red-50 text-red-700"
      } px-2.5 py-1.5 rounded-full capitalize font-semibold font-clashGrotesk text-sm inline-flex items-center gap-1`}
    >
      {showIcon && <CheckCircleIcon className="text-sm w-5 h-5"/>}
      <span>{status ? status : "undefined"}</span>
    </span>
  );
};

export default TableStatusCard;
