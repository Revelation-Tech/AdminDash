import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  fetchTransactions,
  getTransaction,
  getTransactionAnalysis,
} from "../services";
import useTableStore from "@store/useTableStore";

import { columns } from "../data";

const useTransactionQuery = () => {
  const { params } = useTableStore();

  console.log(params)

  const transactions = useQuery({
    queryKey: ["transactions", params],
    queryFn: async () => {
      const res = await fetchTransactions(params);
      // useTableStore.setState({data: res, columns, url: "transaction"})
      return res;
    },
    enabled: !!params
  });

  const analysis = useQuery({
    queryKey: ["transactions-analysis"],
    queryFn: getTransactionAnalysis,
  });

  const showTransaction = (transactionId) =>
    useQuery({
      queryKey: ["transaction", transactionId],
      queryFn: async () => await getTransaction({ transactionId }),
      enabled: transactionId !== undefined,
    });
  return { transactions, showTransaction, analysis };
};

export default useTransactionQuery;
