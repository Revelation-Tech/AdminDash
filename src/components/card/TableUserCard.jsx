import React from "react";

const TableUserCard = ({ record, showEmail = true }) => {
  // console.log(record);

  return (
    <div className={`inline-flex ${!showEmail && 'items-center'} gap-2`}>
      <div className="w-10 h-10 rounded-full bg-bills-darkblue inline-flex flex-col justify-center items-center text-white uppercase font-bold">
        {record?.firstName ? record?.firstName.charAt(0) : "C"}
      </div>
      {showEmail ? (
        <div className="">
          <h5 className="font-medium text-sm">
            {record?.firstName} {record?.lastName}
          </h5>
          <span className="lowercase text-gray-500">{record?.email}</span>
        </div>
      ) : (
        <h5 className="font-medium text-sm">
          {record?.firstName} {record?.lastName}
        </h5>
      )}
    </div>
  );
};

export default TableUserCard;
