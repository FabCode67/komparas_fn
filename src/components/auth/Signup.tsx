/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import { IconContext, Eye, EyeSlash, UploadSimple } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addUsers } from "../../api/userCrud";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        profile_picture: undefined,
    });

    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { first_name, last_name, email, password, confirm_password } = formData;

    const setFirst_name = (value: string) => {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            first_name: value,
        }));
    };

    const setLast_name = (value: string) => {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            last_name: value,
        }));
    };

    const setEmail = (value: string) => {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            email: value,
        }));
    };

    const setPassword = (value: string) => {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            password: value,
        }));
    };

    const setConfirmPassword = (value: string) => {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            confirm_password: value,
        }));
    };


    
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                profile_picture: file,
            }));

            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImageUrl(null);
        }
    };

    const handleImageUpload = () => {
        const image: HTMLElement | null =
            document.getElementById("profile_picture");
        image?.click();
    };

    const handleRemoveProfilePicture = () => {
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          profile_picture: undefined,
        }));
        setImageUrl(null);
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        setLoading(true);
    
        try {
            const response = await addUsers(formData);
            if (response.user) {
                toast.success(response.message, {
                    position: "top-right",
                    theme: "colored",
                });
                setLoading(false);
                navigate("/login");
                
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                    profile_picture: undefined as any, // Change 'File' to 'undefined'
                });
                setImageUrl(null);
            } else {
                toast.error(response.message, {
                    position: "top-right",
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong", {
                position: "top-right",
                theme: "colored",
            });
        } finally {
            setLoading(false);
        }
    };
    
    
    return (
        <div className="h-screen relative">

            <div className="flex basis-full min-h-screen relative">
                <div className="w-1/2 bg-[url(https://www.virajtechnologies.com/assets/img/ecomm.jpg)] bg-cover bg-no-repeat min-h-full xs:hidden tablet:hidden md:hidden  lg:block laptop:block desktop:block 2xl:block 3xl:block 4xl:block"></div>
                <div className="laptop:basis-[55%] desktop:basis-[55%] basis-[100%] text-grey-900 flex justify-center m-auto">
                    <div className="form w-[80%]">
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
                            <div className="flex flex-col space-y-7 w-full laptop:px-0 px-1 ">
                                <div className="flex justify-center m-auto">
                                    <h1 className="text-2xl font-bold text-black">Sign in</h1>
                                </div>
                                <div className="w-full flex laptop:flex-row desktop:flex-row tablet:flex-row flex-col justify-between laptop:space-x-6 desktop:space-x-6 tablet:space-x-4 space-x-0  items-center">
                                    <div className="laptop:w-1/2 desktop:w-1/2 tablet:w-1/2 w-full flex flex-col space-y-2">
                                        <div className="input-field">
                                            <label htmlFor="first_name">First name</label>
                                            <input
                                                data-testid="first_name"
                                                type="first_name"
                                                name="first_name"
                                                id="first_name"
                                                placeholder="Enter your first_name"
                                                className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md p-2 w-full h-[47px] outline-none"
                                                value={first_name}
                                                onChange={(e) => setFirst_name(e.target.value.trim())}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <label htmlFor="last_name">Last name</label>
                                            <input
                                                data-testid="last_name"
                                                type="last_name"
                                                name="last_name"
                                                id="last_name"
                                                placeholder="Enter your Last Name"
                                                className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md p-2 w-full h-[47px] outline-none"
                                                value={last_name}
                                                onChange={(e) => setLast_name(e.target.value.trim())}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                data-testid="email"
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md p-2 w-full h-[47px] outline-none"
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
                                                    className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md h-[47px] p-2 pr-10 w-full outline-none"
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
                                            <div className="input-field mt-2 relative">
                                                <label htmlFor="confirm_password">Confirm Password</label>
                                                <div className="flex justify-center items-center text-center m-auto">
                                                    <input
                                                        type={showPassword ? "password" : "text"}
                                                        name="confirm_password"
                                                        id="confirm_password"
                                                        data-testid="confirm_password"
                                                        placeholder="Confirm your password"
                                                        className="focus:border border-green-700 bg-grey-200 focus:border-gray-300 rounded-md h-[47px] p-2 pr-10 w-full outline-none"
                                                        value={confirm_password}
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
                                        </div>
                                    </div>

                                    <div className="laptop:w-1/2 desktop:w-1/2 tablet:w-1/2 laptop:mt-0 tablet:mt-0 desktop:mt-0  mt-2 w-full justify-between flex felx-col space-y-4">
                                        <div className="flex flex-col w-full">
                                            <label className="text-sm mb-1 font-normal text-grey-700 ">
                                                Profile Image
                                            </label>
                                            {formData?.profile_picture ? (
                                                <div className="relative w-full h-[250px]">
                                                    <img
                                                        src={imageUrl || ""}
                                                        width={300}
                                                        height={400}
                                                        alt="Selected Profile"
                                                        className="w-full h-full object-fill rounded-lg"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleRemoveProfilePicture}
                                                        className="absolute left-2 bottom-2  hover:text-red-700 bg-red-600 cursor-pointer"
                                                    >
                                                        <div className="p-2 bg-error rounded-full">
                                                            <RiDeleteBin6Line className="text-white text-xl  rounded-full  cursor-pointer" />
                                                        </div>{" "}
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    className="flex flex-col text-center items-center justify-center m-auto w-full h-[250px] bg-grey-200 border-2  border-grey-500 rounded-lg relative hover:cursor-pointer"
                                                    onClick={handleImageUpload}
                                                >
                                                    <input
                                                        type="file"
                                                        accept="image/png, image/jpeg"
                                                        id="profile_picture"
                                                        name="profile_picture"
                                                        onChange={handleImageChange}
                                                        style={{ display: "none" }}
                                                    />
                                                    <div className="absolute flex flex-col gap-5 items-center">
                                                        <UploadSimple
                                                            color="#90A8A2"
                                                            size={22}
                                                        />
                                                        <p className="text-sm text-grey-700">
                                                            Upload Profile
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                            <button type="button" className={`bg-blue-700 text-white space-x-3 rounded-md flex justify-center m-auto items-center p-2 h-[47px] mt-5 w-full ${formData?.profile_picture? 'opacity-50 cursor-not-allowed':''}`} onClick={handleImageUpload}
>
                                            <p>Upload Profile</p>
                                            <UploadSimple color="#90A8A2" size={22} />

                                        </button>
                                        </div>
                                        
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
                                            "Signup"
                                        )}
                                    </button>
                                    <div className="flex justify-between mt-4 mb-8 laptop:mb-0 desktop:mb-0 tablet:mb-0">
                                        <Link
                                            className="text-blue-500 underline" to={""}>
                                            Forgot Password?
                                        </Link>
                                        <Link
                                            className="text-blue-500 underline" to={"/login"}>
                                            Already have account?
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

export default SignupForm;
