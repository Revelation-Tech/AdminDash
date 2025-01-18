import { message } from "antd";
import { useMutation } from "@tanstack/react-query";

import { login } from "../services/login";

import { setToken } from "@utils/auth";
import useAdminStore from "@store/useAdminStore";
import { useNavigate } from "react-router-dom";

const useLogin = ({ callback }) => {
  const { setData, setPreferences} = useAdminStore(); // Ensure setToken exists
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login, // Ensure login function is imported and defined
    onSuccess: (response) => {
      message.success("Login successful");

      const data = response.data;

      // Store token
      if (data.token) {
        setToken(data.token); // Or use localStorage if needed
      }

      console.log(data)
      const userData = {
        createdAt: data?.createdAt,
        id: data?.id,
        email: data?.email,
        fullname: data.fullname,
        role: data?.role,
        phone: data?.phone,
      };
      const preference = data?.Preference
      
      // Update admin store data
      setData(userData);
      setPreferences(preference);

      // // Call callback if provided
      if (callback) {
        return callback(data);
      }
    },
    onError: (error) => {
      message.error(error?.response?.data?.message ?? error?.message);
    },
  });
};
export default useLogin;
