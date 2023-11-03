
import "./globals.css";

export const metadata = {
  title: "Drive and Earn",
  description: "Earn While you Ride",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
