import React from "react";
import PreferenceCard from "../components/PreferenceCard";
import useAdminStore from "../../../../store/useAdminStore";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import axios from "@config/axios";

const options = {
  login: {
    title: "Login Attempts",
    desc: "These are notifications to notify you when your account is being accessed",
    option: [
      { label: "email", value: "email" },
      { label: "Push Notification", value: "push" },
      { label: "SMS", value: "sms" },
    ],
  },
  pushNotification: {
    title: "Push Notifications",
    desc: "These are notifications generated when the app is not open, notifying you of new update, news and messages",
    option: [
      { label: "Do not notifiy me", value: "do_not_notify" },
      {
        label: "All reminders",
        value: "all",
        desc: "Notify me for all other activity.",
      },
    ],
  },
  reminder: {
    title: "Reminders",
    desc: "These are notifications to remind you of updates you might have missed.",
    option: [
      { label: "Do not notifiy me", value: "do_not_notify" },
      { label: "Important reminders only", value: "important_only" },
      {
        label: "All reminders",
        value: "all",
        desc: "Notify me for all other activity.",
      },
    ],
  },
};

const Preferences = () => {
  const { preferences } = useAdminStore();

  // console.log(preferences[0])

  const { mutate } = useMutation({
    mutationFn: async ({ label, value }) => {
      let payload = {};

      payload[label] = value.toUpperCase();

      const res = await axios.post("admin/update-preference", payload);
    },
    onSuccess: () => message.success("Preference updated"),
    onError: () => message.error("Failed to update preference"),
  });

  return (
    <section className="mt-8 bg-white w-full p-6 rounded-xl border border-bills-borderLight">
      <div className="border-b border-bills-borderLight pb-6">
        <h1 className="text-xl font-semibold">Preference</h1>
        <p className="text-bills-textColor font-inter text-sm">
          Set the preference for your account and get modified when there's an
          update
        </p>
      </div>

      <div>
        {Object.keys(options)?.map((label) => (
          <PreferenceCard
            // value={label}
            data={options[label]}
            value={preferences[0][label] || ""}
            onSelected={(item) => mutate({ label, value: item })}
            key={label}
          />
        ))}
      </div>
    </section>
  );
};

export default Preferences;
