import React, { useState } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setEarnedAmount, updateTotalSecond } from "@redux/earnedAmountSlice";
interface CheckAmountProps {
  onBackClick: () => void;
  onResetMediaGallery: () => void;
}

const CheckAmount: React.FC<CheckAmountProps> = ({
  onBackClick,
  onResetMediaGallery,
}) => {
  const reduxEarnedAmount = useSelector(
    (state: any) => state.earnedAmount.value
  );

  const [tipAmount, setTipAmount] = useState("");
  const [sendToWallet, setSendToWallet] = useState(0);
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const earnedAmount = useSelector((state: any) => state.earnedAmount.value);

  const handleSend = () => {
    // console.log('handleSend called');
    const amountToSend = parseFloat(tipAmount);
    // Validate the amount and address, then proceed with the sending logic
    if (!isNaN(amountToSend) && amountToSend <= earnedAmount) {
      // console.log(earnedAmount, amountToSend);
      // const newAmount = earnedAmount - amountToSend;
      // Add logic to handle sending the amount to the provided address
      console.log(`Sending ${amountToSend} to ${address}`);
      // console.log(newAmount)

      // console.log("Before dispatch:", earnedAmount);
      dispatch(setEarnedAmount(0));
      dispatch(updateTotalSecond(0));
      onResetMediaGallery();

      // console.log("After dispatch:", earnedAmount);
    } else {
      // Handle validation errors or display a message to the user
      console.error("Invalid amount or address");
    }
  };
  const handleChangeAmount = (e: any) => {
    setTipAmount(e.target.value);
    if (e.target.value <= earnedAmount) {
      setSendToWallet(earnedAmount - e.target.value);
    } else {
      console.log("Invalid Amount");
    }
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
              <FaRegMoneyBillAlt /> {reduxEarnedAmount}
            </p>
            <div className="flex flex-row gap-4">
              {/* {showSendToWallet ? (
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
                  Send to Your Wallet Account
                </button>
              )} */}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-row justify-center items-center m-10">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Send Money</h2>
            <p className="text-lg font-bold mb-2">
              Your current balance: ${earnedAmount}
            </p>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="amount" className="text-sm text-gray-600">
                  Tip Amount
                </label>
                <input
                  type="text"
                  id="tipAmount"
                  name="tipAmount"
                  value={tipAmount}
                  onChange={handleChangeAmount}
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="text-sm text-gray-600">
                  Driver Wallet Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="remainingBalance"
                  className="text-sm text-gray-600"
                >
                  Send To your Wallet
                </label>
                <input
                  type="text"
                  id="sendToWallet"
                  name="sendToWallet"
                  value={sendToWallet}
                  readOnly
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <button
                type="button"
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAmount;
