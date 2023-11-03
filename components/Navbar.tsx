import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import ConnectWallet from "./ConnectWallet";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent ">
      <Link href="/" className="flex justify-center items-center">
        {/* <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        /> */}
        <div className="flex items-center">
          <span className="text-black text-3xl font-bold mr-2">RideToEarn</span>
        </div>
      </Link>
      
      {/* <CustomButton
        
        title="Connect Wallet"
        btnType="button"
        containerStyles="text-black hover:brightness-200 transition duration-300 ease-in-out m-2 bg-gray-700 border-2 border-white-100 rounded-full text-xl px-6 py-4 "
        textStyles="text-white"
      /> */}
      <ConnectWallet />
    </nav>
  </header>
);

export default NavBar;
