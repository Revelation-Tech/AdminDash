import { Table } from "antd";
import React, { useState } from "react";
import useTableStore from "../store/useTableStore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowCircleLeft, ArrowLeft2 } from "iconsax-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const components = {
  header: {
    wrapper: (props) => (
      <thead className="bg-gray-50 border-b-2 border-gray-500 " {...props} />
    ),
    cell: (props) => (
      <th
        className="!bg-white text-center text-sm whitespace-nowrap border-0"
        {...props}
      />
    ),
    body: {
      //   wrapper: (props) => <tbody {...props} />,
      cell: (props) => (
        <td {...props} className="text-center whitespace-nowrap" />
      ),
    },
  },
};

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    // Column configuration not to be checked
    user_id: record?.id,
  }),
};

const CustomTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  const { columns, data, loading, pagination } = useTableStore();

  const navigate = useNavigate();

  const location = useLocation();

  if (!columns) {
    return (
      <div className="flex justify-center items-center py-4">Loading...</div>
    );
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      className="!bg-transparent"
      pagination={{
        ...pagination,
        showTitle: true,
        itemRender: (page, type, originalElement) => {
          if (type == "prev") {
            return (
              <button className="cursor-pointer text-xl p-1.5 rounded-full border border-bills-skyblue">
                <ChevronLeftIcon className="w-4 h-4 text-bills-skyblue" />
              </button>
            );
          }

          if (type == "next") {
            return (
              <button className="cursor-pointer text-xl p-1.5 rounded-full border border-bills-skyblue">
                <ChevronRightIcon className="w-4 h-4 text-bills-skyblue" />
              </button>
            );
          }

          return originalElement;
        },
      }}
      components={components}
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      onRow={(row) => ({
        onClick: () => navigate(`${location.pathname}/${row?.id}`),
        className: "cursor-pointer",
      })}
      rowClassName={(_, index) => `
       ${
         index % 2 == 0
           ? "bg-bills-lightgrey2 border-t-2 border-lightgrey2"
           : "bg-white"
       }`}
    />
  );
};

export default CustomTable;
