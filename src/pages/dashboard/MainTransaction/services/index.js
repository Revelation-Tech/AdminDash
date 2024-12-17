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
    const response = await axios.get(`/transaction/${transactionId}`);
    return response.data?.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message ?? error.messages);
  }
};

