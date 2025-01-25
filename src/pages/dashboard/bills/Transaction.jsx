import React from "react";
import SideNav from "../SideNav";
import { transactionNavData } from "../../../data/TransactionNavData";
import { NavLink, Outlet } from "react-router-dom";

export const Transaction = () => {
  return (
    <>
      {/* <div className=''>
        <SideNav/>
    <div className="lg:w-[calc(100%-220px)] lg:ml-[220px] min-h-screen  bg-bills-lightblue"> */}
      <div className="bg-white py-4 px-8 shadow-light border-t border-black/10">
        <div className="inline-flex w-full justify-between items-start">
          <h1 className="text-2xl font-semibold">Bill Management</h1>

          <div className="rounded-full py-2.5 px-6 bg-[#F4F5F7] w-1/3 inline-flex justify-between items-center">
            {[
              { url: "/bills", name: "Analysis" },
              { url: "/bills/fees", name: "Transaction fees" },
            ].map((item) => (
              <NavLink
                to={item?.url}
                end={item.url === "/bills"} 
                className="py-2.5 px-6 text-[#9198AD]"
                style={({ isActive }) => {
                  return {
                    background: isActive ? "#fff" : "",
                    borderRadius: "25px",
                  };
                }}
              >
                {item?.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="w-full overflow-x-auto text-nowrap mt-8">
          {transactionNavData.map((link) => {
            return (
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#1F6CAB" : "black",
                    borderBottom: isActive ? " #1F6CAB solid 2px" : "none",
                  };
                }}
                key={link.id}
                className="text-sm mr-2 max-md:mb-6 px-2 uppercase"
                to={link.link}
                end
              >
                {" "}
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className=" p-4 md:py-8 px-0">
        <Outlet />
      </div>
      {/* </div>
   </div> */}
    </>
  );
};
