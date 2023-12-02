import React from "react";
import Modal from 'react-modal';
import checked from '../../assets/checked.png'
import { Link } from "react-router-dom";

interface ImportModalProps {
    isOpen: boolean;
    onClose: () => void;
    onImport: () => void;
}

const SuccessfullyUpdated: React.FC<ImportModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white rounded-lg w-[95%] desktop:w-[30%] laptop:[w-30%] tablet:w-[60%] md:w-[60%] shadow-md p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            overlayClassName="fixed inset-0 bg-black bg-opacity-40 z-50"
        >
            <div className="w-full m-auto justify-center text-center items-center">
                <div className="flex flex-row justify-between items-center mb-4  px-3">
                    <h1 className="text-xl"></h1>
                    <h1 className="text-xl">
                        <button
                            className="text-xl"
                            onClick={onClose}
                        >
                            X
                        </button>
                    </h1>
                </div>
                <div className="w-full h-fit flex flex-col space-y-3 m-auto justify-center text-center items-center">
                    <img src={checked} alt="checked" width={100} height={100} />
                </div>

                <h1 className="text-xl mt-12 font-bold">Successfully Updated</h1>
                <p className="text-xl mt-4">Your password has been updated successfully</p>
                <Link className="bg-green-500 text-white px-4 py-2 rounded-md mt-8 w-full" onClick={onClose} to={"/login"}>
                    Continue
                </Link>
            </div>
        </Modal>
    );
};

export default SuccessfullyUpdated;