import React, { useState } from "react";
import Index from "./molecules";
import AirtimeHorizontalData from "../../../data/chartData/BillsData/AirtimeHorizontalData";
import { MovieLine2 } from "../../../data/chartData/MovieLine2";
import useBillsQuery from "./hooks/useBillsQuery";
import { useLocation } from "react-router-dom";

export const Airtime = () => {
  const { pathname } = useLocation();
  const { allBills, monthlyRate, successRate } = useBillsQuery();
  const [period, selectPeriod] = useState("all");

  const { data } = allBills({
    interval: "all",
    type: pathname.split("/")[2]?.toUpperCase(),
  });

  // console.log(pathname.split("/"))

  const { data: monthlyRateData, isFetching: monthlyRateLoading } = monthlyRate(
    { vasType: pathname.split("/")[2]?.toUpperCase() }
  );

  const { data: airtimeSuccessRateData, isFetching: airtelSuccessRateLoading } =
    successRate({ vasType: pathname.split("/")[2]?.toUpperCase(), period: period});

  let volumeValue = monthlyRateData?.monthlyVolume?.map(
    (item) => item?.totalVolume
  );

  return (
    <section>
      <div className="space-y-5">
        <Index
          totalTitle="Total Transaction"
          total={data?.queryDate?.totalValue}
          today={data?.today?.totalValue}
          yesterday={data?.yesterday?.totalValue}
          showTransactionSuccess={{
            total: airtimeSuccessRateData?.totalTransactions,
            success: airtimeSuccessRateData?.successfulTransactions,
            percentage: airtimeSuccessRateData?.successRate,
          }}
          onChange={(value) => selectPeriod(value)}
        />

        {/* <Index
          totalTitle="Total Transaction Volume"
          todayyitle
          yesterdayTitle
          total={data?.queryDate?.totalValue}
          today={data?.today?.totalValue}
          yesterday={data?.yesterday?.totalValue}
        /> */}
      </div>

      {/* <div className="grid mt-4 gap-8 md:grid-flow-col grid-col-1 md:grid-cols-2 w-full">
        <div className="bg-white p-4 col-span-1 shadow rounded w-full">
          <div className="border-b border-bills-lightgrey/20 mb-4">
            <h1 className="text-xl font-semibold ">Best Seller By Quanlity</h1>
            <p className="text-sm text-bills-lightgrey">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, mollitia.
            </p>
          </div>
          <div className="w-full">
            <AirtimeHorizontalData />
          </div>
        </div>
        <div className="bg-white p-4 col-span-1 shadow rounded w-full">
          <div className="border-b border-bills-lightgrey/20 mb-4">
            <h1 className="text-xl font-semibold ">Best Seller By Quanlity</h1>
            <p className="text-sm text-bills-lightgrey">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, mollitia.
            </p>
          </div>
          <div className="w-full">
            <AirtimeHorizontalData />
          </div>
        </div>
      </div> */}
      {/* <div>
        <MovieLine2
          average={monthlyRateData?.averageVolume}
          value={volumeValue}
        />
      </div> */}
    </section>
  );
};
