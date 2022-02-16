import concerts from "../../content/concerts.json";
import hero from "../../content/hero.json";
import social from "../../content/social.json";

type Concerts = {
  image?: string;
  concerts?: {
    title: string;
    subtitle: string;
  }[];
  concertText?: string;
  concertLink?: string;
};

type Hero = {
  youtubeId: string;
  spotifyText?: string;
  spotifyLink?: string;
  purchaseText?: string;
  purchaseLink?: string;
};

type Social = {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
};

export function contentLoader(content: "concerts"): Concerts;
export function contentLoader(content: "hero"): Hero;
export function contentLoader(content: "social"): Social;

export function contentLoader(content: "concerts" | "hero" | "social") {
  switch (content) {
    case "concerts":
      return concerts as Concerts;
    case "hero":
      return hero as Hero;
    case "social":
      return social as Social;
    default:
      throw new Error(`Invalid content selector: "${content}"!`);
  }
}
