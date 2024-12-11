import { Table } from "antd";
import React, { useState } from "react";
import useTableStore from "../store/useTableStore";

const components = {
  header: {
    wrapper: (props) => (
      <thead className="bg-gray-50 border-b-2 border-gray-500 " {...props} />
    ),
    cell: (props) => (
      <th
        className="!bg-white text-center p-4 whitespace-nowrap border-0"
        {...props}
      />
    ),
    body: {
      //   wrapper: (props) => <tbody {...props} />,
      cell: (props) => (
        <td {...props} className="text-center p-4 whitespace-nowrap" />
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
      pagination={{...pagination, showTitle: true, }}
      components={components}
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      rowClassName={(_, index) =>
        index % 2 == 0
          ? "bg-bills-lightgrey2 border-t-2 border-lightgrey2"
          : "bg-white"
      }
    />
  );
};

export default CustomTable;
