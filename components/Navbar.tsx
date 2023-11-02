import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
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

      <CustomButton
        title='Connect Wallet'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-black min-w-[130px] '
        textStyles='text-white'
      />
    </nav>
  </header>
);

export default NavBar;
