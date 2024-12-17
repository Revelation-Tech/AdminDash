import React from "react";
import ImageWithInformation from "./profile/ImageWithInformation";
import OtherInformation from "./profile/OtherInformation";
import ActionButton from "./profile/ActionButton";

const UserDetails = ({ record }) => {
  return (
    <div className="flex flex-col gap-5">
      <ImageWithInformation record={record} />

      <div className="mt-5">
        <OtherInformation type="email" data={record?.email} />
        <OtherInformation type="phone" data={record?.phone} />
        <OtherInformation type="user" data={record?.id} />
      </div>

      <div className="mb-3">
        <ActionButton title="Deactivate this user" />
        <ActionButton title="Freeze User" />
      </div>
    </div>
  );
};

export default UserDetails;
