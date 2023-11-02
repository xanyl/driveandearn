import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Drive and Earn",
  description: "Earn While you Ride",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
