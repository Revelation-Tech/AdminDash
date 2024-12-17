import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

import Logo2 from "../../assets/Logo2";
import LoginImage from "../../assets/login/poster";

import useValidate from "@hooks/useValidate";
import useLogin from "./hooks/useLogin";

import { ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const { renderLoading, data, error, isError, token } = useValidate();

  const navigate = useNavigate();

  if (renderLoading()) {
    return renderLoading();
  }

  if (token && data && !isError) return <Navigate to="/dashboard" replace />;

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
      <section className=" bg-gray-300 w-full h-screen flex items-center ">
        <div className="max-md:w-full w-3/4 m-auto flex flex-col lg:flex-row">
          <div className="bg-white p-8 w-full ">
            <Logo2 height="68" width="203" />

            <div className="my-6">
              <h1 className="text-bills-darkblue font-semibold text-5xl">
                Login
              </h1>
              <p className="text-bills-lightgrey/80 mt-4 text-sm">
                Welcome Back! Please enter your credentials to access your
                account and continue managing your business effortlessly.
              </p>
            </div>
            {/* Form Container */}
            <div className=" max-lg:w-full w-3/4">
              <label htmlFor="email" className="text-sm mt-4">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className=" mt-2 mb-5 w-full ring-1 focus:ring-1 ring-bills-lightgrey/80 focus:ring-bills-lightgrey focus:outline-none p-2 rounded"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password" className="text-sm ">
                Password
              </label>
              <input
                type="password"
                name="password"
                className=" mt-2 mb-2 w-full ring-1 focus:ring-1 ring-bills-lightgrey/80 focus:ring-bills-lightgrey focus:outline-none p-2 rounded"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

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

              <button
                className="bg-bills-darkblue/85 hover:bg-bills-darkblue text-white p-2 w-full mt-4 rounded "
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
              <div className="mt-3  ">
                <span className="text-sm text-black mx-auto">
                  Forgot Password &nbsp;
                </span>
                <Link to={"/"}>
                  <span className="text-sm text-bills-darkblue underline">
                    Reach out to Admin
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-flex bg-bills-lightblue  w-full"></div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
