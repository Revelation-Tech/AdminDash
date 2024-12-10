import axios from "@config/axios";

export const login = (payload) => {
  try {
    const response = axios.post("/admin/login", payload);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data?.message ?? error?.message);
  }
};
