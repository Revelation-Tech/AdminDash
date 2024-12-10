import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getToken } from "../utils/auth";
import { Navigate } from "react-router-dom";

const useValidate = () => {
  const [token] = useState(getToken);

  const { data, isLoading } = useQuery({});

  const renderLoading = () => {
    if (isLoading) {
    }
    return null;
  };

  return { data, isLoading, token, renderLoading };
};

export default useValidate;
