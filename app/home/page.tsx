"use client";
import React, { useEffect, useState } from "react";
import { AppConfig, UserSession, authenticate } from "@stacks/connect";


const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });


const ShowDetails = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
  
    if (mounted && userSession.isUserSignedIn()) {
      return (
        <div className="Container">
          <p>mainnet: {userSession.loadUserData().profile.stxAddress.mainnet}</p>
          <p>testnet: {userSession.loadUserData().profile.stxAddress.testnet}</p>
        </div>
      );
    }
    else{
        return(
        <div>
          <p>Connect your wallet to see your STX addresses</p>
        </div>
      )
    }
  };

  export default function page() {
   
 

  return (
      // <ShowDetails />


    <div>
     Hello
      {/* <div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="option-card bg-gray-100 p-4 rounded-md text-center cursor-pointer hover:bg-gray-200">
          <img src="/music-image.jpg" alt="Music" className="w-full rounded-md" />
          <h3 className="mt-2">Music</h3>
        </div>
        <div className="option-card bg-gray-100 p-4 rounded-md text-center cursor-pointer hover:bg-gray-200">
          <img src="/podcast-image.jpg" alt="Podcast" className="w-full rounded-md" />
          <h3 className="mt-2">Podcast</h3>
        </div>
        <div className="option-card bg-gray-100 p-4 rounded-md text-center cursor-pointer hover:bg-gray-200">
          <img src="/stories-image.jpg" alt="Stories" className="w-full rounded-md" />
          <h3 className="mt-2">Stories</h3>
        </div>
        <div className="option-card bg-gray-100 p-4 rounded-md text-center cursor-pointer hover:bg-gray-200">
          <img src="/movies-image.jpg" alt="Movies" className="w-full rounded-md" />
          <h3 className="mt-2">Movies</h3>
        </div>
      </div>
      </div> */}
      
    </div>
  );
};


