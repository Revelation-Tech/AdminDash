import { message, Spin } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import axios from "@config/axios";

const RequestOTP = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await axios.post("admin/send-otp", payload);

        const { data } = response.data;

        return data?.reference;
      } catch (error) {
        throw new Error(error?.response?.data?.message ?? error.message);
      }
    },
    onSuccess: (reference) => {
      message.success("OTP send to your email address");

      navigate(`/password/reset-password`, {
        replace: true,
        state: { reference: reference, email: email },
      });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const handleSubmit = () => {
    if (!email) {
      message.error("Please enter a valid email");
      return;
    }
    mutate({ email: email });
  };

  return (
    <section className=" bg-gray-100 w-full h-screen flex items-center ">
      <div className="w-full max-w-xl m-auto flex flex-col">
        <div className="bg-white p-8 w-full shadow-card rounded-lg">
          <div className="inline-flex flex-col justify-center items-center w-full mb-8">
            {/* <Logo2 height="50" width="203" /> */}
            <h2 className="font-sans text-2xl font-bold uppercase text-bills-darkblue">
              PayBills Admin Console
            </h2>
            <div className="">
              <h1 className="text-black font-clashGrotesk font-medium text-xl">
                Request OTP code
              </h1>
              {/* <p className="text-bills-lightgrey/80 mt-4 text-sm">
            Welcome Back! Please enter your credentials to access your
            account and continue managing your business effortlessly.
          </p> */}
            </div>
          </div>
          {/* Form Container */}
          <div className="w-full">
            <label htmlFor="email" className="text-sm mt-4">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              className=" mt-2 mb-5 w-full ring-1 focus:ring-1 ring-bills-borderLight focus:ring-offset-bills-borderLight focus:outline-none p-2 rounded"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="bg-bills-darkblue/85 hover:bg-bills-darkblue text-white p-2 w-full mt-4 rounded py-4"
              onClick={handleSubmit}
              disabled={isPending}
            >
              {/* Login */}
              {isPending ? (
                <Spin
                  size="small"
                  spinning={isPending}
                  indicator={<LoadingOutlined className="text-white" />}
                />
              ) : (
                "Request OTP"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestOTP;
