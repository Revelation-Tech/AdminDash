import React from "react";
import PreferenceCard from "../components/PreferenceCard";

const options = [
  {
    title: "Login Attempts",
    desc: "These are notifications to notify you when your account is being accessed",
    option: [],
  },
];

const Preferences = () => {
  return (
    <section className="mt-8 bg-white w-full p-6 rounded-xl border border-bills-borderLight">
      <div className="border-b border-bills-borderLight pb-6">
        <h1 className="text-xl font-semibold">Preference</h1>
        <p className="text-bills-textColor font-inter text-sm">
          Set the preference for your account and get modified when there's an
          update
        </p>
      </div>

      <div c>
          {options?.map((item) => (
            <PreferenceCard
              data={item}
            />
          ))}
        
      </div>
    </section>
  );
};

export default Preferences;
