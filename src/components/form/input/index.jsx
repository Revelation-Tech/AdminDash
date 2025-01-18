import { Form, Input, message } from "antd";
import React from "react";

const InputField = ({
  name,
  label,
  placeholder,
  type,
  isRequired = false,
  Icon,
  value,
  disabled,
}) => {

  // console.log(value)
  return (
    <Form.Item
      name={name}
      label={
        <span className="capitalize font-medium font-inter text-sm">
          {label}
        </span>
      }
      // initialValue={value}
      rules={[{ message: `${label} is required`, required: isRequired }]}
     
    >
      <div className={`${disabled && 'bg-gray-100'} inline-flex items-center border border-bills-borderLight p-2.5 rounded-md w-full`}>
        {Icon && <Icon size={18} className="text-bills-textColor w-5 h-5" />}
        <Input
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          type={type}
          className={`border-none text-black focus:ring-0 placeholder:text-bills-text placeholder:capitalize disabled:bg-gray-100`}
        />
      </div>
    </Form.Item>
  );
};

export default InputField;
