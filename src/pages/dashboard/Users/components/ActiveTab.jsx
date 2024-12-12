import React, { useEffect } from "react";
import CustomTableCard from "@components/CustomTableCard";
import useTableStore from "../../../../store/useTableStore";

const ActiveTab = ({ active, data }) => {

  useEffect(() => {
    useTableStore.setState({ data: data?.users });
  }, [active, data]);

  return <CustomTableCard />;
};

export default ActiveTab;
