import type { NextPage } from "next";

import { HeroSection } from "../components/HeroSection";
import { ConcertSection } from "../components/ConcertSection";
import { SocialSection } from "../components/SocialSection";
import { ContactSection } from "../components/ContactSection";

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ConcertSection />
      <SocialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
