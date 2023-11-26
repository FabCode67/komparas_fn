/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import { IconContext, Eye, EyeSlash } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { login } from "../../api/auth/login";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(">>>>>>>>>>>>>>>>>>>1111111111111111111111>>>>>>>>>>>>>>>>>>>>>>>", email, password);
  
    try {
      const res = await login({ email, password });
      if(res.status===true){
      localStorage.setItem("KomparasLoginsInfo", JSON.stringify(res.user));
      toast.success("Login successful");
      setLoading(false);
      navigate("/");
      }

      else{
        toast.error(res.message);
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  
  return (
    <div className="h-screen relative">

      <div className="flex basis-full min-h-screen relative">
        <div className="w-1/2 bg-[url(https://www.virajtechnologies.com/assets/img/ecomm.jpg)] bg-cover bg-no-repeat min-h-full xs:hidden tablet:hidden md:hidden  lg:block laptop:block desktop:block 2xl:block 3xl:block 4xl:block"></div>
        <div className="laptop:basis-[55%] desktop:basis-[55%] basis-[100%] text-grey-900 flex justify-center m-auto">
          <div className="form">
            <form
              className="felx flex-col space-y-10"
              data-testid="login-form"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-center m-auto">
                <Link to={"/"}>
                  <p className="t text-3xl font-bold">KOMPARAS</p>
                </Link>
              </div>
              <div className="flex flex-col space-y-7 w-[400px] laptop:px-0 px-8 ">
                <div className="flex justify-center m-auto">
                  <h1 className="text-2xl font-bold text-black">Log in</h1>
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    data-testid="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md p-2 w-full h-[54px] outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                  />
                </div>
                <div className="input-field relative">
                  <label htmlFor="password">Password</label>
                  <div className="flex justify-center items-center text-center m-auto">
                    <input
                      type={showPassword ? "password" : "text"}
                      name="password"
                      id="password"
                      data-testid="password"
                      placeholder="Enter your password"
                      className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md h-[54px] p-2 pr-10 w-full outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <IconContext.Provider
                      value={{ color: "gray", size: "1.5em" }}
                    >
                      <div
                        className="eye-icon absolute right-0 flex items-center pr-3 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                        data-testid="eye-icon"
                      >
                        {showPassword ? <Eye /> : <EyeSlash />}
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>

                <div className="input-field">
                  <button
                    data-testid="login-button"
                    disabled={!email || !password || loading}

                    className={`bg-blue-700 text-white rounded-md p-2 h-[54px] w-full ${!email || !password || loading ? "opacity-50 cursor-not-allowed" : ""}`}

                    type="submit"
                  >
                    {loading ? (
                      <ClipLoader
                        data-testid="spinner"
                        size={18}
                        color={"#ffffff"}
                        loading={loading}
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                  <div className="flex justify-between mt-4">
                    <Link
                      className="text-blue-500 underline" to={"/forgot_password"}>
                      Forgot Password?
                    </Link>
                    <Link
                      className="text-blue-500 underline" to={"/signup"}>
                      Don't have account?
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
