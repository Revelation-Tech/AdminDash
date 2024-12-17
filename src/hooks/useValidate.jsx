import { Spin } from "antd";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";

import axios from "@config/axios";
import { getToken } from "../utils/auth";

const useValidate = () => {
  const [token] = useState(getToken);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await axios.get("admin/dashboard");
      return res?.data;
    },
    enabled: !!token
  });

  const renderLoading = () => {
    if (isLoading) {
      return (
        <div className="h-screen flex flex-1 flex-col justify-center items-center">
          <Spin spinning={isLoading} indicator={<LoadingOutlined />} />
        </div>
      );
    }
    return null;
  };

  return { data, isLoading, token, renderLoading, isError, error };
};

export default useValidate;
