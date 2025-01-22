import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Switch } from "antd";
import { formatNumber } from "chart.js/helpers";
import React, { useState } from "react";
import { formatCurrency } from "../../../utils/functions";

const Fees = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const [fee, setFee] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-light p-8 space-y-5">
      <div className="inline-flex items-center ont-inter font-normal gap-5">
        <h3 className="text-2xl ">Enable Transaction Fee</h3>
        <span className="text-lg text-[#7F7F7F] inline-flex items-center gap-2.5 capitalize">
          {switchOn ? "on" : "off"} <Switch onChange={setSwitchOn} />
        </span>
      </div>

      <div
        className={`py-5 rounded-md px-4 ${
          switchOn
            ? "bg-[#73C97C1A] text-[#73C97C]"
            : "bg-[#E74C3C1A] text-[#E74C3C]"
        } space-y-3`}
      >
        <div className="inline-flex gap-2">
          {switchOn ? (
            <CheckCircleIcon className="size-6" />
          ) : (
            <XCircleIcon className="size-6" />
          )}
          <h3 className="font-inter font-semibold text-xl">
            {" "}
            {switchOn ? "Enabled" : "Disabled"}
          </h3>
        </div>
        <p>
          Transaction fees have been successfully activated. All users will now
          be charged the designated fee for every transaction processed on the
          platform. This adjustment ensures seamless operations and supports the
          continued growth and sustainability of our services. Please review the
          fee structure to ensure it aligns with the business goals
        </p>
      </div>

      <div className="w-full max-w-lg space-y-1">
        <label htmlFor="fees" className="text-base font-sans">Fee</label>
        <input
          disabled={!switchOn}
          type="text"
          name="fees"
          id="fees"
        //   value={formatCurrency(fee)}
          placeholder="0.00"
          className={`w-full rounded-md py-3 px-4 focus:ring-bills-darkblue focus:outline-none ${
            switchOn ? "" : "bg-[#5555551A]"
          } border border-[#D0D5DD]`}
           onChange={e => setFee(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Fees;
