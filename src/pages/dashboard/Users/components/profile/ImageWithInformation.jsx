import React from 'react'
import moment from "moment";
import { Avatar } from "antd";


const ImageWithInformation = ({record}) => {
  return (
    <div className="inline-flex justify-between items-center w-full">
      <div className="inline-flex gap-2">
        <div className="w-12 h-12 rounded-full bg-bills-darkblue inline-flex flex-col justify-center items-center text-white uppercase font-bold">
          {record?.image ? <Avatar src={record?.image} className="w-full h-full"/> : record?.firstName.charAt(0)}
        </div>
        <div className="">
          <h5 className="font-semibold text-base font-clashGrotesk">
            {record?.firstName} {record?.lastName}
          </h5>
          <span className="capitalize text-bills-text text-sm font-inter">{`joined ${moment(record?.createdAt).format("DD MMMM, YYYY")}`}</span>
        </div>
      </div>

      <div className={`rounded-full px-4 py-1.5 inline-flex items-center justify-center text-xs ${record?.status?.toLowerCase() == 'active' ? "text-green-600 bg-green-50" : "bg-red-50 text-red-500"} capitalize font-inter font-semibold`}>
        {record?.status || "active"}
      </div>
    </div>
  )
}

export default ImageWithInformation