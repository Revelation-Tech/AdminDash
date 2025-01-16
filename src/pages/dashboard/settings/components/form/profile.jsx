import React, { useEffect } from "react";
import profile from "@assets/images/profile2.jpg";
import { Camera, User } from "iconsax-react";
import { Avatar, Form, message, Spin, Upload } from "antd";
import InputField from "@components/form/input";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@tanstack/react-query";

import { LoadingOutlined } from "@ant-design/icons";

import axios from "@config/axios";
import useAdminStore from "../../../../../store/useAdminStore";

const ProfileForm = () => {
  const { id: userId, email, name, phone } = useAdminStore();


  const [form] = Form.useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ id, payload }) => {
      try {
        const resp = axios.put(`admin/update/${id}`, payload);
        return resp.data;
      } catch (error) {
        console.error(error?.message);
        throw new Error(error?.response?.data?.message);
      }
    },
    onSuccess: (data) => {
      message.success("User profile updated");
      // update user profile state
      useAdminStore.setState({ ...data });
    },
    onError: (error) => message.error(error.message),
  });

  useEffect(() => {
    form.setFieldsValue({
      name,
      email,
      phone,
    });
  }, [email, name, phone]);

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={(data) => mutate({ id: userId, payload: data })}
    >
      <div className="w-[6.25rem] mt-8  relative cursor-pointer">
        <Upload maxCount={1} showUploadList={false}>
          <Avatar
            shape="circle"
            src={profile}
            className="w-[6.25rem] h-[6.25rem]"
          />
        </Upload>
        {/* <img src={profile} alt="" className='w-full rounded-full ' /> */}
        <span className="absolute -bottom-1 -right-1  border-white border-4 bg-bills-skyblue rounded-full w-9 h-9 inline-flex items-center flex-col justify-center text-white">
          <Camera size={18} />
        </span>
      </div>

      <div className="mt-8">
        <InputField name="name" label="Full Name" Icon={User} value={name} disabled/>

        <InputField
          name="email"
          label="Email Address"
          Icon={EnvelopeIcon}
          type="email"
          value={email}
          disabled
        />

        <InputField
          name="phone"
          label="Phone Number"
          Icon={PhoneIcon}
          value={phone}
          disabled
        />

        {/* <InputField name="role" label="Role" /> */}

        <div className="w-full grid md:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1">
            <button className="w-full btn-outline">Cancel</button>
          </div>
          <div className="col-span-2">
            <button disabled={isPending} className="w-full btn-fill">
              {isPending && (
                <Spin
                  spinning
                  size="medium"
                  indicator={<LoadingOutlined spin />}
                  className="mr-2"
                />
              )}
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ProfileForm;
