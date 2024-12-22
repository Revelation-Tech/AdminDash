import React from "react";
import { Form } from "antd";
import { Lock1 } from "iconsax-react";

import InputField from "@components/form/input";

const ChangePassword = () => {
  return (
    <Form layout="vertical">
      <div className="py-7 flex flex-col">
        <InputField
          name="current"
          label="Current Password"
          placeholder="Enter Password"
          Icon={Lock1}
        />

        <InputField
          name="password"
          label="New Password"
          placeholder="Enter New Password"
          Icon={Lock1}
        />

        <InputField
          name="confirm_password"
          label="Confirm Password"
          placeholder="Enter New Password"
          Icon={Lock1}
        />
      </div>
      <div className=" flex justify-end">
        <button className="btn-fill ">Update Password</button>
      </div>
    </Form>
  );
};

export default ChangePassword;
