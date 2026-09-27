import { About } from "@/components/sections/about";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Figures } from "@/components/sections/figures";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Ticker } from "@/components/sections/ticker";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Figures />
      <Services />
      <Approach />
      <About />
      <Contact />
    </>
  );
}
