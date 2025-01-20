import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

import Logo2 from "../../assets/Logo2";
import LoginImage from "../../assets/login/poster";

import useValidate from "@hooks/useValidate";
import useLogin from "./hooks/useLogin";

import { ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";
import { Eye, EyeSlash } from "iconsax-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { renderLoading, token, error, isLoading } = useValidate();

  const navigate = useNavigate();

  if (token) <Navigate to="/dashboard" replace />;

  const payload = {
    email,
    password,
    isRemember,
  };

  const { mutate, isPending } = useLogin({
    callback: () =>
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000),
  });

  const handleSubmit = () => {
    // console.log(payload);
    mutate({ payload });
  };

  return (
    <>
      <section className=" bg-gray-100 w-full h-screen flex items-center ">
        <div className="w-full max-w-xl m-auto flex flex-col">
          <div className="bg-white p-8 w-full shadow-card rounded-lg">
            <div className="inline-flex flex-col justify-center items-center w-full mb-8">
              {/* <Logo2 height="50" width="203" /> */}
              <h2 className="font-sans text-2xl font-bold uppercase text-bills-darkblue">
                Pay Bills Admin Console
              </h2>
              <div className="">
                <h1 className="text-black font-clashGrotesk font-medium text-xl">
                  Log in
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
                      {showPassword ? (
                        <EyeSlash size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="inline-flex gap-0.5 my-2">
                <input
                  type="checkbox"
                  name="rememberPassword"
                  onChange={(e) => setIsRemember(e.target.checked)}
                  checked={isRemember}
                />
                <label
                  htmlFor="rememberPassword"
                  className="text-sm text-gray-400"
                >
                  {" "}
                  Remember Password{" "}
                </label>
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
                  "Login"
                )}
              </button>
              <div className="mt-3 inline-flex justify-center w-full">
                {/* <span className="text-sm text-black mx-auto">
                  Forgot Password &nbsp;
                </span> */}
                <Link to={"/"}>
                  <span className="text-sm text-bills-darkblue ">
                    Forgot Password
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden bg-bills-lightblue  w-full"></div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
