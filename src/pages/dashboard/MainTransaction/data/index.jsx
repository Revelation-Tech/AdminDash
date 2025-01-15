import TableUserCard from "@components/card/TableUserCard.jsx";
import TableStatusCard from "@components/card/TableStatusCard.jsx";
import {
  formatCurrency, formatDateTime, getPrefixedValue,
} from "@utils/functions.js";

export const columns = [
  {
    title: "S/N",
    dataIndex: "reference",
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "reference",
    render: (reference, record, index) => getPrefixedValue(index + 1),
  },
  {
    title: "Name",
    dataIndex: ["sourceWallet", "user"],
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "user",
    render: (record) => <TableUserCard record={record} />,
  },
  {
    title: "Description",
    dataIndex: "description",
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "description",
    render: (description) => description,
  },
  {
    title: "Transaction Type",
    dataIndex: "type",
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "payment_type",
    render: (type) => type,
  },

  {
    title: "Amount",
    dataIndex: "amount",
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "amount",
    render: (amount) => formatCurrency(amount, "US"),
  },
  {
    title: "Status",
    dataIndex: "status",
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "status",
    render: (status) => <TableStatusCard status={status} />,
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    className:
      "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm !text-textColor",
    key: "date",
    render: (date) => formatDateTime(date),
  },
];
