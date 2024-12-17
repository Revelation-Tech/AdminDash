import React from "react";
import TableStatusCard from "@components/card/TableStatusCard";
import { EmptyWallet } from "iconsax-react";
import { Avatar } from "antd";
import { NavLink, useParams } from "react-router-dom";
import useTransactionQuery from "../hooks/useTransactionQuery";
import { formatCurrency } from "../../../../utils/functions";

const PreviewTransaction = () => {
  const param = useParams();

  // console.log(param)

  const { showTransaction } = useTransactionQuery();
  const { data } = showTransaction(param?.id);

  console.log(data)

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

              <TableStatusCard status="successful" showIcon />
            </div>

            <div className="flex flex-col mt-5 pt-5 space-y-3">
              <h3 className="uppercase text-bills-text">INFORMATION</h3>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Type:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  Inter bank Transfer
                </span>
              </div>
            </div>
          </div>

          <div className="py-5 border-s-2 border-bills-borderLight px-4">
            <div className="p-4 max-w-lg flex items-center justify-between">
              <div className="space-y-4 w-full">
                <h4 className="text-bills-text font-medium font-clashGrotesk text-sm tracking-wide">
                  Sender
                </h4>
                <div className="flex w-full items-end justify-between">
                  <div className="inline-flex items-center gap-2">
                    <Avatar shape="circle" className="w-12 h-12" />
                    <div className="">
                      <h4 className="text-black text-base font-medium">
                        Emmanuel Adebayo
                      </h4>
                      <span className="text-bills-text text-sm font-inter">
                        emmanuel@gmail.com
                      </span>
                    </div>
                  </div>
                  <NavLink className="rounded-full px-2 text-blue-500 font-medium font-inter text-sm">
                    Open profile
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-5 pt-5 space-y-3">
              <h3 className="uppercase text-bills-text">ANALYTICS/LOGS</h3>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Timestamp:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  43mins ago (05-06-2023 4:26AM UTC+1)
                </span>
              </div>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Authorization:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  YT473857HYTC49487UINRH948937HHYCJ
                </span>
              </div>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">Location:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  Ikoyi, Lagos, Nigeria, WA.
                </span>
              </div>
              <div className="grid sm:grid-cols-3 py-2">
                <span className="text-sm text-bills-text">IP Address:</span>
                <span className="text-sm font-medium font-inter col-span-2 text-black">
                  175.132.142.255
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewTransaction;
