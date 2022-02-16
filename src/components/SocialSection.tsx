import Link from "next/link";

import { contentLoader } from "../loaders/contentLoader";

import { Animate } from "./Animate";
import { AnimationSequence } from "./AnimationSequence";

import { Facebook } from "./svg/Facebook";
import { Instagram } from "./svg/Instagram";
import { Twitter } from "./svg/Twitter";
import { YouTube } from "./svg/YouTube";

const { facebook, instagram, youtube, twitter } = contentLoader("social");

export const SocialSection = () => {
  return (
    <section className="my-28 lg:my-60">
      <Animate
        as="div"
        animation="animate-fade-in"
        className="text-center tracking-brand"
      >
        Seko man arī:
      </Animate>

      <AnimationSequence
        as="ol"
        animation="animate-fade-in-fast"
        className="mt-6 lg:mt-10 h-[35px] lg:h-[44px] space-x-8 lg:space-x-20 flex justify-center items-center"
        sequence={[
          {
            node: facebook && (
              <Link href={`https://www.facebook.com/${facebook}/`}>
                <a
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              </Link>
            ),
          },
          {
            node: instagram && (
              <Link href={`https://www.instagram.com/${instagram}/`}>
                <a
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </Link>
            ),
          },
          {
            node: youtube && (
              <Link href={`https://www.youtube.com/user/${youtube}`}>
                <a
                  aria-label="youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube />
                </a>
              </Link>
            ),
          },
          {
            node: twitter && (
              <Link href={`https://twitter.com/${twitter}`}>
                <a
                  aria-label="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </Link>
            ),
          },
        ].map((rest) => ({
          as: "li",
          className: "h-[inherit]",
          ...rest,
        }))}
      />
    </section>
  );
};
