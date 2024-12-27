import React, { useEffect } from "react";
import CustomTableCard from "@components/CustomTableCard";
import useTableStore from "@store/useTableStore";
import useUserQuery from "../hooks/useUserQuery";

const FroozenTab = ({ active }) => {

  const { fetchUsers } = useUserQuery();
  const { data, isLoading } = fetchUsers;

  

  // console.log(filterFroozen)
  useEffect(() => {

        if (data) {
          const filterFroozen = data.filter(user => user?.status?.toLowerCase() == 'froozen')

          // Update Zustand state
          useTableStore.setState({
            data: filterFroozen,
            loading: isLoading,
          });
        }
    // useTableStore.setState({ data: filterFroozen, loading: isLoading });
  }, [data, isLoading, active]);
    
  return <CustomTableCard />;
}

export default FroozenTab