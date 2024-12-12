import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTransactions, getTransaction } from "../services";

const useTransactionQuery = () => {
  const transactions = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  const showTransaction = (transactionId) =>
    useQuery({
      queryKey: ["transaction", transactionId],
      queryFn: async () => await getTransaction({ transactionId }),
      enabled: transactionId !== undefined,
    });
  return { transactions, showTransaction };
};

export default useTransactionQuery;
