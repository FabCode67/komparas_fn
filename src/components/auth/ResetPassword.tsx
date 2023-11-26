/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import { IconContext, Eye, EyeSlash } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/auth/login";
import { useSearchParams } from "react-router-dom";



const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken") || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await resetPassword({ resetToken, password, confirmPassword});
    if(res.status===true){
    toast.success(res.message);
    setLoading(false);
    navigate("/login");
    }
    else{
      toast.error(res.message);
      setLoading(false);
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
                  <h1 className="text-2xl font-bold text-black">Reset Your Password</h1>
                </div>
                
                <div className="input-field relative">
                  <label htmlFor="password">New Password</label>
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

                <div className="input-field relative">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="flex justify-center items-center text-center m-auto">
                    <input
                      type={showPassword ? "password" : "text"}
                      name="confirmPassword"
                      id="confirmPassword"
                      data-testid="confirmPassword"
                      placeholder="Enter your confirmPassword"
                      className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md h-[54px] p-2 pr-10 w-full outline-none"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                    disabled={!confirmPassword || !password || loading}

                    className={`bg-blue-700 text-white rounded-md p-2 h-[54px] w-full ${!confirmPassword || !password || loading ? "opacity-50 cursor-not-allowed" : ""}`}

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
                      "Reset Password"
                    )}
                  </button>
                  <div className="flex justify-between mt-4">
                    <Link
                      className="text-blue-500 underline" to={"/login"}>
                      Back to login?
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

export default ResetPassword;
