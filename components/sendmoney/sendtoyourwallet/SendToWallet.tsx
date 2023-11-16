import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEarnedAmount, updateTotalSecond } from "../../../redux/earnedAmountSlice";


const SendToWallet = () => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const earnedAmount = useSelector((state: any) => state.earnedAmount.value);

  const handleSend = () => {
    // console.log('handleSend called');
    const amountToSend = parseFloat(amount);
    // Validate the amount and address, then proceed with the sending logic
    if (!isNaN(amountToSend) && amountToSend <= earnedAmount) {
      // console.log(earnedAmount, amountToSend);
      const newAmount = earnedAmount - amountToSend;
      // Add logic to handle sending the amount to the provided address
      console.log(`Sending ${amountToSend} to ${address}`);
      // console.log(newAmount)

      // console.log("Before dispatch:", earnedAmount);
      dispatch(setEarnedAmount(newAmount));
      dispatch(updateTotalSecond(newAmount));
      // console.log("After dispatch:", earnedAmount);
    } else {
      // Handle validation errors or display a message to the user
      console.error("Invalid amount or address");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Send to Your Wallet</h2>
        <p className="text-lg font-bold mb-2">
          Your current balance: ${earnedAmount}
        </p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-sm text-gray-600">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm text-gray-600">
              Address
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

          <button
            type="button"
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default SendToWallet;
