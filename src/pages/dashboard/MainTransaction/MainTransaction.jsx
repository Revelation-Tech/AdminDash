import React, { useEffect } from "react";
import SideNav from "../SideNav";
import { MoviesLine } from "@data/chartData/moviesLine";
import { TransactionFailData } from "@data/chartData/TransactionFailData.jsx";
import useTransactionQuery from "./hooks/useTransactionQuery.js";

import useTableStore from "@store/useTableStore";
import CustomTableCard from "@components/CustomTableCard";
import SmallLineGraphCard from "../../../components/card/SmallLineGraph.jsx";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const MainTransaction = () => {
  const { transactions, analysis } = useTransactionQuery();

  const { isLoading } = transactions;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[25rem] bg-white my-8 rounded-xl">
        <Spin indicator={<LoadingOutlined />} spinning/>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className=" mt-8 md:grid grid-cols-3 gap-4  grid-flow-col">
        {analysis.data &&
          analysis.data
            .sort((a, b) =>
              a?.status?.toLowerCase()?.localeCompare(b.status.toLowerCase())
            )
            .map((item, index) => (
              <SmallLineGraphCard
                key={index}
                label={item?.status}
                report={item}
              />
            ))}
        {/* <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
          <div className="col-span-2">
            <h1 className="text-sm">All</h1>
            <h1 className="font-bold text-xl mt-4"> &#x20A6; 5.2K</h1>
          </div>
          <div className="col-span-2  text-sm">
            <p className="text-sm">40 % vs last month</p>
            <div className="mt-4">
              <MoviesLine />
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-0 grid grid-cols-4 shadow rounded-md gap-8 grid-flow-row bg-white p-4">
          <div className="col-span-2">
            <h1 className="text-sm">Successful</h1>
            <h1 className="font-bold text-xl mt-4"> &#x20A6; 5.2K</h1>
          </div>
          <div className="col-span-2  text-sm">
            <p className="text-sm">40 % vs last month</p>
            <div className="mt-4">
              <MoviesLine />
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-0 shadow rounded-md grid grid-cols-4 gap-8 grid-flow-row bg-white p-4">
          <div className="col-span-2">
            <h1 className="text-sm">Failed</h1>
            <h1 className="font-bold text-xl mt-4"> &#x20A6; 5.2K</h1>
          </div>
          <div className="col-span-2  text-sm">
            <p className="text-sm">40 % vs last month</p>
            <div className="mt-4">
              <TransactionFailData />{" "}
            </div>
          </div>
        </div> */}
      </div>

      <CustomTableCard />
    </div>
  );
};

export default MainTransaction;
