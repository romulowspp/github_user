import { useState } from "react";

interface BioModalProps {
  bio: string;
  onClose: () => void;
}

const BioModal: React.FC<BioModalProps> = ({ bio, onClose }) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">{bio}</div>
            <div className="flex items-center justify-end border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-0 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => onClose()}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioModal;
