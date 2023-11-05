"use client";
import { HomeProps } from "@types";
import { Footer, Hero, NavBar } from "@components";
import { userSession } from "@components/ConnectWallet";

export default async function Home({ searchParams }: HomeProps) {
  // const isUserSignedIn = userSession.isUserSignedIn();
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
