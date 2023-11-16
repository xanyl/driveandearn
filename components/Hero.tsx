"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  // const handleScroll = () => {
  //   const nextSection = document.getElementById("discover");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Earn while you ride!</h1>

        <p className="hero__subtitle">
          First blockchain based rewarding system for riders. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Amet odit dignissimos.
        </p>

        <CustomButton
          title="Connect Wallet"
          btnType="button"
          containerStyles="font-bold hover:brightness-200 transition duration-300 ease-in-out m-2 bg-gray-200 border-2 border-gray-700 rounded-full text-xl px-6 py-4 "
          textStyles="text-black"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/heroimage.png" alt="hero" fill className="object-contain" sizes="" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
