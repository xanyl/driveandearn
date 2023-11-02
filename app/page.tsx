
import { HomeProps } from "@types";
import {   Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
 

  return (
    <main className='overflow-hidden'>
      <Hero />
    </main>
  );
}
