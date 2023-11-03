"use client";
import { HomeProps } from "@types";
import { Footer, Hero, NavBar } from "@components";

import ConnectWallet from "@components/ConnectWallet";

export default async function Home({ searchParams }: HomeProps) {
  

  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
