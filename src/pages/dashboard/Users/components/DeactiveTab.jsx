import React, { useEffect } from "react";
import CustomTableCard from "@components/CustomTableCard";
import useTableStore from "@store/useTableStore";
import useUserQuery from "../hooks/useUserQuery";

const DeactiveTab = ({ active }) => {
  const { fetchUsers } = useUserQuery();
  const { data, isLoading } = fetchUsers;

  useEffect(() => {
    // Ensure data exists before filtering
    if (data) {
      const filterDeactive = data.filter(
        (user) => user?.status?.toLowerCase() === "deactived"
      );

      // Update Zustand state
      useTableStore.setState({
        data: filterDeactive,
        loading: isLoading,
      });
    }
  }, [data, isLoading, active]);

  return <CustomTableCard />;
};

export default DeactiveTab;
