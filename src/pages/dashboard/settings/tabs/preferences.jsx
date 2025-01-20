import React from "react";
import PreferenceCard from "../components/PreferenceCard";
import useAdminStore from "../../../../store/useAdminStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import axios from "@config/axios";

const options = {
  login: {
    title: "Login Attempts",
    desc: "These are notifications to notify you when your account is being accessed",
    option: [
      { label: "Do not notifiy me", value: "do_not_notify" },
      { label: "email", value: "email" },
      { label: "SMS", value: "sms" },
    ],
  },
  pushNotification: {
    title: "Change Password",
    desc: "These are notifications generated when your login password has been changed.",
    option: [
      { label: "Do not notifiy me", value: "do_not_notify" },
      { label: "email", value: "email" },
      { label: "SMS", value: "sms" },
      // {
      //   label: "All reminders",
      //   value: "all",
      //   desc: "Notify me for all other activity.",
      // },
    ],
  },
  // reminder: {
  //   title: "Reminders",
  //   desc: "These are notifications to remind you of updates you might have missed.",
  //   option: [
  //     { label: "Do not notifiy me", value: "do_not_notify" },
  //     { label: "Important reminders only", value: "important_only" },
  //     { label: "email", value: "email" },
  //     { label: "SMS", value: "sms" },
  //     {
  //       label: "All reminders",
  //       value: "all",
  //       desc: "Notify me for all other activity.",
  //     },
  //   ],
  // },
};

const Preferences = () => {
  const { preferences } = useAdminStore();

  // console.log(preferences[0])

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async ({ label, value }) => {
      
      message.loading("Updating prefences...", 1500)

      let payload = {};

      payload[label] = value.toUpperCase();

      const res = await axios.post("admin/update-preference", payload);

      console.log(res.data);

      return res.data

    },
    onSuccess: (data ) => {
      message.success("Preference updated")
      queryClient.invalidateQueries("adminProfile")
    },
    onError: (error) => message.error(error?.response?.data?.message ?? "Failed to update preference" ?? error?.message ),
    onSettled: () => message.destroy()  
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

      {preferences ? (
        <div>
          {Object.keys(options)?.map((label) => (
            <PreferenceCard
              // value={label}
              data={options[label]}
              value={ preferences[0] ? preferences[0][label] : ""}
              onSelected={(item) => mutate({ label, value: item })}
              key={label}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Preferences;
