"use client";
import React, { useEffect, useState } from "react";
import { AppConfig, UserSession, authenticate } from "@stacks/connect";
import Image from "next/image";
import MediaGallery from "@components/media/MediaGallery";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

const ShowDetails = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && userSession.isUserSignedIn()) {
    return (
      <div>
        <div className="flex  flex-col justify-center items-center">
          <span className="font-bold">Hi, {userSession.loadUserData().profile.name}</span>
          <p className="font-bold">
            mainnet: {userSession.loadUserData().profile.stxAddress.mainnet}
          </p>
          <p className="font-bold">
            testnet: {userSession.loadUserData().profile.stxAddress.testnet}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-10 text-3xl font-bold">
          <p>How would you like to be entertained?</p>
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
          <MediaGallery />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center text-3xl font-bold items-center align-center">
        <p>Connect your wallet to see your custom dashboard</p>
      </div>
    );
  }
};

export default function page() {
  return (
    // <ShowDetails />

    <div className="mt-24 pt-10 flex justify-center podca">
      <div>
        <ShowDetails />
      </div>
    </div>
  );
}
