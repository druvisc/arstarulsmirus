import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import theme from "../../theme";

import { FormsHelper } from "../components/FormsHelper";

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="/assets/fonts/GT-Eesti-Text-Regular.woff"
            as="font"
            rel="preload"
            // Necessary to avoid fetching the font twice.
            crossOrigin=""
          />

          <link rel="preconnect" href="https://www.youtube.com" />

          <meta name="theme-color" content={theme.colors.brand} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <FormsHelper />
      </Html>
    );
  }
}

export default Document;
