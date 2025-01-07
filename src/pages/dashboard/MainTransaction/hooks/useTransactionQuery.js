import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTransactions, getTransaction, getTransactionAnalysis } from "../services";
import useTableStore from "../../../../store/useTableStore";

import { columns } from "../data";

const useTransactionQuery = () => {

  const transactions = useQuery({
    queryKey: ["transactions"],
    queryFn: async () =>{
      const res = await fetchTransactions();
      // useTableStore.setState({data: res, columns, url: "transaction"})
      return res;
    },
  });

  const analysis = useQuery({
    queryKey: ['transactions-analysis'],
    queryFn: getTransactionAnalysis
  })

  const showTransaction = (transactionId) =>
    useQuery({
      queryKey: ["transaction", transactionId],
      queryFn: async () => await getTransaction({ transactionId }),
      enabled: transactionId !== undefined,
    });
  return { transactions, showTransaction, analysis };
};

export default useTransactionQuery;
