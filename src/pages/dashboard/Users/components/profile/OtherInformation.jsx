import React from "react";

import { EnvelopeIcon, UserIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { DocumentCopy } from "iconsax-react";
const OtherInformation = ({ data, type }) => {
  return (
    <div className="px-2 flex justify-between items-center gap-4 last:border-0 border-b border-bills-borderLight py-3">
      <div className="inline-flex gap-2.5 items-center w-full">
        <div className=" font-inter text-sm h-10 w-10 rounded-full bg-bills-lightblue inline-flex justify-center items-center text-bills-darkblue">
          {type == "email" && <EnvelopeIcon className="w-5 h-5" />}
          {type == "user" && <UserIcon className="w-5 h-5" />}
          {type == "phone" && <PhoneIcon className="w-5 h-5" />}
        </div>
        <span className="text-sm font-inter text-bills-textColor">{data}</span>
      </div>
      <div className="border border-bills-darkblue text-bills-darkblue p-2 rounded-full">
        <DocumentCopy size="12" />
      </div>
    </div>
  );
};

export default OtherInformation;
