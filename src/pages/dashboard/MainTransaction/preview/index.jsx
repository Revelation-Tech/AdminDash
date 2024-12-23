import React from "react";
import TableStatusCard from "@components/card/TableStatusCard";
import { EmptyWallet, Refresh2 } from "iconsax-react";
import { Avatar } from "antd";
import { NavLink, useParams } from "react-router-dom";
import useTransactionQuery from "../hooks/useTransactionQuery";
import { formatCurrency } from "../../../../utils/functions";
import moment from "moment";
import { ComputerDesktopIcon, ExclamationCircleIcon,  } from "@heroicons/react/24/outline";
import PageLoader from "@components/PageLoader";
import StepIcon from "../components/StepIcon";

const PreviewTransaction = () => {
  const param = useParams();

  // console.log(param)

  const { showTransaction } = useTransactionQuery();
  const { data, isLoading } = showTransaction(param?.id);

  console.log(data);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="space-y-4">
      {/* header */}
      {/* body */}
      <div className="bg-white rounded-xl p-5">
        <div className="grid sm:grid-cols-2 gap-2.5">
          <div className="py-5">
            <div className="bg-white shadow-md rounded-md p-4 max-w-lg flex items-center justify-between">
              <div className="">
                <div className="inline-flex items-end gap-2 text-bills-text">
                  <EmptyWallet size={20} className="text-xl mb-0.5" />
                  <h4 className="font-medium font-clashGrotesk text-sm tracking-wide">
                    Amount
                  </h4>
                </div>
                <h2 className="text-bills-text font-clashGrotesk font-normal text-xxxl">
                  <span className="ml-1.5">
                    {formatCurrency(data?.amount, "EN")}
                  </span>
                </h2>
              </div>

              <TableStatusCard status={data?.status} showIcon />
            </div>

            <div className="flex flex-col mt-5 pt-5 space-y-3">
              <h3 className="uppercase text-bills-text">INFORMATION</h3>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Type:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.transactionType}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Payment Type:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.type}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">
                  Beneficiary Bank:
                </span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.beneficiaryBank}
                </span>
              </div>

              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">
                  Beneficiary Account:
                </span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.beneficiaryAccount}
                </span>
              </div>

              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Fee:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  N{data?.fee}
                </span>
              </div>

              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Description:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.description}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">
                  Transaction Ref:
                </span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.reference ?? "-"}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Session ID:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.sessionId}
                </span>
              </div>
            </div>
          </div>

          <div className="py-5 border-s-2 border-bills-borderLight px-8">
            <div className="p-4 max-w-lg flex items-center justify-between">
              <div className="space-y-4 w-full">
                <h4 className="text-bills-text font-medium font-clashGrotesk text-sm tracking-wide">
                  Sender
                </h4>
                <div className="flex w-full items-end justify-between flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2">
                  {data?.sourceWallet?.user?.image ? <Avatar shape="circle" className="w-12 h-12" /> : <div className="w-12 h-12 bg-bills-skyblue text-white text-wrap rounded-full text-xl font-bold flex flex-col justify-center items-center">{data?.sourceWallet?.user?.firstName?.charAt(0)}</div>}
                    
                    <div className="">
                      <h4 className="text-black text-base font-medium">
                        {data?.sourceWallet?.user?.firstName}{" "}
                        {data?.sourceWallet?.user?.lastName}
                      </h4>
                      <span className="text-bills-text text-sm font-inter">
                        {data?.sourceWallet?.user?.email}
                      </span>
                    </div>
                  </div>
                  <NavLink
                    to={`/users/${data?.sourceWallet?.user?.id}`}
                    className="rounded-full px-2 text-blue-500 font-medium font-inter text-sm"
                  >
                    Open profile
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-5 pt-5 space-y-3 w-full">
              <h3 className="uppercase text-bills-text">ANALYTICS/LOGS</h3>
              <div className="inline-flex flex-wrap justify-between w-full py-2">
                <span className="text-sm text-bills-text">Timestamp:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {moment(data?.createdAt).fromNow()} (
                  {moment(data?.createdAt).format("DD-MM-YYYY HH:mmA z")})
                </span>
              </div>
              <div className="inline-flex flex-wrap justify-between w-full py-2">
                <span className="text-sm text-bills-text">Authorization:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.sourceWallet?.user?.authorization}
                </span>
              </div>
              <div className="inline-flex flex-wrap justify-between w-full py-2">
                <span className="text-sm text-bills-text">Location:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.sourceWallet?.user?.location}
                </span>
              </div>
              <div className="inline-flex flex-wrap justify-between w-full py-2">
                <span className="text-sm text-bills-text">IP Address:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  {data?.sourceWallet?.user?.ipAddress}
                </span>
              </div>
              <div className="inline-flex flex-wrap justify-between w-full py-2">
                <span className="text-sm text-bills-text uppercase">
                  Timeline:
                </span>
                <span className="text-sm font-medium font-inter col-span-2 text-bills-skyblue">
                  View Trial
                </span>
              </div>
              <div className="flex flex-col flex-wrap items-center gap-5 w-full py-2 flex-1 ">
                <div className="border border-bills-borderLight p-4 inline-flex justify-center items-center flex-col rounded-xl">
                  <h3 className="text-bills-skyblue text-[2rem] font-bold">
                    {data?.timer.split(" ")[0]}
                  </h3>
                  <span className="text-[2rem] font-bold">
                    {data?.timer.split(" ")[1]}
                  </span>
                </div>
                <div className="inline-flex w-full gap-4 justify-between">
                  <StepIcon label="Device Type" value="Phone" icon={ComputerDesktopIcon}/> 
                  <StepIcon label="attempt" value={`${data?.attempts} attempt`} icon={Refresh2}/>
                  <StepIcon label="error" value="0 error" icon={ExclamationCircleIcon}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewTransaction;
