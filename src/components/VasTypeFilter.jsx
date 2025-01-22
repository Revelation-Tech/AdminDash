import { Dropdown } from "antd";
import React from "react";
import useTableStore from "../store/useTableStore";

const VasTypeFilter = ({ onChange }) => {
  const currentParams = useTableStore.getState().params

  return (
    <Dropdown
      trigger="click"
      menu={{
        items: [
          {
            label: (
              <button  onClick={() =>onChange('vasType', '')} className="p-2.5 font-inter text-sm font-medium">
                All
              </button>
            ),
            key: "all",
          },
          {
            label: (
              <button onClick={() =>onChange('vasType', 'AIRTIME')} className="p-2.5 font-inter text-sm font-medium">
                Airtime
              </button>
            ),
            key: "airtime",
          },
          {
            label: (
              <button onClick={() =>onChange('vasType', 'DATA')} className="p-2.5 font-inter text-sm font-medium">
                Data
              </button>
            ),
            key: "data",
          },
          {
            label: (
              <button onClick={() =>onChange('vasType', 'ELECTRICITY')} className="p-2.5 font-inter text-sm font-medium">
                Power
              </button>
            ),
            key: "electricity",
          },
          {
            label: (
              <button onClick={() =>onChange('vasType', 'CABLE')} className="p-2.5 font-inter text-sm font-medium">
                Cable
              </button>
            ),
            key: "cable",
          },
          {
            label: (
              <button onClick={() =>onChange('vasType', 'P2P')} className="p-2 font-inter text-sm font-medium">
                P2P
              </button>
            ),
            key: "p2p",
          },
        ],
      }}
    >
      <a
        onClick={(e) => e.preventDefault()}
        className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-bills-darkblue rounded-lg text-white"
      >
        Filter
      </a>
    </Dropdown>
  );
};

export default VasTypeFilter;
