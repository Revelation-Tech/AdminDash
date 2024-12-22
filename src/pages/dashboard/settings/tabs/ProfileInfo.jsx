import React from "react";

import ProfileForm from "../components/form/profile";

const ProfileInfo = () => {
  return (
    <section className="bg-white w-full  p-3 md:p-8 rounded-xl border border-gray-200">
      <div>
        <h1 className="text-xl font-semibold">Profile Info</h1>
        <p className="text-bills-text text-sm font-sans">
          Update your photo & personal info here
        </p>
      </div>

      <ProfileForm />
    </section>
  );
};

export default ProfileInfo;
