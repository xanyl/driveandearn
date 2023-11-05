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
      <ShowDetails />
  );
}