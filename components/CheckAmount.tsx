import React from "react";

const CheckAmount = ({
  earnedAmount,
  onBackClick,
}: {
  earnedAmount: number;
  onBackClick: () => void;
}) => {
  const handleSendToWallet = () => {
    // Logic to handle 'Send to Your Wallet' button click
    // For example, show the 'SendToWallet' component
    console.log("Send to Your Wallet clicked");
  };

  const handleTipDriver = () => {
    // Logic to handle 'Tip Driver' button click
    // For example, show the 'TipDriver' component
    console.log("Tip Driver clicked");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-2/3 w-full flex flex-row">
       
       
        <div className="w-full flex flex-row"> 
          <div className="p-4">
            <button
              className="text-gray-600 text-sm block p-2 hover:bg-gray-100 rounded"
              onClick={onBackClick}
            >
              &larr; Back
            </button>
          </div>

          <div className="flex-1 flex justify-evenly items-center gap-4 px-4">
            <div className="flex flex-row gap-4">
              <button
                onClick={handleSendToWallet}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 text-xl rounded-lg"
              >
                Send to Your Wallet
              </button>
              <button
                onClick={handleTipDriver}
                className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-4 rounded-lg"
              >
                Tip Driver
              </button>
            </div>
            <p className="text-xl text-green-600 ">Balance ${earnedAmount}</p>
          </div>
        </div>


        {/* <div className="flex-1 flex flex-row justify-center items-center">Hello</div> */}
      </div>

      {/* {false ? <SendToWallet /> : <TipDriver />} */}
    </div>
  );
};

export default CheckAmount;
