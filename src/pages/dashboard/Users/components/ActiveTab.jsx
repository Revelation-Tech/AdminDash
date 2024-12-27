import React, { useEffect } from "react";
import CustomTableCard from "@components/CustomTableCard";
import useTableStore from "@store/useTableStore";
import useUserQuery from "../hooks/useUserQuery";


const ActiveTab = ({ active }) => {

  const { fetchUsers } = useUserQuery();
  const { data, isLoading } = fetchUsers;

  // const filterActive = data.filter(user => user?.status?.toLowerCase() == 'active')

  // console.log(filterActive)
  useEffect(() => {

     if (data) {
      const filterActive = data.filter(user => user?.status?.toLowerCase() == 'active')
    
              // Update Zustand state
              useTableStore.setState({
                data: filterActive,
                loading: isLoading,
              });
            }
    // useTableStore.setState({ data: filterActive, loading: isLoading });
  }, [data, isLoading, active]);

  return <CustomTableCard />;
};

export default ActiveTab;
