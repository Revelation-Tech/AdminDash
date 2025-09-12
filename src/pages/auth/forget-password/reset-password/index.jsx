import { Spin, message } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Eye, EyeSlash } from "iconsax-react";
import { useMutation } from "@tanstack/react-query";
import axios from "@config/axios";

import Logo2 from "../../../../assets/Logo2";

const ResetPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await axios.post("admin/reset-password", payload);
        const { data } = response?.data;

        console.log(data, response?.data);

        return data;
      } catch (error) {
        throw new Error(error?.response?.data?.message ?? error.message);
      }
    },
    onSuccess: () => {
      message.success("Password reset successfully");

      navigate(`/`, {
        replace: true,
      });
    },
    onError: (error) => {
      message.error(error?.message);
    },
  });

  const handleSubmit = () => {
    mutate({
      code: code,
      reference: state?.reference,
      // email: state?.email,
      password: password,
    });
  };

  return (
    <section className=" bg-gray-100 w-full h-screen flex items-center ">
      <div className="w-full max-w-xl m-auto flex flex-col">
        <div className="bg-white p-8 w-full shadow-card rounded-lg">
          <div className="inline-flex flex-col justify-center items-center w-full mb-8">
            <Logo2 height="auto" width="150px" />
            {/* <h2 className="font-sans text-2xl font-bold uppercase text-bills-darkblue"> */}
              {/* PayBills Admin Console
            </h2> */}
            <div className="">
              <h1 className="text-black font-clashGrotesk font-medium text-xl">
               Reset Password
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
              Token code
            </label>
            <input
              type="text"
              name="code"
              className=" mt-2 mb-5 w-full ring-1 focus:ring-1 ring-bills-borderLight focus:ring-offset-bills-borderLight focus:outline-none p-2 rounded"
              required
              onChange={(e) => setCode(e.target.value)}
            />

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm ">
                Password
              </label>

              <div className="inline-flex items-center">
                <input
                  type={`${!showPassword ? "password" : "text"}`}
                  name="password"
                  className=" mt-2 mb-2 w-full ring-1 focus:ring-1 ring-bills-borderLight focus:ring-offset-bills-borderLight focus:outline-none p-2 rounded"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="-ml-8">
                  <button
                    type="button"
                    className="text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

           
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
                "Reset Password"
              )}
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
