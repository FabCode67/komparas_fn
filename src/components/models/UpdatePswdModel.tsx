import React, { useState } from "react";
import Modal from "react-modal";
import { IconContext, Eye, EyeSlash } from "@phosphor-icons/react";
// import { useSession } from "next-auth/react";
// import SuccessfullyUpdated from "./SuccessfullyUpdated";
// import { updatePassword } from "@/app/api/profile/profileCrud";
import SuccessfullyUpdated from "./SussesfulyUpdated";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../api/auth/login";

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: () => void;
}

const UpdatePswdModel: React.FC<ImportModalProps> = ({
  isOpen,
  onClose,
  onImport,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  // const { data: session } = useSession();
  const [isImportSuccessModalOpen, setImportSuccessModalOpen] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [, setLoading] = useState(false);
  const navigate = useNavigate();
  const closeSuccessImportModal = () => {
    setImportSuccessModalOpen(false);
    onClose();
  };


  const openSuccessModel = () => {
    onImport();
    onClose();
  };

  const openImportSuccessModal = () => {
    setImportSuccessModalOpen(true);
  };
  const isSaveButtonDisabled =
    password.length === 0 ||
    confirmPassword.length === 0 ||
    password !== confirmPassword;
   
    const [searchParams] = useSearchParams();
    const resetToken = searchParams.get("resetToken") || "";
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const { password, new_password, confirm_password } = formData;
  //   const updatedData = {
  //     password,
  //     new_password,
  //     confirm_password,
  //   };
    // const response = await updatePassword(updatedData, session);
    // if (response.error) {
    //   toast.error("Old password is not correct", {
    //     theme: "colored",
    //   });
    // } else if (response.message) {
    //   toast.success(response.message, {
    //     theme: "colored",
    //   });
    //   setFormData({
    //     password: "",
    //     new_password: "",
    //     confirm_password: "",
    //   });
    //   openImportSuccessModal();
    // } else {
    //   toast.error("ooops! try agin.", {
    //     theme: "colored",
    //   });
  //   }
  // };
  


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await resetPassword({ resetToken, password, confirmPassword});
    if(res.status===true){
    toast.success(res.message);
    setLoading(false);
          openImportSuccessModal();

    navigate("/login");
    }
    else{
      toast.error(res.message);
      setLoading(false);
    }
  };

  return (
    <>
      {!isImportSuccessModalOpen ? (
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          className="bg-white rounded-lg w-[95%] desktop:w-[50%] laptop:[w-50%] tablet:w-[70%] md:w-[70%] shadow-md p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          overlayClassName="fixed inset-0 bg-black bg-opacity-40 z-50"
        >
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full">
              <div className="flex flex-row justify-between items-center mb-4 bg-blue-100 px-3">
                <h1 className="text-xl py-2">Reset Password Information</h1>
              </div>
              <div className="w-full h-fit flex flex-col space-y-3 ">
                <div className="flex flex-col laptop:w-full desktop:w-full">
                <div className="input-field relative">
                  <label htmlFor="password">New Password</label>
                  <div className="flex justify-center items-center text-center m-auto">
                    <input
                      type={showPassword ? "password" : "text"}
                      name="password"
                      id="password"
                      data-testid="password"
                      placeholder="Enter your password"
                      className="focus:border border-blue-700 bg-grey-200 focus:border-gray-300 rounded-md h-[54px] p-2 pr-10 w-full outline-none"
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
                </div>
                <div className="flex flex-col laptop:w-full desktop:w-full">
                <div className="input-field relative">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="flex justify-center items-center text-center m-auto">
                    <input
                      type={showPassword ? "password" : "text"}
                      name="confirmPassword"
                      id="confirmPassword"
                      data-testid="confirmPassword"
                      placeholder="Enter your confirmPassword"
                      className="focus:border border-blue-700 bg-grey-200 focus:border-gray-300 rounded-md h-[54px] p-2 pr-10 w-full outline-none"
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
                </div>
              </div>

              <div className="canselanduploadbutton flex float-right mx-auto items-end flex-row justify-end w-full mt-5">
                <button
                  className="bg-red-200 text-error px-4 py-2 rounded-md mr-2"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaveButtonDisabled}
                  className={`bg-blue-500 text-white px-4 py-2 rounded-md mr-2 ${
                    isSaveButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </Modal>
      ) : (
        <SuccessfullyUpdated
          isOpen={isImportSuccessModalOpen}
          onClose={closeSuccessImportModal}
          onImport={openSuccessModel}
        />
      )}
    </>
  );
      }

export default UpdatePswdModel;
