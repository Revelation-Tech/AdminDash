import React, { useEffect } from "react";
import SideNav from "../SideNav";
import { MoviesLine } from "@data/chartData/moviesLine";
import { TransactionFailData } from "@data/chartData/TransactionFailData.jsx";
import useTransactionQuery from "./hooks/useTransactionQuery.js";

import useTableStore from "@store/useTableStore";
import CustomTableCard from "@components/CustomTableCard";
import useUserQuery from "../Users/hooks/useUserQuery";
import { NavLink } from "react-router-dom";
import TableUserCard from "@components/card/TableUserCard.jsx";
import { formatCurrency, formatDateTime, getPrefixedValue } from "@utils/functions.js";
import TableStatusCard from "@components/card/TableStatusCard.jsx";

const MainTransaction = () => {
  const { transactions } = useTransactionQuery();

  const { data, isLoading } = transactions;

  // console.log(data);

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "reference",
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
      key: "reference",
      render: (reference, record, index) => getPrefixedValue(index+1)
    },
    {
      title: "User",
      dataIndex: ["sourceWallet","user"],
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
      key: "user",
      render: (record) => <TableUserCard record={record} />,
    },
    {
      title: "Description",
      dataIndex: "description",
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
      key: "description",
      render: (description) => description,
    },
    {
      title: "Payment Type",
      dataIndex: "type",
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
      key: "payment_type",
      render: (type) => type,
    },

    {
      title: "Amount",
      dataIndex: "amount",
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
      key: "amount",
      render: (amount) => formatCurrency(amount, 'US'),
    },
    {
      title: "Status",
      dataIndex: "status",
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
      key: "status",
      render: (status) => <TableStatusCard status={status} />,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
      key: "date",
      render: (date) => formatDateTime(date),
    },
  ];


  useEffect(() => {
    useTableStore.setState({ columns, data, loading: isLoading });
  }, []);

  return (
    <div className="space-y-10">
      <div className=" mt-8 md:grid grid-cols-3 gap-4  grid-flow-col">
        <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
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
        </div>
      </div>

      <CustomTableCard />
    </div>
  );
};

export default MainTransaction;
