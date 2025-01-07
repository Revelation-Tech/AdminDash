import { Tabs } from "antd";
import React, { useEffect, useState } from "react";

import { columns, tabItems } from "./data";
import UserSearch from "./UserSearch";
import UserListDisplay from "./UserListDisplay2";

import useUserQuery from "./hooks/useUserQuery";
import useTableStore from "../../../store/useTableStore";

import { filterByStatus } from "../../../utils/functions";
import SmallLineGraphCard from "@components/card/SmallLineGraph";
import PageLoader from "@components/PageLoader";
import CustomTableCard from "../../../components/CustomTableCard";
import { usersSummary } from "./utils";

const Users = () => {
  const { fetchUsers } = useUserQuery();
  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading, isFetching } = fetchUsers;
  const { filterByColumn, filteredData, searchValue } = useTableStore();

  console.log(searchValue, filteredData)

  useEffect(() => {
    if (data) {
      const filterUsers = filterByStatus(data, activeTab);

      // Update Zustand state
      useTableStore.setState({
        data: searchValue ? filteredData : filterUsers,
        loading: isFetching,
        columns: columns,
        url: "/users"
      });
    }
  }, [data, isFetching, activeTab, filteredData]);

  const userSummaryData = usersSummary(data);

  // console.log(userSummaryData);

  return (
    <>
      <div className="my-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4  ">
        {Object.keys(userSummaryData).map((label, index) => (
          <SmallLineGraphCard
            key={index}
            label={label}
            report={userSummaryData[label]}
          />
        ))}

        {/* <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
          <div className="col-span-2">
            <h1 className="text-sm font-semibold">All</h1>
            <h1 className="font-bold text-xl mt-4"> &#x20A6; 5.2K</h1>
          </div>
          <div className="col-span-2 text-green-800 font-semibold text-sm">
            <div className="mt-4">
              40 % vs last month
              <MoviesLine />
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
          <div className="col-span-2">
            <h1 className="text-sm font-semibold">Activated</h1>
            <h1 className="font-bold text-xl mt-4"> &#x20A6; 5.2K</h1>
          </div>
          <div className="col-span-2 text-green-800 font-semibold text-sm">
            <div className="mt-4">
              40 % vs last month
              <MoviesLine />
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
          <div className="col-span-2">
            <h1 className="text-sm font-semibold">Deactivated</h1>
            <h1 className="font-bold text-xl mt-4"> &#x20A6; 5.2K</h1>
          </div>
          <div className="col-span-2 text-green-800 font-semibold text-sm">
            <div className="mt-4">
              40 % vs last month
              <MoviesLine />
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-0 grid grid-cols-4 shadow rounded-md gap-8 grid-flow-row bg-white p-4">
          <div className="col-span-2">
            <h1 className="text-sm font-semibold">Freezed</h1>
            <h1 className="font-bold text-xl mt-4"> &#x20A6; 5.2K</h1>
          </div>
          <div className="col-span-2 text-green-800 font-semibold text-sm">
            <div className="mt-4">
              40 % vs last month
              <MoviesLine />
            </div>
          </div>
        </div> */}
      </div>

      <div className="space-y-2.5">
        <UserSearch />

        <Tabs
          defaultActiveKey="all"
          className="capitalize"
          onChange={setActiveTab}
          items={tabItems.map(({ key, label, className }) => ({
            key: key,
            label: label,

            className: className,
          }))}
        />

        <CustomTableCard />
      </div>
    </>
  );
};

export default Users;
