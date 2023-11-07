"use client";
import React, { useEffect, useState } from "react";
import { AppConfig, UserSession, authenticate } from "@stacks/connect";
import Image from "next/image";
import MediaGallery from "@components/media/MediaGallery";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

const ShowDetails = () => {
  const [mounted, setMounted] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  useEffect(() => setMounted(true), []);

  const calcTimeSpent = () => {
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return { hours, minutes, seconds };
  };

  if (mounted && userSession.isUserSignedIn()) { 
    console.log(totalSeconds);
    const { hours, minutes, seconds } = calcTimeSpent();
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
            {hours === 0 && minutes === 0
              ? `You spent ${seconds} seconds`
              : hours === 0
              ? `You spent ${minutes} minutes and ${seconds} seconds`
              : `You spent ${hours} hours, ${minutes} minutes, and ${seconds} seconds`}

            {totalSeconds > 0 && totalSeconds < 300 ? (
              <span className="text-red-500">
                You need to be engaged for at least 5 minutes to get rewarded.
              </span>
            ) : null}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {/* <div className=" flex flex-col justify-end bg-gray-100 p-4 rounded-md text-center cursor-pointer hover:bg-gray-200">
            <Image
              src="/music-image.png"
              height={300}
              width={200}
              alt="Music"
              className="w-full rounded-lg"
            />
            <h3 className="mt-2 text-xl font-bold bottom-4 ">Music</h3>
          </div>
          <div className="flex flex-col justify-end bg-gray-100 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-200">
            <Image
              src="/podcast-image.png"
              height={300}
              width={200}
              alt="podcast"
              className="w-full rounded-lg"
            />
            <h3 className="mt-2 text-xl font-bold bottom-4">Podcast</h3>
          </div>
          <div className="flex flex-col justify-end bg-gray-100 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-200">
            <Image
              src="/storie-image.jpg"
              height={300}
              width={200}
              alt="stories"
              className="w-full rounded-lg"
            />
            <h3 className="mt-2 text-xl font-bold bottom-4">Stories</h3>
          </div>
          <div className="flex flex-col justify-end bg-gray-100 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-200">
            <Image
              src="/movies-image.png"
              height={300}
              width={200}
              alt="stories"
              className="w-full rounded-lg"
            />
            <h3 className="mt-2 text-xl font-bold bottom-4">Movies</h3>
          </div> */}
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
