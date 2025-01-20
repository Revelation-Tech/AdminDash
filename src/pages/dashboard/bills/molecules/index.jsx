import React from "react";
import { formatCurrency } from "../../../../utils/functions";
import { Progress, Select } from "antd";

const Index = ({
  total,
  today,
  yesterday,
  totalTitle,
  todayitle,
  yesterdayTitle,
  sectionColumn,
  showTransactionSuccess,
  onChange
}) => {
  return (
    <div
      className={`grid grid-flow-row ${
        showTransactionSuccess ? "grid-cols-2" : "md:grid-flow-col"
      } gap-8`}
    >
      <div
        className={`bg-white p-4 py-6 rounded shadow-light ${
          showTransactionSuccess && "space-y-16"
        }`}
      >
        <h1 className="text-sm font-semibold">
          {totalTitle ?? "Total Transaction"}
        </h1>
        <p className="text-2xl font-semibold mt-5">
          {" "}
          {formatCurrency(total || 0)}
        </p>
      </div>
      <div
        className={`bg-white p-4 py-6 rounded shadow-light ${
          showTransactionSuccess && "space-y-16"
        }`}
      >
        <h1 className="text-sm font-semibold">
          {todayitle ?? "Today's Transaction"}
        </h1>
        <p className="text-2xl font-semibold mt-5">
          {" "}
          {formatCurrency(today || 0)}
        </p>
      </div>
      <div
        className={`bg-white p-4 py-6 rounded shadow-light ${
          showTransactionSuccess && "space-y-16"
        }`}
      >
        <h1 className="text-sm font-semibold">Yesterday's Transaction</h1>
        <p className="text-2xl font-semibold mt-5">
          {formatCurrency(yesterday || 0)}
        </p>
      </div>
      {showTransactionSuccess && (
        <div className="bg-white rounded shadow-light py-6 px-4">
          <div className="inline-flex justify-end w-full pb-3">
            <Select
              onChange={onChange}
              options={[
                { label: "Daily", value: "daily", className: "capilize" },
                { label: "Weekly", value: "weekly", className: "capilize" },
                { label: "Monthly", value: "monthly", className: "capilize" },
                { label: "Yearly", value: "yearly", className: "capilize" },
              ]}
              defaultValue="daily"
              className="text-sm font-sans font-medium capitalize w-1/6 text-gray-900 shadow-sm ring-1 rounded-md ring-bills-skyblue hover:bg-gray-50 focus:ring-1 focus:ring-bills-skyblue"
            />
          </div>
          <div className="grid grid-flow-row gap-3 text-sm font-medium">
            <div className="text-nowrap overflow-auto flex justify-between">
              Transaction Success Rate &nbsp;&nbsp;
              {/* <span className="text-[10px]"> 3hrs ago</span> */}
            </div>
            <div className="inline-flex justify-center align-bottom w-full items-center gap-5">
              <div className="inline-flex flex-col-reverse gap-2 px-6 border-r w-full">
                <h4 className="text-xs font-medium capitalize text-gray-500">
                  total
                </h4>
                <h2 className="font-sans font-bold text-4xl">
                  {showTransactionSuccess?.total || 0}
                </h2>
              </div>

              <div className="inline-flex flex-col-reverse gap-2 px-6 w-full">
                <h4 className="text-xs font-medium capitalize text-gray-500">
                  success
                </h4>
                <h2 className="font-sans font-bold text-4xl">
                  {showTransactionSuccess?.success || 0}
                </h2>
              </div>

              {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span> */}

              {/* <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
            </div>

            <Progress
              type="line"
              status="normal"
              percent={
                showTransactionSuccess?.percentage
                  ? showTransactionSuccess?.percentage.replace("%", "")
                  : 0
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
