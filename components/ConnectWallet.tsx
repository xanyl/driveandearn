/**
 * The above code is a React component that handles connecting and disconnecting a wallet using the
 * Stacks Connect library.
 */
"use client";

import React, { useEffect, useState } from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";
import { CustomButton } from "@components";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

function authenticate() {
  showConnect({
    appDetails: {
      name: "Ride To Earn",
      icon: window.location.origin + "/app/favicon.ico",
    },
    redirectTo: "/home",
    onFinish: () => {
      window.location.href = "/home";
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && userSession.isUserSignedIn()) {
    return (
      <div className="Container">
        <CustomButton
          handleClick={disconnect}
          title="Disconnect Wallet"
          btnType="button"
          containerStyles="text-black hover:brightness-200 transition duration-300 ease-in-out m-2 bg-gray-700 border-2 border-white-100 rounded-full text-xl px-6 py-4 "
          textStyles="text-white"
        />
      </div>
    );
  }

  return (
    <CustomButton
      handleClick={authenticate}
      title="Connect Wallet"
      btnType="button"
      containerStyles="text-black hover:brightness-200 transition duration-300 ease-in-out m-2 bg-gray-700 border-2 border-white-100 rounded-full text-xl px-6 py-4 "
      textStyles="text-white"
    />
  );
};

export default ConnectWallet;
