import moment from "moment";
import { formatCurrency, getPrefixedValue } from "../../../../utils/functions";

export default (data) => ({
  body: data
    ? data.map((item, index) => ({
        id: getPrefixedValue(++index), // S/N field
        name: `${item?.firstName} ${item?.lastName}`,
        email: item?.email, // Corrected to email
        walletBalance: formatCurrency(item?.wallet?.balance),
        totalSpend: formatCurrency(item?.totalSpend),
        totalTransaction: item?.totalTransactions,
        createdAt: moment(item?.createdAt).format("MMM DD, YYYY"), // Date formatting
        status: item?.status,
      }))
    : [],
  headers: [
    { label: "S/N", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email Address", key: "email" },
    { label: "Wallet Balance", key: "walletBalance" },
    { label: "Total Spend", key: "totalSpend" },
    { label: "Transaction Count", key: "totalTransaction" },
    { label: "Date Joined", key: "createdAt" },
    { label: "Status", key: "status" },
  ],
});
