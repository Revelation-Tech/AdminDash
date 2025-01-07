import { Form, Input, message } from "antd";
import React from "react";

const InputField = ({
  name,
  label,
  placeholder,
  type,
  isRequired = false,
  Icon,
  value
}) => {
  return (
    <Form.Item
      name={name}
      label={
        <span className="capitalize font-medium font-inter text-sm">
          {label}
        </span>
      }
      initialValue={value}
      rules={[{ message: `${label} is required`, required: isRequired }]}
    >
      <div className="inline-flex items-center border border-bills-borderLight p-2.5 rounded-md w-full">
        {Icon && <Icon size={18} className="text-bills-textColor w-5 h-5" />}
        <Input
          placeholder={placeholder}
          type={type}
          className="border-none focus:ring-0 placeholder:text-bills-text placeholder:capitalize"
        />
      </div>
      
    </Form.Item>
  );
};

export default InputField;
