import Link from "next/link";
import YouTube from "react-youtube";

import { contentLoader } from "../loaders/contentLoader";

import { Animate } from "./Animate";

import { Spotify } from "./svg/Spotify";

const { youtubeId, spotifyText, spotifyLink, purchaseText, purchaseLink } =
  contentLoader("hero");

export const HeroSection = () => {
  const spotify = !!(spotifyText && spotifyLink);
  const purchase = !!(purchaseText && purchaseLink);

  return (
    <section className="lg:pl-[13%]">
      <YouTube
        videoId={youtubeId}
        containerClassName="youtube-container"
        opts={{
          playerVars: {
            modestbranding: 1, // Doesn't work.
            rel: 0, // Do not display related videos (only same channel).
          },
        }}
      />

      {(spotify || purchase) && (
        <Animate
          as="nav"
          animation="animate-slide-in-left"
          className="my-[50px] tracking-brand"
        >
          <ol className="flex flex-col items-center lg:flex-row">
            {spotify && (
              <li className="lg:flex-1">
                <Link href={spotifyLink}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <div className="w-[19px] lg:w-[44px]">
                      <Spotify />
                    </div>

                    <span className="pl-3 lg:pl-6">{spotifyText}</span>
                  </a>
                </Link>
              </li>
            )}

            <hr className="my-4 w-[295px] h-[2px] bg-brand lg:hidden" />

            {purchase && (
              <li className="lg:flex-1">
                <Link href={purchaseLink}>
                  <a target="_blank" rel="noopener noreferrer">
                    {purchaseText}
                  </a>
                </Link>
              </li>
            )}
          </ol>
        </Animate>
      )}
    </section>
  );
};
