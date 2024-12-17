import { Switch } from "antd";
import React from "react";

const ActionButton = ({ title, action }) => {
  return (
    <div className="px-2 flex justify-between items-center py-2.5">
      <h6 className="font-inter text-sm font-normal">{title}</h6>
      <Switch className="py-3"/>
    </div>
  );
};

export default ActionButton;
