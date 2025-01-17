import React, { useEffect } from "react";
import useUserQuery from "../hooks/useUserQuery";
import { useParams } from "react-router-dom";

import Breadcrumb from "@components/Breadcrumb";
import useTableStore from "@store/useTableStore";
// import { getPrefixedValue } from "@utils/functions";
import CustomTableCard from "@components/CustomTableCard";

import UserDetails from "../components/UserDetails";

import { DocumentCopy } from "iconsax-react";
import { Skeleton } from "antd";
import PageLoader from "../../../../components/PageLoader";
import { transactionPreviewColumns } from "../data";
import { formatCurrency } from "../../../../utils/functions";

const UserProfile = () => {
  const { userID } = useParams();

  const { getUser, editUser } = useUserQuery();

  const { data, isLoading, isFetching } = getUser(userID);


  const onUpdate = (payload) =>{
    editUser.mutate({id:userID, payload})
  }


  useEffect(() => {
    if (data) {
      const transactions = data?.wallet?.transactions;
      useTableStore.setState({ data: transactions, columns: transactionPreviewColumns, loading: isLoading, url: '/transaction' });
    }
  }, [data, isFetching]);

  // console.log(data);

  return (
    <div className="pt-8">
      <Breadcrumb title="Users management" subtitle="user" text={userID} />

      <div className="bg-white px-6 py-5 rounded-xl mt-8 border border-bills-lightblue">
        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="bg-white border-bills-light-blue p-4 shadow-light border-white rounded-lg">
            <UserDetails record={data?.user} onDeactivate={(value) => onUpdate({deactivate: value})} />
          </div>

          <div className="">
            <div class="relative overflow-hidden bg-white shadow-light border-white rounded-lg p-6 h-56 transaction-wallet">
              <p class="font-clashGrotesk font-normal text-base text-bills-text mb-1 mt-4">
                Wallet Balance
              </p>
              <p class="text-[2rem] font-semibold text-bills-darkblue font-clashGrotesk">
                {formatCurrency(
                  data?.wallet?.balance,
                  "US",
                  data?.wallet?.currency
                )}
              </p>

              <p class="text-bills-text font-normal font-inter mt-2">
                {data?.wallet?.virtualAccount?.bankName}
              </p>

              <div class="flex items-center gap-4 mt-1">
                <span class="font-normal text-base text-bills-darkblue font-inter">
                  {data?.wallet?.virtualAccount?.accountNumber}
                </span>
                <button
                  type="button"
                  className="border border-bills-darkblue text-bills-darkblue p-2 rounded-full"
                >
                  <DocumentCopy size="12" />
                </button>
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

            <div className="inline-flex"></div>
          </div>

          {/* table */}
          <CustomTableCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
