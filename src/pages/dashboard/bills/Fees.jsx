import { Form, Select, Spin, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { LoadingOutlined } from "@ant-design/icons";

import useBillsQuery from "./hooks/useBillsQuery";
import InputField from "../../../components/form/input";
import SelectionField from "../../../components/form/select";

const Fees = () => {
  const { transactionFees, updateTransctionFees } = useBillsQuery();

  const { data, isLoading } = transactionFees;
  const [form] = Form.useForm();

  // console.log(data);

  const [switchOn, setSwitchOn] = useState(false);
  const [fee, setFee] = useState(0);
  const [vasType, setVasType] = useState("airtime");

  useEffect(() => {
    if (data) {
      setSwitchOn(data?.enabled);
      setFee(data[vasType]);
      form.setFieldsValue({ fee: fee, vasType: vasType });
    }
  }, [isLoading, data, vasType]);

  return (
    <div className="bg-white rounded-xl shadow-light p-8 space-y-5">
      <div className="inline-flex items-center ont-inter font-normal gap-5">
        <h3 className="text-2xl ">Enable Transaction Fee</h3>
        <span className="text-lg text-[#7F7F7F] inline-flex items-center gap-2.5 capitalize">
          {switchOn ? "on" : "off"}{" "}
          <Switch
            onChange={(value) => {
              setSwitchOn(value);
              console.log(value);
              updateTransctionFees.mutate({ enabled: value });
            }}
            checked={switchOn}
          />
        </span>
      </div>

      <div
        className={`py-5 rounded-md px-4 ${
          switchOn
            ? "bg-[#73C97C1A] text-[#73C97C]"
            : "bg-[#E74C3C1A] text-[#E74C3C]"
        } space-y-3`}
      >
        <div className="inline-flex gap-2">
          {switchOn ? (
            <CheckCircleIcon className="size-6" />
          ) : (
            <XCircleIcon className="size-6" />
          )}
          <h3 className="font-inter font-semibold text-xl">
            {" "}
            {switchOn ? "Enabled" : "Disabled"}
          </h3>
        </div>
        <p>
          Transaction fees have been successfully{" "}
          {switchOn ? "activated" : "deactivated"}. All users will{" "}
          {switchOn ? "now" : "not "}
          be charged transaction processed on the platform. This adjustment
          ensures seamless operations and supports the continued growth and
          sustainability of our services. Please review the fee structure to
          ensure it aligns with the business goals
        </p>
      </div>

      <Form
        form={form}
        layout="vertical"
        className="w-full max-w-lg space-y-4"
        onFinish={(data) => {
          // data['enabled'] = switchOn;
          const payload = {};

          payload[vasType] = Number(fee);

          console.log(payload);
          updateTransctionFees?.mutate(payload);
        }}
      >
        <InputField
          name="fee"
          disabled={!switchOn}
          label="fee"
          placeholder="0"
          value={fee}
          onChange={setFee}
        />

        {switchOn && (
          <>
            <SelectionField
              label="Bill Type"
              value={vasType}
              name="vasType"
              onChange={setVasType}
              placeholder="Choose bill transaction type"
              source={
                data
                  ? Object.keys(data)
                      .filter(
                        (title) =>
                          title !== "id" &&
                          title !== "enabled" &&
                          title !== "updatedAt" &&
                          title !== "createdAt"
                      )
                      .map((title) => ({
                        label: (
                          <span className="text-sm font-medium font-clashGrotesk uppercase">
                            {title}
                          </span>
                        ),
                        value: title,
                        key: title,
                      }))
                  : []
              }
            />

            <button
              type="submit"
              className={`font-sm bg-bills-darkblue text-white capitalize block px-6 py-2.5 rounded-md ${
                updateTransctionFees?.isPending && "bg-opacity-50"
              }`}
              disabled={updateTransctionFees?.isPending}
            >
              Save{" "}
              {updateTransctionFees?.isPending && (
                <Spin
                  spinning
                  size="small"
                  color="#fffff"
                  indicator={<LoadingOutlined spin />}
                />
              )}
            </button>
          </>
        )}
      </Form>
    </div>
  );
};

export default Fees;
