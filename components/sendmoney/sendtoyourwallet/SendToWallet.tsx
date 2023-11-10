import React, { useState } from "react";



interface SendToWalletProps {
  earnedAmount: number;
}

const SendToWallet: React.FC<SendToWalletProps> = ({ earnedAmount }) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const handleSend = () => {
    // Add logic to handle sending the amount to the provided address
    console.log(`Sending ${amount} to ${address}`);
  };

  return (
    <>
     

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Send to Your Wallet</h2>
        <p className="text-lg font-bold mb-2">Your current balance: ${earnedAmount}</p>
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
