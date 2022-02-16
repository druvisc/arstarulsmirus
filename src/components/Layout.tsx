import React from "react";
import Head from "next/head";

import constants from "../constants.json";

const { title } = constants;

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full overflow-hidden max-w-[1920px] mx-auto flex flex-col flex-1 center-items text-sm text-brand lg:text-base">
        <Header />

        <main className="flex flex-col flex-1">
          {/*  */}
          {children}
        </main>

        <Footer title={title} />
      </div>
    </>
  );
};
