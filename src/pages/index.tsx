import type { NextPage } from "next";

import { HeroSection } from "../components/HeroSection";
import { ConcertSection } from "../components/ConcertSection";
import { SocialSection } from "../components/SocialSection";
import { ContactSection } from "../components/ContactSection";
import { Logo } from "../components/svg/Logo";
import { useEffect, useRef } from "react";

const HomePage: NextPage = () => {
  // const anchorRef = useRef<HTMLDivElement>(null);

  // const logoRef = useRef<SVGSVGElement>(null);

  // useEffect(() => {
  //   const anchor = anchorRef.current;
  //   const logo = logoRef.current;

  //   if (!anchor || !logo) return;

  //   const handler = () => {
  //     const scrollTop = window.scrollY;
  //     console.log({ scrollTop });

  //     const offsetTop =
  //       anchor.getBoundingClientRect().top +
  //       (document.scrollingElement || document.documentElement).scrollTop;

  //     // const fixed = logo.classList.contains("a-logo-fixed");

  //     // if (scrollTop > offsetTop) {
  //     //   if (!fixed) logo.classList.add("a-logo-fixed");
  //     // } else {
  //     //   if (fixed) logo.classList.remove("a-logo-fixed");
  //     // }
  //   };

  //   window.addEventListener("scroll", handler);

  //   return () => window.removeEventListener("scroll", handler);
  // });

  return (
    <>
      <HeroSection />

      {/* <div ref={anchorRef}></div> */}

      <ConcertSection />
      <SocialSection />
      <ContactSection />

      {/* <Logo ref={logoRef} className="absolute right-[52px]" /> */}
    </>
  );
};

export default HomePage;
