import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import { MoviesLine } from "@data/chartData/moviesLine";
import { TransactionFailData } from "@data/chartData/TransactionFailData.jsx";
import useTransactionQuery from "./hooks/useTransactionQuery.js";

import useTableStore from "@store/useTableStore";
import CustomTableCard from "@components/CustomTableCard";
import SmallLineGraphCard from "../../../components/card/SmallLineGraph.jsx";
import { Dropdown, Select, Spin } from "antd";
import PageLoader from "../../../components/PageLoader.jsx";
import { columns } from "./data";
import exportCVSData from "./data/exportCVSData.jsx";
import UserSearch from "../Users/UserSearch.jsx";
import { SearchNormal1 } from "iconsax-react";
import ExportOptionButton from "../../../components/ExportOptionButton.jsx";
import moment from "moment";
import VasTypeFilter from "../../../components/VasTypeFilter.jsx";

const MainTransaction = () => {
  const { transactions, analysis } = useTransactionQuery();

  const { isLoading, data } = transactions;

  const { params, searchTable } = useTableStore();

  const updateParams = (key, value) => {
    // Get the current state of params from useTableStore
    const currentParams = useTableStore.getState().params || {};

    // Update the key if it exists or add it if it doesn't
    const updatedParams = {
      ...currentParams, // Keep existing params
      [key]: value, // Update or add the specified key
    };

    // Set the updated params in useTableStore
    useTableStore.setState({
      params: updatedParams,
    });
  };

  useEffect(() => {
    useTableStore.setState({
      data: data,
      columns,
      url: "/transaction",
      loading: isLoading,
    });
  }, [data, isLoading]);

  return (
    <div className="space-y-10">
      <div className=" mt-8 md:grid grid-cols-4 gap-4">
        {analysis.data
          ?.sort((a, b) =>
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

      <div className="bg-white p-4 px-5 rounded-md">
        <div className="md:flex items-center justify-between flex-wrap ">
          <div className="inline-flex items-center ring-1 ring-bills-borderLight outline-none focus:ring-1 focus:ring-bills-darkblue rounded-md px-3 gap-1.5 p-2.5 w-1/3">
            <SearchNormal1 size={16} className="text-black/60" />
            <input
              type="text"
              className=" w-full placeholder-black/60 border-0 focus:outline-none"
              placeholder="Search"
              onKeyUp={(e) => searchTable(e.target.value)}
            />
          </div>

          <div className="md:inline-flex justify-between items-center gap-4">
            <VasTypeFilter onChange={updateParams}/>

            <ExportOptionButton
              csvHeader={data && exportCVSData(data)?.headers}
              csvData={data && exportCVSData(data)?.body}
              title={`${moment().format("YYYY-MM-DD")}-transactions-${
                params ? Object.values(params)?.map((value) => value) : ""
              }`}
            />
            {/* <button className="btn-fill2 inline-flex items-center gap-2 !py-3">
            <ImportCurve size={16} className="inline" variant="Outline" />
            Export Csv
          </button> */}
          </div>
        </div>
      </div>

      <div className="py-5 px-6 bg-white rounded-lg">
        <div className="inline-flex items-center gap-4 w-full">
          <Select
            options={[
              { label: "Success", value: "SUCCESS" },
              { label: "Failed", value: "FAILED" },
              { label: "Pending", value: "PENDING" },
            ]}
            placeholder="Status: All"
            className="border border-gray-500 rounded-md placeholder:text-gray-500 text-gray-500 h-10"
            onChange={(value) => updateParams("status", value)}
          />

          <Select
            options={[
              { label: "Credit", value: "CREDIT" },
              { label: "Debit", value: "DEBIT" },
            ]}
            placeholder="Transaction Type: All"
            className="border border-gray-500 rounded-md placeholder:text-gray-500 text-gray-500 h-10 w-2/12"
            onChange={(value) => updateParams("type", value)}
          />

          <Select
            onChange={(value) => updateParams("date", value)}
            options={[
              { label: "daily", value: "daily", className: "capitalize" },
              { label: "weekly", value: "weekly", className: "capitalize" },
              {
                label: "quarterly",
                value: "quarterly",
                className: "capitalize",
              },
              { label: "yearly", value: "yearly", className: "capitalize" },
              { label: "monthly", value: "monthly", className: "capitalize" },
              { label: "all", value: "all", className: "capitalize" },
            ]}
            placeholder="Date: All"
            className="border border-gray-500 rounded-md placeholder:text-gray-500 text-gray-500 h-10 w-2/12"
          />
        </div>
      </div>

      <CustomTableCard />
    </div>
  );
};

export default MainTransaction;
