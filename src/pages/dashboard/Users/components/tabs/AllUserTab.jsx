import React, { useEffect } from "react";
import CustomTableCard from "@components/CustomTableCard";
import useTableStore from "@store/useTableStore";
import useUserQuery from "../../hooks/useUserQuery";

const AllUserTab = ({ active }) => {
  const { fetchUsers } = useUserQuery();
  const { data, isLoading } = fetchUsers;

  useEffect(() => {
    if (data) {
      // Update Zustand state
      useTableStore.setState({
        data,
        loading: isLoading,
      });
    }
  }, [data, isLoading, active]);

  return <CustomTableCard />;
};

export default AllUserTab;
