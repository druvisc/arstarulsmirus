import { scrollTo } from "../utils";

import { Animate } from "./Animate";

import { TextLogo } from "./svg/TextLogo";

const CONCERT_SECTION = "concert-section";

export const Header = () => {
  return (
    <Animate
      as="header"
      animation="animate-slide-in-right"
      className="relative h-[90px] lg:h-[180px] flex justify-end items-center"
    >
      <Nav />

      <div className="z-[-1] absolute w-full flex justify-center">
        <div className="h-[35px] lg:h-[62px]">
          <TextLogo />
        </div>
      </div>
    </Animate>
  );
};

const Nav = () => {
  return (
    <nav className="hidden tracking-brand lg:block">
      <ol className="flex justify-end mr-[70px]">
        <li className="cursor-pointer">
          <a
            href={`#${CONCERT_SECTION}`}
            onClick={(e) => {
              e.preventDefault();

              scrollTo(CONCERT_SECTION);
            }}
          >
            Koncerti
          </a>
        </li>
      </ol>
    </nav>
  );
};
