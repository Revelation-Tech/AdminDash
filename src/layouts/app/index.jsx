import React from "react";

import SideNav from "../components/SideNav";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children }) => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="w-full bg-bills-lightblue">
      <SideNav />

      <div className="lg:w-[calc(100%-220px)] lg:ml-[220px] min-h-screen px-4">
        <div className="p-4">
          <h1 className="font-semibold text-3xl pt-2.5">{state?.pageTitle}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
