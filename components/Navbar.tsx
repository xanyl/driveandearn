"use client";
import Link from "next/link";
import ConnectWallet, { userSession } from "./ConnectWallet";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentRoute = usePathname();
  const linkStyle =
    "px-4 py-2 txt-bold rounded-md hover:bg-blue-300 transition duration-300 ease-in-out";
  const activeStyle = linkStyle + " text-black bg-gray-300";
  const nonActiveStyle = linkStyle + " text-black";
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent ">
        <Link href="/">
          {/* <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        /> */}
          
            <span className="text-black text-3xl font-bold mr-2">
              RideToEarn
            </span>
          
        </Link>

        <Link
          href="/"
          className={currentRoute === "/" ? activeStyle : nonActiveStyle}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={currentRoute === "/about" ? activeStyle : nonActiveStyle}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={currentRoute === "/contact" ? activeStyle : nonActiveStyle}
        >
          Contact
        </Link>
        {/* {userSession.isUserSignedIn() ? (
          <Link
            href="/home"
            className={currentRoute === "/home" ? activeStyle : nonActiveStyle}
          >
            Dashboard
          </Link>
        ) : (
          <></>
        )} */}

        <ConnectWallet />
      </nav>
    </header>
  );
};
export default NavBar;
