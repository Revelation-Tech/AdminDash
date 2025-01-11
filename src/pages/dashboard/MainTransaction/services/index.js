import axios from "@config/axios";

export const fetchTransactions = async () => {
  try {
    const response = await axios.get("admin/sort-transactions");
    return response.data?.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message ?? error.messages);
  }
};

export const getTransaction = async ({ transactionId }) => {
  try {
    const response = await axios.get(`admin/transaction-details/${transactionId}`);
    return response.data?.data[0];
  } catch (error) {
    throw new Error(error?.response?.data?.message ?? error.messages);
  }
};

export const getTransactionAnalysis = async () => {
  try {
    const response = await axios.get(`admin/analyze-transaction`);
    return response.data?.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message ?? error.messages);
  }
};

