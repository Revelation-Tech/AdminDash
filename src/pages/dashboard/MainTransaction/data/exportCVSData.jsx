import {
  formatCurrency,
  formatDate,
  getPrefixedValue,
} from "../../../../utils/functions";

export default (data) => ({
  headers: [
    { label: "S/N", key: "id" },
    { label: "Name", key: "name" },
    { label: "Description", key: "description" },
    { label: "Type", key: "type" },
    { label: "Amount", key: "amount" },
    { label: "Status", key: "status" },
    { label: "Date Joined", key: "createdAt" },
  ],

  body: data
    ? data?.map((item, index) => ({
        id: getPrefixedValue(++index),
        name: `${item.sourceWallet?.user?.firstName} ${item.sourceWallet?.user?.firstName}`,
        description: item?.description,
        type: item?.type,
        amount: formatCurrency(item?.amount),
        status: item?.status,
        createdAt: formatDate(item.createdAt),
      }))
    : [],
});
