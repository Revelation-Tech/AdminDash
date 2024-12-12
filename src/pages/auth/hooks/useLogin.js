import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { login } from "../services/login";

import { setToken } from "@utils/auth";
import useAdminStore from "@store/useAdminStore";

const useLogin = () => {
  const navigate = useNavigate();

  const {setData} = useAdminStore()

  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      message.success("Login successful");

      const data = response.data;

      setToken(data.token);

      setData(data)

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

      // return data;
    },
    onError: (error) => {
      message.error(error?.response?.data?.message ?? error?.message);
    },
  });
};
export default useLogin;
