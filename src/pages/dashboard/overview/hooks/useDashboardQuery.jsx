import { useQuery } from "@tanstack/react-query";
import axios from "@config/axios";
import React from "react";

const useDashboardQuery = () => {
  const dashboard = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      try {
        const response = await axios.get("admin/dashboard");

        // console.log(response.data?.data)

        return response.data.data || [];
      } catch (error) {
        // console.error(error);
        throw new Error(error?.response?.data?.message ?? error?.message);
      }
    },
  });

  const comparativeTransactions = useQuery({
    queryKey: ["comparativeTransactions"],
    queryFn: async () => {
      try {
        const response = await axios.get("admin/comparative-transactions", {
          params: { period: "all" },
        });

        // console.log(response.data?.data);

        return response.data.data || [];
      } catch (error) {
        console.error(error);
        throw new Error(error?.response?.data?.message ?? error?.message);
      }
    },
  });
  return { dashboard, comparativeTransactions };
};

export default useDashboardQuery;
