import React from "react";
import profile from "@assets/images/profile2.jpg";
import { Camera, User } from "iconsax-react";
import { Avatar, Form, Upload } from "antd";
import InputField from "@components/form/input";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const ProfileForm = () => {
  return (
    <Form layout="vertical">
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
        <InputField name="name" label="Full Name" Icon={User} />

        <InputField
          name="email"
          label="Email Address"
          Icon={EnvelopeIcon}
          type="email"
        />

        <InputField name="phone" label="Phone Number" Icon={PhoneIcon} />

        <InputField name="role" label="Role" />

        <div className="w-full grid md:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1">
            <button className="w-full btn-outline">Cancel</button>
          </div>
          <div className="col-span-2">
            <button className="w-full btn-fill">Save changes</button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ProfileForm;
