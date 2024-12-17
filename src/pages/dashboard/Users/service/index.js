import axios from "@config/axios";

export const users = async () => {
  try {
    const response = await axios.get("/admin/sort-users");

    // console.log(response.data)

    return response.data?.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const user = async (id) => {
  // console.log(`User ${id}`);

  try {
    const response = await axios.get(`/admin/user-details/${id}`);


    console.log(response.data?.data);

    return response.data?.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const storeUser = async (payload) => {
  try {
    const response = await axios.post(`user`, payload);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (id, payload) => {
  try {
    const response = await axios.put(`user/${id}`);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeUser = async (id) => {
  try {
    const response = await axios.delete(`user/${id}`);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
