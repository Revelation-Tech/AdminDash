import React from "react";
import { Dropdown } from "antd";
import { ImportCurve } from "iconsax-react";
import { CSVLink } from "react-csv";
import DOMPurify from "isomorphic-dompurify";

import useTableStore from "../store/useTableStore";
import { formatCurrency, getPrefixedValue } from "../utils/functions";
import moment from "moment";

const ExportOptionButton = ({ csvHeader, csvData, title }) => {
  
  return (
    <Dropdown
      trigger="click"
      menu={{
        items: [
          {
            label: (
              <CSVLink
                headers={csvHeader}
                title={title || "users-documents"}
                data={csvData || []}
                className="p-2.5 font-inter text-sm font-medium"
              >
                CSV
              </CSVLink>
            ),
            key: "csv",
          },
          { label: <button className="p-2.5 font-inter text-sm font-medium">PDF</button>, key: "PDF" },
        ],
      }}
    >
      <a
        onClick={(e) => e.preventDefault()}
        className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-bills-darkblue rounded-lg text-white"
      >
        <ImportCurve size={16} className="inline" variant="Outline" />
        Export
      </a>
    </Dropdown>
  );
};

export default ExportOptionButton;
