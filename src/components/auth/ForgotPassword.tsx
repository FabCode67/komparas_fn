/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { forgotPassword } from "../../api/auth/login";
import Popup from "./OpenEmail";



const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleCloseIsSuccess = () => {
    setIsSuccess(false);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const res = await forgotPassword({ email });
        if(res.status===true){
            setIsSuccess(true);
            setLoading(false);
            toast.success(res.message);
        }
        else{
            setIsSuccess(false);
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
                  <h1 className="text-2xl font-bold text-black">Forgot Password ?</h1>
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
                <div className="input-field">
                  <button
                    data-testid="login-button"
                    disabled={!email || loading}

                    className={`bg-blue-700 text-white rounded-md p-2 h-[54px] w-full ${!email || loading ? "opacity-50 cursor-not-allowed" : ""}`}

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
                      "Send Email"
                    )}
                  </button>
                  <div className="flex justify-end float-right mt-4">
                    <Link
                      className="text-blue-500 underline" to={"/login"}>
                      Back to login?
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {isSuccess &&(
        <Popup message={""} isSuccess={true} onClose={handleCloseIsSuccess} />
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
