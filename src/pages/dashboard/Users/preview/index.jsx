import React, { useEffect } from "react";
import useUserQuery from "../hooks/useUserQuery";
import { useParams } from "react-router-dom";

import Breadcrumb from "@components/Breadcrumb";
import useTableStore from "@store/useTableStore";
import { getPrefixedValue } from "@utils/functions";
import CustomTableCard from "@components/CustomTableCard";

import UserDetails from "../components/UserDetails";
import { formatCurrency, formatDateTime } from "../../../../utils/functions";
import { DocumentCopy } from "iconsax-react";
import { Skeleton } from "antd";

const UserProfile = () => {
  const { userID } = useParams();

  const { getUser } = useUserQuery();

  const { data, isLoading, isFetching } = getUser(userID);
  const currency = data?.wallet?.currency;

//   if (isLoading) {
//     return <Skeleton />;
//   }

  const columns = [
    {
      title: (
        <span className="text-bills-text text-xs font-inter font-normal">
          Transaction ID
        </span>
      ),
      dataIndex: "bioDataId",
      className:
        "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
      key: "user_id",
      render: (bioDataId, record, index) => getPrefixedValue(index + 1),
    },
    {
      title: (
        <span className="text-bills-text text-xs font-inter font-normal">
          Account Name
        </span>
      ),
      dataIndex: "bioDataId",
      className:
        "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
      key: "user_id",
      render: (bioDataId, record, index) => getPrefixedValue(index + 1),
    },
    {
      title: (
        <span className="text-bills-text text-xs font-inter font-normal">
          Session ID
        </span>
      ),
      dataIndex: "id",
      className:
        "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
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
      className:
        "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
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
      className:
        "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
      key: "amount",
      render: (amount) => formatCurrency(amount, "US", currency),
    },
    {
      title: (
        <span className="text-bills-text text-xs font-inter font-normal">
          Bill Type
        </span>
      ),
      dataIndex: "type",
      className:
        "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm",
      key: "bill_type",
      render: (type) => type,
    },
  ];

  useEffect(() => {
    const transactions = data?.wallet?.transactions;

    useTableStore.setState({ data: transactions, columns });
  }, [data?.wallet?.transactions]);

  return (
    <div className="pt-8">
      <Breadcrumb title="Users management" subtitle="user" text={userID} />

      <div className="bg-white px-6 py-5 rounded-xl mt-8 border border-bills-lightblue">
        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="bg-white border-bills-light-blue p-4 shadow-lg rounded-lg">
            <UserDetails record={data?.user} />
          </div>

          <div className="">
            <div class="bg-white shadow-md rounded-lg p-6">
              <p class="font-clashGrotesk font-normal text-base text-bills-text mb-1">
                Wallet Balance
              </p>
              <p class="text-[2rem] font-semibold text-bills-darkblue font-clashGrotesk">
                NGN 80,000.00
              </p>

              <p class="text-bills-text font-normal font-inter mt-2">
                WEMA BANK
              </p>

              <div class="flex items-center gap-4 mt-1">
                <a href="#" class="font-normal text-base text-bills-darkblue font-inter">
                  10223446677
                </a>
                <div className="border border-bills-darkblue text-bills-darkblue p-2 rounded-full">
                  <DocumentCopy size="12" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {/* header */}
          <div className="py-5 px-4 flex items-center justify-between">
            <h6 className="text-bills-darkblue text-lg font-normal font-inter">
              Recent Transactions
            </h6>

            <div className="inline-flex">

            </div>
          </div>

          {/* table */}
          <CustomTableCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
