"use client";
import React, { useEffect, useState } from "react";
import { AppConfig, UserSession } from "@stacks/connect";

import MediaGallery from "@components/media/MediaGallery";
import toast, { Toaster } from "react-hot-toast";
import CheckAmount from "@components/CheckAmount";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

const ShowDetails = () => {
  const [mounted, setMounted] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [showCheckAmount, setShowCheckAmount] = useState(false);
  useEffect(() => setMounted(true), []);

  const calcTimeSpent = () => {
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return { hours, minutes, seconds };
  };

  if (mounted && userSession.isUserSignedIn()) {
    const { hours, minutes, seconds } = calcTimeSpent();

    //Toast Messages
    toast.error(
      "You need to be engaged for at least 5 minutes to get rewarded."
    );
    const timeSpentMessage =
      hours === 0 && minutes === 0
        ? `You spent ${seconds} seconds`
        : hours === 0
        ? `You spent ${minutes} minutes and ${seconds} seconds`
        : `You spent ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    toast(timeSpentMessage);
    const earnedAmount = Math.floor(totalSeconds / 1);
    const handleCheckHere = () => {
      console.log(`Checked rewards for earning $${earnedAmount}`);
      setShowCheckAmount(true);
    };
    const handleBackClick = () => {
      setShowCheckAmount(false);
    };

    return (
      <div>
        <div className="flex  flex-col justify-center items-center">
          <span className="font-bold">
            Hi, {userSession.loadUserData().profile.name}
          </span>
          <p className="font-bold">
            mainnet: {userSession.loadUserData().profile.stxAddress.mainnet}
          </p>
          <p className="font-bold">
            testnet: {userSession.loadUserData().profile.stxAddress.testnet}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-10 text-3xl font-bold">
          <p>How would you like to be entertained?</p>
          <span className="text-xl font-bold flex flex-col items-center gap-1 mt-4">
            {totalSeconds > 0 && totalSeconds < 1 ? (
              <Toaster position="bottom-right" reverseOrder={false} />
            ) : earnedAmount > 0 ? (
              <div className="flex flex-col">
                <p className="text-green-600">You earned ${earnedAmount}.</p>
                <button
                  onClick={handleCheckHere}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
                >
                  Check Here
                </button>
              </div>
            ) : null}
          </span>
          {showCheckAmount && (
            <CheckAmount
              earnedAmount={earnedAmount}
              onBackClick={handleBackClick}
            />
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <MediaGallery
            totalSeconds={totalSeconds}
            setTotalSeconds={setTotalSeconds}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex text-3xl font-bold flex-row">
        <p>Connect your wallet to see your custom dashboard</p>
      </div>
    );
  }
};

export default function page() {
  return (
    // <ShowDetails />

    <div className="mt-24 pt-10 flex justify-center min-h-screen">
      <div>
        <ShowDetails />
      </div>
    </div>
  );
}
