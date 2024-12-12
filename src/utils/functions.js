import moment from "moment";

export const getPrefixedValue = (value) => {
  // Determine the total length based on the value
  const length = value < 10 ? 4 : value < 100 ? 4 : value < 1000 ? 4 : 5;
  return `#${value.toString().padStart(length, "0")}`;
};

export const filterUserByStatus = (users) => {
  const activeUsers = users?.filter((user) => user?.status == "active");
  const deactivedUsers = users?.filter((user) => user?.status == "deactive");
  const froozenUsers = users?.filter((user) => user?.status == "froozen");

  return {
    all: {
      total: users?.length ?? 0,
      users: users,
    },
    active: {
      total: activeUsers?.length ?? 0,
      users: activeUsers,
    },
    froozen: {
      total: froozenUsers?.length ?? 0,
      users: froozenUsers,
    },
    deactived: {
      total: deactivedUsers?.length ?? 0,
      users: deactivedUsers,
    },
  };
};

export const formatDate = (date) => moment(date).format("MMM DD, YYYY");
export const formatDateTime = (date) => moment(date).format("MMM DD, YYYY, HH:mm A");

export const formatCurrency = (amount, country = "NG", currency = "NGN") =>
  amount?.toLocaleString(`en-${country}`, { style: "currency", currency: currency });
