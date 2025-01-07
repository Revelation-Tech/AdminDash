import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import useAdminStore from "@store/useAdminStore";

const PreferenceCard = ({ data, onSelected, value }) => {
  const [selectedItem, setSelectedItem] = useState(value?.toLowerCase());


  const onChange = (e) => {
    setSelectedItem(e.target.value);
    onSelected(e.target.value);
  };

  return (
    <div className="md:grid grid-cols-2 w-full pt-7 pb-8 border-b border-bills-borderLight">
      <div className="">
        <h5 className="text-sm font-medium font-inter">{data?.title}</h5>
        <p className="text-sm text-bills-text">{data?.desc}</p>
      </div>
      <div className="">
        <Radio.Group
          name={data?.title}
          className="space-y-1 flex flex-col gap-2"
          value={selectedItem}
          onChange={onChange}
          checked={value == selectedItem}
        >
          {data?.option?.map((item) => (
            <Radio
              className="capitalize"
              value={item?.value}
              key={item?.value}
              // checked={item?.value == value}
            >
              <div className="inline-flex flex-col">
                <span>{item?.label}</span>
                {item?.desc && (
                  <span className="text-gray-400 text-xs">{item?.desc}</span>
                )}
              </div>
            </Radio>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default PreferenceCard;
