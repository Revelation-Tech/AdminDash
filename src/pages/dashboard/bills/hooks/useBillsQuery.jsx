import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axios from "@config/axios";
import { message } from "antd";

const useBillsQuery = () => {
  const queryClient = useQueryClient();

  const allBills = ({ interval, type }) => {
    const params = {
      ...(type ? { type: type } : {}),
      ...(interval ? { interval: interval } : {}),
    };

    return useQuery({
      queryKey: ["bills", params],
      queryFn: async () => {
        try {
          const response = await axios.get("admin/billing-transactions", {
            params,
          });

          const { data } = response.data;

          return data;
        } catch (error) {
          throw new Error(error?.response?.data?.message || error?.message);
        }
        // Make API request to fetch bills data
      },
      enabled: !!params,
    });
  };

  const bestSelling = ({ period }) => {
    // console.log(period);

    return useQuery({
      queryKey: ["best-selling", period],
      queryFn: async () => {
        try {
          const response = await axios.get("admin/billing-bestselling", {
            params: { period: "all" },
          });

          const { data } = response.data;

          return data;
        } catch (error) {
          throw new Error(error?.response?.data?.message || error?.message);
        }
        // Make API request to fetch bills data
      },
      enabled: !!period,
    });
  };

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

    // console.log(params);

    return useQuery({
      queryKey: ["monthlyRate", vasType],
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
      enabled: !!params,
    });
  };

  const successRate = ({ vasType, period }) => {
    const params = {
      ...(vasType || period ? { vasType, period } : {}),
    };

    return useQuery({
      queryKey: ["successRate", vasType, period],
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
      enabled: !!params,
    });
  };

  const transactionFees = useQuery({
    queryKey: ["transactionFees"],
    queryFn: async () => {
      try {
        const response = await axios.get("admin/get-fees");

        // console.log(response.data);

        return response.data?.data;
      } catch (err) {
        throw new Error(err?.response?.data?.message || err?.message);
      }
    },
  });

  const updateTransctionFees = useMutation({
    mutationFn: async (payload) => {
      message.loading("Updating transaction fees", 50000);
      try {
        const response = await axios.post("admin/update-fees", payload);

        // console.log(response?.data);

        message.destroy();

        return response.data;
      } catch (error) {
        throw new Error(error?.response?.data?.message ?? error?.message);
      }
    },
    onSuccess: (res) => {
      message.success("Transaction fee updated");
      queryClient.invalidateQueries(["transactionFees"]);
    },
    onError: (error) => message.error(error?.message),
  });

  return {
    allBills,
    bestSelling,
    customerRate,
    monthlyRate,
    successRate,
    transactionFees,
    updateTransctionFees,
  };
};

export default useBillsQuery;
