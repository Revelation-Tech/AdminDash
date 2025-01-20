import React, { useEffect, useState } from "react";
import profile from "@assets/images/profile2.jpg";
import { Camera, User } from "iconsax-react";
import { Avatar, Form, Input, message, Spin, Upload } from "antd";
import InputField from "@components/form/input";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@tanstack/react-query";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import axios from "@config/axios";
import useAdminStore from "../../../../../store/useAdminStore";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const ProfileForm = () => {
  const { id: userId, email, fullname, phone, image } = useAdminStore();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(image || profile);

  // console.log(fullname, email, phone)

  const [form] = Form.useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ id, payload }) => {
      try {
        const resp = axios.put(`admin/update-user/${id}`, payload);
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

  form.setFieldsValue({
    fullname,
    email,
    phone,
  });

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={(data) => mutate({ id: userId, payload: data })}
    >
      <div className="w-[6.25rem] mt-8  relative cursor-pointer">
        <Upload
          maxCount={1}
          showUploadList={false}
          method="put"
          action={`https://paybillsbackend.onrender.com/admin/upload-image/${userId}`}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          name="avatar"
          // listType="picture-card"
          className="avatar-uploader"
        >
          {imageUrl ? (
            <Avatar
              shape="circle"
              src={imageUrl}
              className="w-[6.25rem] h-[6.25rem]"
            />
          ) : (
            uploadButton
          )}
        </Upload>
        {/* <img src={profile} alt="" className='w-full rounded-full ' /> */}
        <span className="absolute -bottom-1 -right-1  border-white border-4 bg-bills-skyblue rounded-full w-9 h-9 inline-flex items-center flex-col justify-center text-white">
          <Camera size={18} />
        </span>
      </div>

      <div className="mt-8">
        <InputField
          name="fullname"
          label="Full Name"
          Icon={User}
          disabled
          value={fullname}
        />

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

        {/* <div className="w-full grid md:grid-cols-3 gap-4 mt-4">
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
        </div> */}
      </div>
    </Form>
  );
};

export default ProfileForm;
