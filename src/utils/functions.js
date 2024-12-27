import moment from "moment";

export const getPrefixedValue = (value) => {
  // Determine the total length based on the value
  const length = value < 10 ? 4 : value < 100 ? 4 : value < 1000 ? 4 : 5;
  return `#${value.toString().padStart(length, "0")}`;
};

export const filterByStatus = (data, status) => {

  return status == "all" ? data : data.filter((item) => item?.status?.toLowerCase() == status);
};

export const formatDate = (date) => moment(date).format("MMM DD, YYYY");
export const formatDateTime = (date) => moment(date).format("MMM DD, YYYY, HH:mm A");

export const formatCurrency = (amount, country = "NG", currency = "NGN") =>
  amount?.toLocaleString(`en-${country}`, { style: "currency", currency: currency });
