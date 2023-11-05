import { Footer, NavBar } from "@components";
import "./globals.css";

export const metadata = {
  title: "Drive and Earn",
  description: "Earn While you Ride",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NavBar />
      <body>{children}</body>
     <Footer />
    </html>
  );
}
