import React, { useState } from "react";
import Index from "./molecules";
import { MoviesDoughnut } from "../../../data/chartData/MoviesDoughnut";
import { MovieDoughnutData } from "../../../data/chartData/MovieDoughnutData";
import { BillDoughnutData } from "../../../data/chartData/BillsData/BillDoughnut";
import { MovieLine2 } from "../../../data/chartData/MovieLine2";
import useBillsQuery from "./hooks/useBillsQuery";
import { useLocation } from "react-router-dom";

const Cable = () => {
  const { pathname } = useLocation();
  const [period, selectPeriod] = useState("all");

  const { allBills, monthlyRate, successRate } = useBillsQuery();

  const { data } = allBills({
    interval: "all",
    type: pathname.split("/")[2]?.toUpperCase(),
  });

  //   console.log(pathname.split("/"));

  const { data: monthlyRateData, isFetching: monthlyRateLoading } = monthlyRate(
    { vasType: pathname.split("/")[2]?.toUpperCase() }
  );

  const { data: successRateData, isFetching: successRateLoading } = successRate(
    { vasType: pathname.split("/")[2]?.toUpperCase(), period: period }
  );

  let volumeValue = monthlyRateData?.monthlyVolume?.map(
    (item) => item?.totalVolume
  )

  return (
    <section>
      <div className="">
        <Index
          total={data?.queryDate?.totalValue}
          today={data?.today?.totalValue}
          yesterday={data?.yesterday?.totalValue}
        />
      </div>
      {/* <div className="">
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <div className="movies-heading flex pb-4  border-b border-black/40 justify-between">
              <h1 className="font-semibold ">Popular Billers</h1>
              <select className="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue">
                <option className=" text-sm text-gray-700:outline-none">
                  Daily{" "}
                </option>
                <option>Weekly </option>
                <option>Monthly </option>
                <option>Yearly</option>
              </select>
            </div>
            <MovieDoughnutData />
          </div>
          <div className="bg-white rounded p-4 shadow ">
            <div className="movies-heading flex pb-4  border-b border-black/40 justify-between">
              <h1 className="font-semibold ">Transaction Success Rate </h1>
              <select className="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue">
                <option className=" text-sm text-gray-700:outline-none">
                  Daily{" "}
                </option>
                <option>Weekly </option>
                <option>Monthly </option>
                <option>Yearly</option>
              </select>
            </div>
            <BillDoughnutData
              percent={
                successRateData?.successRate
                  ? successRateData?.successRate?.replace("%", "")
                  : 0
              }
              total={successRateData?.totalTransactions}
              score={successRateData?.successfulTransactions}
              title="Successful Transactions"
            />
          </div>
        </div>
      </div> */}
      {/* <div>
        <MovieLine2 average={monthlyRateData?.averageVolume} value={volumeValue} />
      </div> */}
    </section>
  );
};

export default Cable;
