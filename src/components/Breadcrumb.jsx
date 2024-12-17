import { ArrowLeft } from "iconsax-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({ title, subtitle, text }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className="inline-flex items-center gap-4 text-bills-text">
        <NavLink to={-1} className="inline-flex text-sm items-center">
          <span className="p-1.5 bg-white rounded-md">
            <ArrowLeft size={16} className="font-medium" />
          </span>
        </NavLink>
        <div className="inline-flex gap-4">
          <span className="text-bills-textColor capitalize font-normal font-clashGrotesk">
            Go back
          </span>
          <h6 className="text-sm capitalize">{subtitle}</h6>
          <span className="text-sm">/</span>
          <p className="text-sm text-bills-skyblue font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
