import React from "react";

import SideNav from "../components/SideNav";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children }) => {
  const { state } = useLocation();

  // console.log(state);

  return (
    <div className="w-full bg-bills-lightgrey">
      <SideNav />

      <div className="lg:w-[calc(100%-240px)] lg:ml-[240px] min-h-screen px-4">
        <div className="p-4">
          <h1 className="font-bold text-3xl pt-2.5">{state?.pageTitle !== 'Bill Management' && state?.pageTitle}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
