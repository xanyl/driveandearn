import React from "react";

const CheckAmount = ({
  earnedAmount,
  onBackClick,
}: {
  earnedAmount: number;
  onBackClick: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-2/3 w-full flex flex-col">
        <div className="p-4">
          <button
            className="text-gray-600 text-sm block p-2 hover:bg-gray-100 rounded"
            onClick={onBackClick}
          >
            &larr; Back
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <p>Earned Amount: {earnedAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckAmount;
