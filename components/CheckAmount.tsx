import React, { useState } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import SendToWallet from "./sendmoney/sendtoyourwallet/SendToWallet";
import TipYourWallet from "./sendmoney/tipdriver/TipYourDriver";

const CheckAmount = ({
  earnedAmount,
  onBackClick,
}: {
  earnedAmount: number;
  onBackClick: () => void;
}) => {
  const [showSendToWallet, setShowSendToWallet] = useState(true);

  const handleSendToWallet = () => {
    setShowSendToWallet(true);
    console.log("Send to Your Wallet clicked");
  };

  const handleTipDriver = () => {
    setShowSendToWallet(false);
    console.log("Tip Driver clicked");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-2/3 w-full flex flex-col">
        <div className="w-full flex flex-row">
          <div className="p-4">
            <button
              className="text-gray-600 text-sm block p-2 hover:bg-gray-100 rounded"
              onClick={onBackClick}
            >
              &larr; Back
            </button>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4 px-4">
            <p className="text-xl text-green-600 flex items-center gap-2 ">
              <FaRegMoneyBillAlt /> {earnedAmount}
            </p>
            <div className="flex flex-row gap-4">
              {showSendToWallet ? (
                <button
                  onClick={handleTipDriver}
                  className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-4 rounded-lg"
                >
                  Tip Driver
                </button>
              ) : (
                <button
                  onClick={handleSendToWallet}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-xl rounded-lg"
                >
                  Send to Your Wallet
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-row justify-center items-center m-10">
          {showSendToWallet ? <SendToWallet /> : <TipYourWallet/>}
        </div>
      </div>
    </div>
  );
};

export default CheckAmount;
