import moment from "moment";
import { getPrefixedValue } from "../../../../utils/functions";

export const teamColumn = [
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        User ID
      </span>
    ),
    dataIndex: "bioDataId",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm  font-inter",
    key: "user_id",
    render: (bioDataId, record, index) =>
      bioDataId ?? getPrefixedValue(index + 1),
  },

  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal capitalize">
        User details
      </span>
    ),
    dataIndex: "user",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm  font-inter",
    key: "user",
    render: (record) => (
      <div className="inline-flex gap-2">
        <div className="w-10 h-10 rounded-full bg-bills-darkblue inline-flex flex-col justify-center items-center text-white uppercase font-bold">
          {record ? record?.name?.charAt(0) : "C"}
        </div>
        <div className="">
          <h5 className="font-medium text-sm">{record?.name}</h5>
          <span className="lowercase text-gray-500">{record?.email}</span>
        </div>
      </div>
    ),
  },

  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal capitalize">
        role
      </span>
    ),
    dataIndex: "role",
    className: "!bg-transparent !before:w-0 !before:h-0 !font-normal !text-sm  font-inter",
    key: "role",
    render: (role) => <span className="capitalize">{role}</span>,
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        2FA Status
      </span>
    ),
    dataIndex: "2fa",
    key: "2fa",
    className: "!bg-transparent !font-normal !text-sm  font-inter",
    render: (status) => (
      <div className="flex items-center gap-1 capitalize w-full text-sm">
        <span
          className={`${
            status.toLowerCase() == "enabled"
              ? "bg-green-700"
              : "bg-bills-textColor"
          } h-2 w-2 rounded-full capitalize`}
        ></span>
        <span>{status ? status : "undefined"}</span>
      </div>
    ),
  },
  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
        Date Joined
      </span>
    ),
    dataIndex: "createdAt",
    key: "createdAt",
    className: "!bg-transparent border-0 !font-normal !text-sm  font-inter",
    render: (createdAt) => (
      <span className={`px-2.5 py-1.5 text-sm`}>
        {moment(createdAt).format("MMM DD, YYYY")}
      </span>
    ),
  },

  {
    title: (
      <span className="text-bills-text text-xs font-inter font-normal">
       Account Status
      </span>
    ),
    dataIndex: "status",
    key: "status",
    className: "!bg-transparent !font-normal !text-sm  font-inter",
    render: (status) => (
      <span
        className={`${
          status.toLowerCase() == "active"
            ? "bg-green-50 text-green-700"
            : "bg-red-50 text-red-700"
        } px-2.5 py-1.5 rounded-full capitalize font-medium text-xs`}
      >
        {status ? status : "undefined"}
      </span>
    ),
  },
];

export const data = [
  {
    user: { name: "Idris Alwa", email: "al.idris@mail.com" },
    role: "admin",
    "2fa": "enabled",
    createdAt: "10-11-2024",
    status: "active",
  },
  {
    user: { name: "Sarah Chen", email: "sarah.chen@mail.com" },
    role: "user",
    "2fa": "disabled",
    createdAt: "15-11-2024",
    status: "active",
  },
  {
    user: { name: "Marcus Johnson", email: "m.johnson@mail.com" },
    role: "moderator",
    "2fa": "enabled",
    createdAt: "08-11-2024",
    status: "suspended",
  },
  {
    user: { name: "Elena Rodriguez", email: "e.rodriguez@mail.com" },
    role: "admin",
    "2fa": "enabled",
    createdAt: "12-11-2024",
    status: "active",
  },
  {
    user: { name: "David Kim", email: "d.kim@mail.com" },
    role: "user",
    "2fa": "enabled",
    createdAt: "20-11-2024",
    status: "inactive",
  },
  {
    user: { name: "Laura Smith", email: "l.smith@mail.com" },
    role: "moderator",
    "2fa": "disabled",
    createdAt: "05-11-2024",
    status: "active",
  },
  {
    user: { name: "Mohammed Ali", email: "m.ali@mail.com" },
    role: "user",
    "2fa": "enabled",
    createdAt: "18-11-2024",
    status: "active",
  },
  {
    user: { name: "Patricia Wang", email: "p.wang@mail.com" },
    role: "admin",
    "2fa": "enabled",
    createdAt: "22-11-2024",
    status: "active",
  },
  {
    user: { name: "James Wilson", email: "j.wilson@mail.com" },
    role: "user",
    "2fa": "disabled",
    createdAt: "25-11-2024",
    status: "suspended",
  },
  {
    user: { name: "Fatima Hassan", email: "f.hassan@mail.com" },
    role: "moderator",
    "2fa": "enabled",
    createdAt: "30-11-2024",
    status: "active",
  },
];
