import { Tabs } from "antd";
import moment from "moment";
import React, { act, useEffect, useState } from "react";

import { tabItems } from "./data";
import { MoviesLine } from "../../../data/chartData/moviesLine";
import UserSearch from "./UserSearch";
import UserListDisplay from "./UserListDisplay2";

import useUserQuery from "./hooks/useUserQuery";
import useTableStore from "../../../store/useTableStore";
import { NavLink } from "react-router-dom";
import { filterUserByStatus, formatCurrency, getPrefixedValue } from "../../../utils/functions";
import SmallLineGraphCard from "../../../components/card/SmallLineGraph";

const Users = () => {
  const { fetchUsers } = useUserQuery();
  const [activeTab, setActiveTab] = useState("");

  const { data, isLoading } = fetchUsers;

  const columns = [
    {
      title: <span className="text-bills-text text-xs font-inter font-normal">User ID</span>,
      dataIndex: "bioDataId",
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
      key: "user_id",
      render: (bioDataId, record, index) =>
        bioDataId ?? getPrefixedValue(index + 1),
    },
    {
      title: <span className="text-bills-text text-xs font-inter font-normal">User Details</span>,
      dataIndex: "firstName",
      className: "!bg-transparent !font-normal !text-sm",
      key: "user_details",
      render: (firstName, record) => (
        <NavLink to={`user/${record?.id}`} className="inline-flex gap-2">
          <div className="w-10 h-10 rounded-full bg-bills-darkblue inline-flex flex-col justify-center items-center text-white uppercase font-bold">
            {firstName ? firstName.charAt(0) : "C"}
          </div>
          <div className="">
            <h5 className="font-medium text-sm">
              {record?.firstName} {record?.lastName}
            </h5>
            <span className="lowercase text-gray-500">{record?.email}</span>
          </div>
        </NavLink>
      ),
    },
    {
      title: <span className="text-bills-text text-xs font-inter font-normal">Phone number</span>,
      dataIndex: "phone",
      className: "!bg-transparent !font-normal !text-sm",
      key: "phone",
      render: (phoneNumber) => <span>{phoneNumber}</span>,
    },
    {
      title: <span className="text-bills-text text-xs font-inter font-normal">Total Spend</span>,
      dataIndex: 'totalSpend',
      className: "!bg-transparent !font-normal !text-sm",
      key: "totalSpend",
      render: (totalSpend) => <span>{formatCurrency(totalSpend, 'US')}</span>,
    },
    {
      title: <span className="text-bills-text text-xs font-inter font-normal">Total Transaction</span>,
      dataIndex: 'totalTransactions',
      className: "!bg-transparent !font-normal !text-sm",
      key: "totalTransactions",
      render: (totalTransactions) => <span>{formatCurrency(totalTransactions, 'US')}</span>,
    }, 
    {
      title: <span className="text-bills-text text-xs font-inter font-normal">Date Joined</span>,
      dataIndex: "createdAt",
      key: "createdAt",
      className: "!bg-transparent border-0 !font-normal !text-sm",
      render: (createdAt) => (
        <span className={`px-2.5 py-1.5 text-sm`}>
          {moment(createdAt).format("MMM DD, YYYY")}
        </span>
      ),
    },
    
    {
      title: <span className="text-bills-text text-xs font-inter font-normal">Status</span>,
      dataIndex: "status",
      key: "status",
      className: "!bg-transparent !font-normal !text-sm",
      render: (status) => (
        <span
          className={`${
            status.toLowerCase() == "active"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          } px-2.5 py-1.5 rounded-full capitalize font-bold !text-xs`}
        >
          {status ? status : "undefined"}
        </span>
      ),
    },
    
  ];

  const filterUsers = filterUserByStatus(data);

  useEffect(() => {
    useTableStore.setState({ data, columns, loading: isLoading });
  }, [data, activeTab]);

  return (
    <>
      <div className="my-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4  ">
        {Object.keys(filterUsers).map((label, index) => (
          <SmallLineGraphCard
            key={index}
            label={label}
            report={filterUsers[label]}
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
          items={tabItems.map(
            ({ key, label, className, component: Component }) => ({
              key: key,
              children: <Component data={filterUsers[key]} active={activeTab}/>,
              label: label,
              className: className,
            })
          )}
        />
      </div>
    </>
  );
};

export default Users;
