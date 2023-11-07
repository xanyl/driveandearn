import Link from "next/link";

const Footer = () => (
  
    <div className=" w-[100%] flex justify-between items-center flex-wrap relative sm:px-16 px-6 py-10">
      <p>@2023 Drive And Earn. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  
);

export default Footer;
