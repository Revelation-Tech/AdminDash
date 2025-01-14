import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] bg-white my-8 rounded-xl">
      <Spin indicator={<LoadingOutlined />} spinning />
    </div>
  );
};

export default PageLoader;
