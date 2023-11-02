"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Earn while you ride!
        </h1>

        <p className="hero__subtitle">
          First blockchain based rewarding system for riders. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit dignissimos.
        </p>

        <CustomButton
        title='Connect Wallet'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-black min-w-[130px] '
        textStyles='text-white'
      />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
