/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { Animate } from "./Animate";
import cx from "classnames";
import { Button } from "./Button";
import { contentLoader } from "../loaders/contentLoader";

const { image, concerts, concertText, concertLink } = contentLoader("concerts");

export const ConcertSection = () => {
  return (
    <section
      id="concert-section"
      className="mt-12 lg:mt-48 flex flex-col items-center lg:flex-row px-[10%]"
    >
      {image && (
        <Animate
          as="div"
          className="lg:flex-1"
          animation="animate-slide-in-left"
        >
          <img src={image} alt="" />
        </Animate>
      )}

      {concerts && (
        <div className="mt-10 lg:mt-0 flex lg:flex-1 flex-col items-center lg:items-start lg:ml-32">
          <ol>
            {concerts.map(({ title, subtitle }, i) => (
              <Animate
                as="li"
                key={title}
                animation="animate-slide-in-right"
                threshold={1}
                className={cx([
                  "flex flex-col items-center lg:items-start",
                  i === 0 ? "" : "mt-8",
                ])}
              >
                <div className="text-4xl lg:text-6xl">{title}</div>
                <div className="lg:text-lg">{subtitle}</div>
              </Animate>
            ))}
          </ol>

          {concertText && concertLink && (
            <Animate
              as="div"
              animation="animate-fade-in"
              threshold={1}
              className="mt-12 lg:mt-16"
            >
              <Link href={concertLink}>
                <a target="_blank" rel="noopener noreferrer">
                  <Button>{concertText}</Button>
                </a>
              </Link>
            </Animate>
          )}
        </div>
      )}
    </section>
  );
};
