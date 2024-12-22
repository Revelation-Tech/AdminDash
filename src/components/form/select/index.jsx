import { Form, Select } from "antd";
import React from "react";

const SelectionField = ({ name, label, source, placeholder, isRequired }) => {
  return (
    <Form.Item
      name={name}
      label={
        <span className="capitalize font-medium font-inter text-sm">
          {label}
        </span>
      }
      rules={[{ message: `${label} is required`, required: isRequired }]}
    >
      <Select
        options={source}
        placeholder={placeholder}
        className="border border-bills-borderLight rounded-md focus:ring-0 placeholder:text-bills-text placeholder:capitalize h-12"
      />
    </Form.Item>
  );
};

export default SelectionField;
