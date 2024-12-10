import { useMutation } from "@tanstack/react-query";

import { login } from "../services/login";

const useLogin = () =>
  useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      
    },
    onError: (error) => {},
  });

export default useLogin;
