import AllUserTab from "../components/tabs/AllUserTab";
import ActiveTab from "../components/ActiveTab";
import DeactiveTab from "../components/DeactiveTab";
import FroozenTab from "../components/FroozenTab";

import TableUserCard from "@components/card/TableUserCard.jsx";

import moment from "moment";
import { NavLink } from "react-router-dom";

import { formatCurrency, getPrefixedValue, formatDateTime } from "@utils/functions";

export const tabItems = [
  {
    label: "all users",
    // component: AllUserTab,
    className: "capitalize",
    key: "all",
  },
  {
    label: "active users",
    // component: ActiveTab,
    className: "capitalize",
    key: "active",
  },
  {
    label: "deactive users",
    // component: DeactiveTab,
    className: "capitalize",
    key: "deactived",
  },
  {
    label: "froozen users",
    // component: FroozenTab,
    className: "capitalize",
    key: "froozen",
  },
];

export const columns = [
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        User ID
      </span>
    ),
    dataIndex: "bioDataId",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "user_id",
    render: (bioDataId, record, index) =>
      bioDataId ?? getPrefixedValue(index + 1),
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        User Details
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
        Phone number
      </span>
    ),
    dataIndex: "phone",
    className: "!bg-transparent !font-normal !text-sm",
    key: "phone",
    render: (phoneNumber) => <span>{phoneNumber}</span>,
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

export const transactionPreviewColumns = [
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        S/N
      </span>
    ),
    dataIndex: "serial_number",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "user_id",
    render: (bioDataId, record, index) => getPrefixedValue(index + 1),
  },
  {
    title: "User",
    dataIndex: ["sourceWallet", "user"],
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "user",
    render: (record) => <TableUserCard showEmail={false} record={record} />,
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Session ID
      </span>
    ),
    dataIndex: "sessionId",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "session_id",
    render: (sessionId) => sessionId,
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Date and Time
      </span>
    ),
    dataIndex: "createdAt",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "createdAt",
    render: (createdAt) => formatDateTime(createdAt),
  },

  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Amount
      </span>
    ),
    dataIndex: "amount",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "amount",
    render: (amount) => formatCurrency(amount, "US", "NGN"),
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Transaction Type
      </span>
    ),
    dataIndex: "vasType",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "vasType",
    render: (vasType) => vasType,
  },{
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Status
      </span>
    ),
    dataIndex: "status",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
    key: "status",
    render: (status) => <div className={`${status.toLowerCase() == 'success' ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"} text-xs font-medium rounded-md py-2 px-2.5 inline-flex items-center justify-center`}>{status}</div>,
  },
];
