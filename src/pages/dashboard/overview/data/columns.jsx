import moment from "moment";
import { NavLink } from "react-router-dom";

import TableUserCard from "@components/card/TableUserCard.jsx";
import { formatCurrency, getPrefixedValue, formatDateTime } from "@utils/functions";

export default [
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        S/N
      </span>
    ),
    dataIndex: "bioDataId",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "user_id",
    render: (bioDataId, record, index) => getPrefixedValue(index + 1),
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        User
      </span>
    ),
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
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Wallet Balance
      </span>
    ),
    dataIndex: "phone",
    className: "!bg-transparent !font-normal !text-sm",
    key: "phone",
    render: (phoneNumber) => <span>{formatCurrency(totalSpend, "NG")}</span>,
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Total Spend
      </span>
    ),
    dataIndex: "totalSpend",
    className: "!bg-transparent !font-normal !text-sm",
    key: "totalSpend",
    render: (totalSpend) => <span>{formatCurrency(totalSpend, "US")}</span>,
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Total Transaction
      </span>
    ),
    dataIndex: "totalTransactions",
    className: "!bg-transparent !font-normal !text-sm",
    key: "totalTransactions",
    render: (totalTransactions) => (
      <span>{formatCurrency(totalTransactions, "US")}</span>
    ),
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Date Joined
      </span>
    ),
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
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Status
      </span>
    ),
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
