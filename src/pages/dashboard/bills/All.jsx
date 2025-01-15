import React, { useState } from "react";
import { BillChart } from "../../../data/chartData/BillsData/BillChart";
import { MovieLine2 } from "../../../data/chartData/MovieLine2";
import { BillPieChart } from "../../../data/chartData/BillsData/BillPieChart";
import { MovieDoughnutData } from "../../../data/chartData/MovieDoughnutData";
import { BillDoughnutData } from "../../../data/chartData/BillsData/BillDoughnut";
import Index from "./molecules";
import useBillsQuery from "./hooks/useBillsQuery";
import PageLoader from "../../../components/PageLoader";
import { Progress, Select } from "antd";

export const All = () => {
  const [period, setPeriod] = useState("all");
  const [successPeriod, setSuccessPeriod] = useState("all");

  // const { pathname } = useLocation();

  // console.log(pathname)

  const { allBills, bestSelling, customerRate, monthlyRate, successRate } =
    useBillsQuery();

  const { data } = allBills({ interval: "all", type: "ALL" });
  const { data: bestSellingData, isLoading } = bestSelling({ period: period });
  const { data: customerRateData, isFFetching: customerRateLoading } =
    customerRate;

  const { data: monthlyRateData, isFetching: monthlyRateLoading } = monthlyRate(
    { vasType: "" }
  );

  const { data: successRateData, isFetching: successRateLoading } = successRate(
    { vasType: "", period: successPeriod }
  );

  const { data: airtimeSuccessRateData, isFetching: airtelSuccessRateLoading } =
    successRate({ vasType: "AIRTIME", period: "all" });

  const { data: dataSuccessRateData, isFetching: dataSuccessRateLoading } =
    successRate({ vasType: "DATA", period: "all" });

  const { data: cableSuccessRateData, isFetching: cableSuccessRateLoading } =
    successRate({ vasType: "TV", period: "all" });

  const { data: powerSuccessRateData, isFetching: powerSuccessRateLoading } =
    successRate({ vasType: "ELECTRICITY", period: "all" });

  let volumeValue = monthlyRateData?.monthlyVolume?.map(
    (item) => item?.totalVolume
  );

  console.log(powerSuccessRateData);

  return (
    <section>
      <Index
        total={data?.queryDate?.totalValue}
        today={data?.today?.totalValue}
        yesterday={data?.yesterday?.totalValue}
      />

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 py-8">
        <div className=" p-2 md:p-8 col-span-5 bg-white rounded  shadow-light">
          <div className="flex justify-between items-center text-bills-skyblue mb-3">
            <div className="">
              <h1 className="text-md text-bills-darkblue font-semibold">
                Best Selling Service By Value
              </h1>
              <span className="text-[0.625rem] text-[#909090] font-sans">
                Based on total number of transactions
              </span>
            </div>
            <select
              onChange={(e) => {
                e.preventDefault();
                setPeriod(e.target.value);
              }}
              className="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-light ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue"
            >
              <option className=" text-sm text-bills-skyblue:outline-none">
                Daily{" "}
              </option>
              <option>Weekly </option>
              <option>Monthly </option>
              <option>Yearly</option>
            </select>
          </div>

          {/* <p className="text-sm text-bills-lightgrey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            consequuntur.
          </p> */}

          {!isLoading ? (
            <BillChart
              label={Object.keys(bestSellingData)}
              value={Object.values(bestSellingData)}
            />
          ) : (
            <PageLoader />
          )}
        </div>

        <div className="p-4 col-span-5 md:col-span-3  bg-white rounded shadow-light">
          <h1 className="text-sm text-bills-darkblue font-semibold">
            New customer VS Return Customer
          </h1>
          <p className="text-sm text-bills-lightgrey">Based on Data </p>

          {customerRateLoading ? (
            <PageLoader className="h-full" />
          ) : (
            <div className="py-5">
              <BillPieChart
                label={["New Customer", "Returning Customer"]}
                value={[
                  customerRateData?.newUsers ?? 0,
                  customerRateData?.returningUsers ?? 0,
                ]}
              />
            </div>
          )}

          <div className="rounded-lg shadow-light px-6 py-3 bg-white flex justify-between">
            <div className="inline-flex flex-col gap-0.5">
              <h6 className="text-xs font-sans font-medium text-[#A3AED0] inline-flex items-center gap-x-1">
                <span className="w-2 h-2 rounded-full bg-bills-skyblue"></span>
                New Customers
              </h6>
              <h4 className="font-bold font-sans text-lg">
                {customerRateData?.newUserRate || 0}%
              </h4>
            </div>

            <div className="inline-flex flex-col gap-0.5">
              <h6 className="text-xs font-sans font-medium text-[#A3AED0] inline-flex items-center gap-x-1">
                <span className="w-2 h-2 rounded-full bg-[#E1F0FE]"></span>
                Return Customers
              </h6>
              <h4 className="font-bold font-sans text-lg">
                {customerRateData?.returningUserRate || 0}%
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex items-start gap-6 w-full">
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="bg-white rounded shadow-light py-6 px-4">
            <div className="grid grid-flow-row gap-5 text-sm font-medium">
              <div className="text-nowrap overflow-auto flex justify-between">
                Airtime &nbsp;&nbsp;{" "}

                <Progress
                  type="line"
                  status="normal"
                  percent={
                    airtimeSuccessRateData?.successRate
                      ? airtimeSuccessRateData?.successRate?.replace("%", "")
                      : 0
                  }
                />
                {/* <span className="text-[10px]"> 3hrs ago</span> */}

              </div>
              <div className="inline-flex justify-center align-bottom w-full items-center gap-5">
                <Progress
                  type="circle"
                  status="normal"
                  size={70}
                  percent={
                    airtimeSuccessRateData?.successRate
                      ? airtimeSuccessRateData?.successRate?.replace("%", "")
                      : 0
                  }
                />

                <h2 className="font-sans font-bold text-4xl">
                  {airtimeSuccessRateData?.successfulTransactions}
                  <span className="text-xl">
                    /{airtimeSuccessRateData?.totalTransactions}
                  </span>
                </h2>
                {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span> */}

                {/* <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-light py-6 px-4">
            <div className="grid grid-flow-row gap-5 text-sm font-medium">
              <div className="text-nowrap overflow-auto flex justify-between">
                TV &nbsp;&nbsp;{" "}
                {/* <span className="text-[10px]"> 3hrs ago</span> */}
              </div>
              <div className="inline-flex justify-between align-bottom w-full items-end">
                <div className="inline-flex justify-center align-bottom w-full items-center gap-5">
                  <Progress
                    type="circle"
                    status="normal"
                    size={70}
                    percent={
                      cableSuccessRateData?.successRate
                        ? cableSuccessRateData?.successRate?.replace("%", "")
                        : 0
                    }
                  />

                  <h2 className="font-sans font-bold text-4xl">
                    {cableSuccessRateData?.successfulTransactions}
                    <span className="text-xl">
                      /{cableSuccessRateData?.totalTransactions}
                    </span>
                  </h2>
                  {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span> */}

                  {/* <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
                </div>
                {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span> */}

                {/* <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-light py-6 px-4">
            <div className="grid grid-flow-row gap-5 text-sm font-medium">
              <div className="text-nowrap overflow-auto flex justify-between">
                Data &nbsp;&nbsp;{" "}
                {/* <span className="text-[10px]"> 3hrs ago</span> */}
              </div>
              <div className="inline-flex justify-between align-bottom w-full items-end">
                {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span> */}

                <div className="inline-flex justify-center align-bottom w-full items-center gap-5  flex-row-reverse">
                  <Progress
                    type="circle"
                    status="normal"
                    size={70}
                    percent={
                      dataSuccessRateData?.successRate
                        ? dataSuccessRateData?.successRate?.replace("%", "")
                        : 0
                    }
                  />

                  <h2 className="font-sans font-bold text-4xl">
                    {dataSuccessRateData?.successfulTransactions}
                    <span className="text-xl">
                      /{dataSuccessRateData?.totalTransactions}
                    </span>
                  </h2>
                  {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span> */}

                  {/* <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
                </div>

                {/* <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-light py-6 px-4">
            <div className="grid grid-flow-row gap-5 text-sm font-medium">
              <div className="text-nowrap overflow-auto flex justify-between">
                Electricity &nbsp;&nbsp;{" "}
                {/* <span className="text-[10px]"> 3hrs ago</span> */}
              </div>
              <div className="inline-flex justify-between align-bottom w-full items-end">
                <div className="inline-flex justify-center align-bottom w-full items-center gap-5">
                  <Progress
                    type="circle"
                    status="normal"
                    size={70}
                    percent={
                      powerSuccessRateData?.successRate
                        ? powerSuccessRateData?.successRate?.replace("%", "")
                        : 0
                    }
                  />

                  <div className="px-2 inline-flex justify-center flex-col items-center">
                    <h4 className="font-normal text-sm">
                      Success Transactions
                    </h4>
                    <h2 className="font-sans font-bold text-4xl">
                      {powerSuccessRateData?.successfulTransactions}
                      <span className="text-xl">
                        /{powerSuccessRateData?.totalTransactions}
                      </span>
                    </h2>
                  </div>
                  {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span> */}

                  {/* <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
                </div>
                {/* <span className="text-nowrap text-2xl md:text-3xl ">
                  84% &nbsp;&nbsp;
                </span>

                <span className="text-green-500 text-[10px]"> 3hrs ago</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded shadow-light p-4  w-full max-w-4xl">
          <div className="movies-heading flex pb-2  border-b-2 border-gray-100 justify-between items-end">
            <h1 className="font-semibold text-[#2B3674] font-sans">
              Transaction Success Rate{" "}
            </h1>

            <Select
              onChange={(value) => setSuccessPeriod(value)}
              options={[
                { label: "daily", value: "daily", className: "capilize" },
                { label: "weekly", value: "weekly", className: "capilize" },
                { label: "monthly", value: "monthly", className: "capilize" },
                { label: "yearly", value: "yearly", className: "capilize" },
              ]}
              defaultValue="daily"
              className="text-sm font-sans font-medium capitalize w-1/6 text-gray-900 shadow-sm ring-1 rounded-md ring-bills-skyblue hover:bg-gray-50 focus:ring-1 focus:ring-bills-skyblue"
            />
          </div>
          <div className="py-5">
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
      </div>

      <div className="">
        <MovieLine2
          average={monthlyRateData?.averageVolume}
          value={volumeValue}
        />
      </div>
    </section>
  );
};
