import { Filter, ImportCurve, SearchNormal1, User } from "iconsax-react";
import React from "react";
import useTableStore from "../../../store/useTableStore";
import ExportOptionButton from "../../../components/ExportOptionButton";

const UserSearch = ({ showFilter }) => {
  const { searchTable, data } = useTableStore();

  return (
    <div className="bg-white p-4 px-5 rounded-md">
      <div className="md:flex items-center justify-between flex-wrap ">
        <div className="inline-flex items-center ring-1 ring-bills-borderLight outline-none focus:ring-1 focus:ring-bills-darkblue rounded-md px-3 gap-1.5 p-2.5 w-1/3">
          <SearchNormal1 size={16} className="text-black/60" />
          <input
            type="text"
            className=" w-full placeholder-black/60 border-0 focus:outline-none"
            placeholder="Search"
            onKeyUp={(e) => searchTable(e.target.value)}
          />
        </div>

        <div className="md:inline-flex justify-between items-center gap-4">
          {showFilter && (
            <button className="btn-outline2 !py-2.5 text-sm !px-6">
              <Filter size={16} className="inline" variant="Outline" /> Filter
            </button>
          )}

          <ExportOptionButton />
          {/* <button className="btn-fill2 inline-flex items-center gap-2 !py-3">
            <ImportCurve size={16} className="inline" variant="Outline" />
            Export Csv
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
