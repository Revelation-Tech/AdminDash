import { Form, Select } from "antd";
import React from "react";
import InputField from "@components/form/input";

const FaqForm = () => {
  return (
    <Form layout="vertical">
      <InputField name="question" placeholder="Input your Question here" />

      <div className="inline-flex flex-col gap-4">
        <label htmlFor="category" className="font-semibold text-base">
          Category
        </label>
        <div className=" border border-bills-borderLight rounded-md p-4">
            
        </div>
      </div>
    </Form>
  );
};

export default FaqForm;
