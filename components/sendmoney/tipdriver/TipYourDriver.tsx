import React, { useState } from "react";

import { FaRegMoneyBillAlt } from "react-icons/fa";


const TipYourWallet = () => {
  const [tipAmount, setTipAmount] = useState("");

  const handleTip = () => {
    console.log(`Tipping your driver $${tipAmount}`);
  };

  return (
    <>
      

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Tip Your Driver</h2>
        <p className="text-lg font-bold mb-2">Your current balance: ${}</p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="tipAmount" className="text-sm text-gray-600">
              Tip Amount
            </label>
            <input
              type="text"
              id="tipAmount"
              name="tipAmount"
              value={tipAmount}
              onChange={(e) => setTipAmount(e.target.value)}
              className="border  rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          

          <button
            type="button"
            onClick={handleTip}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Tip Driver
          </button>
        </form>
      </div>
    </>
  );
};

export default TipYourWallet;
