import { Footer, NavBar } from "@components";
import "./globals.css";

export const metadata = {
  title: "Drive and Earn",
  description: "Earn While you Ride",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <div className="flex flex-col">
        <NavBar />
        
          <body className="flex-1">{children}</body>
        
        <Footer />
      </div>
    </html>
  );
}
