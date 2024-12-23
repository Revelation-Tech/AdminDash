import { Radio } from "antd";
import React from "react";

const PreferenceCard = ({ data }) => {
  return (
    <div className="md:grid grid-cols-2 w-full pt-4 pb-8 border-b border-bills-borderLight">
      <div className="">
        <h5 className="text-sm font-medium font-inter">{data?.title}</h5>
        <p className="text-sm text-bills-text">{data?.desc}</p>
      </div>
      <div className="">
        {data?.option?.map((item) => (
          <span className="block my-2">
            <Radio name={option?.name} value={item?.value}/> &nbsp; {item?.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PreferenceCard;
