import { Form, Modal, Switch } from "antd";
import React, { useState } from "react";
import useModalStore from "@store/useModalStore";
import InputField from "../../../../../components/form/input";
import { User } from "iconsax-react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import SelectionField from "../../../../../components/form/select";

const InviteUser = () => {
  const { show, type, onClose } = useModalStore();
  const [form] = Form.useForm();
  const [enable2fa, setEnable2fa] = useState(false);

  return (
    <Modal open={show} footer={false} onCancel={onClose}>
      <div className="flex flex-col items-center justify-center py-8 gap-2.5">
        <div className="rounded-full w-20 h-20 bg-bills-lightblue inline-flex items-center justify-center border border-bills-darkblue text-bills-darkblue">
          <User />
        </div>
        <h2 className="text-2xl font-bold ">Invite Team Member</h2>
      </div>

      <Form layout="vertical" className="p-4">
        <div className="flex flex-col">
          <InputField
            name="name"
            label="Full name"
            placeholder="Enter Full Name"
            Icon={User}
          />

          <InputField
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter email address"
            Icon={EnvelopeIcon}
          />

          <SelectionField
            placeholder="select role"
            name="role"
            label="Choose Role"
          />

          <div className="inline-flex gap-2.5 pb-3">
            <h6 className="">Enable 2FA</h6>
            <span className="inline-flex items-center gap-1.5">
              {" "}
              <span>{enable2fa ? "on" : 'off'}</span> <Switch onChange={setEnable2fa} />
            </span>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-4 mt-4">
          <button className="w-full btn-outline font-inter text-base" onClick={onClose} type="button">
            Cancel
          </button>

          <button className="w-full btn-fill font-inter text-base">
            Invite Member
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default InviteUser;
