import React from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "@config/axios";

const useBillsQuery = () => {
  const allBills = ({ interval, type }) =>
    useQuery({
      queryKey: ["bills"],
      queryFn: async () => {
        try {
          const response = await axios.get("admin/billing-transactions", {
            params: { interval: interval, type: type },
          });

          const { data } = response.data;

          return data;
        } catch (error) {
          throw new Error(error?.response?.data?.message || error?.message);
        }
        // Make API request to fetch bills data
      },
    });

  const bestSelling = useQuery({
    queryKey: ["best-selling"],
    queryFn: async () => {
      try {
        const response = await axios.get("admin/billing-bestselling");

        const { data } = response.data;

        return data;
      } catch (error) {
        throw new Error(error?.response?.data?.message || error?.message);
      }
      // Make API request to fetch bills data
    },
  });

  const customerRate = useQuery({
    queryKey: ["customer-rate"],
    queryFn: async () => {
      try {
        const response = await axios.get("admin/billing-customer-rate");

        const { data } = response.data;

        return data;
      } catch (error) {
        throw new Error(error?.response?.data?.message || error?.message);
      }
      // Make API request to fetch bills data
    },
  });

  const monthlyRate = ({ vasType }) => {
    const params = {
      ...(vasType ? { vasType } : {}),
    };

    console.log(params);

    return useQuery({
      queryKey: ["monthlyRate"],
      queryFn: async () => {
        try {
          // Make API request to fetch bills data
          const response = await axios.get("admin/billing-monthly-volume", {
            params,
          });
          return response.data;
        } catch (error) {
          throw new Error(error?.response?.data?.message || error?.message); // Handle errors gracefully
        }
      },
    });
  };

  const successRate = ({ vasType, period }) =>
    useQuery({
      queryKey: ["successRate", vasType],
      queryFn: async () => {
        try {
          const response = await axios.get(
            "admin/billing-transaction-summary",
            {
              params: { vasType: vasType, period: period },
            }
          );

          return response.data;
        } catch (error) {
          throw new Error(error?.response?.data?.message || error?.message);
        }
        // Make API request to fetch bills data
      },
    });

  return { allBills, bestSelling, customerRate, monthlyRate, successRate };
};

export default useBillsQuery;
