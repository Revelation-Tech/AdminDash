import React from "react";
import { Form, message, Spin } from "antd";
import { Lock1 } from "iconsax-react";
import { LoadingOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";

import axios from "@config/axios";

import InputField from "@components/form/input";

const ChangePassword = () => {
  const [form] = Form.useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      try {
        const resp = await axios.post(`admin/update-password`, payload);

        return resp.data?.data;
      } catch (error) {
        console.error(error?.message);
        throw new Error(error?.response?.data?.message);
      }
    },
    onSuccess: (data) => {
      message.success("User password changed");
      form.resetFields();
    },
    onError: (error) => message.error(error.message),
  });

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={(data) => {
        mutate(data);
      }}
    >
      <div className="py-7 flex flex-col">
        <InputField
          name="oldPassword"
          label="Current Password"
          placeholder="Enter Password"
          type="password"
          Icon={Lock1}
        />

        <InputField
          name="newPassword"
          label="New Password"
          placeholder="Enter New Password"
          type="password"
          Icon={Lock1}
        />

        <InputField
          name="confirm_password"
          label="Confirm Password"
          placeholder="Enter New Password"
          type="password"
          Icon={Lock1}
        />
      </div>
      <div className=" flex justify-end">
        <button disabled={isPending} className="btn-fill ">
          {isPending && (
            <Spin
              spinning={isPending}
              size="medium"
              indicator={<LoadingOutlined spin />}
              className="mr-2 text-white"
            />
          )}
          Update Password
        </button>
      </div>
    </Form>
  );
};

export default ChangePassword;
