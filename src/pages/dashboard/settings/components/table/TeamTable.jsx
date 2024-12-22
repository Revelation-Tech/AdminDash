import React, { useEffect } from "react";

import CustomTableCard from "@components/CustomTableCard";
import useTableStore from "@store/useTableStore";

import {teamColumn as columns, data} from "../../data"

const TeamTable = () => {
    
  useEffect(() => {
    useTableStore.setState({data, columns});
  }, []);

  return (
    <div className="py-8">
      <CustomTableCard />
    </div>
  );
};

export default TeamTable;
