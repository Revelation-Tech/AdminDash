import React from "react";
import { Filter, ImportCurve, SearchNormal1, User } from "iconsax-react";

import CustomTable from "./CustomTable";
import TableProvider from "../context/TableProvider";

const CustomTableCard = () => {
  return (
    <div className="bg-white pb-5">
      <CustomTable />
    </div>
  );
};

export default CustomTableCard;
