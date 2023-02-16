import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle, ResetStyle } from "@/styles/globalStyle";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ResetStyle />
      <GlobalStyle />
      <Head>
        <title>ETH Taipei</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="ETHTaipei is about bringing builders of the Ethereum ecosystem together. Depth first & developer focused, it aims to provide a place to facilitate discussion on technical subjects so that we all learn and make progress in the space to build a better future."
        />
        <meta name="google-site-verification" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="ETH Taipei" />
        <meta
          property="og:description"
          content="ETHTaipei is about bringing builders of the Ethereum ecosystem together. Depth first & developer focused, it aims to provide a place to facilitate discussion on technical subjects so that we all learn and make progress in the space to build a better future."
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="ETH Taipei" />
        <meta
          property="twitter:description"
          content="ETHTaipei is about bringing builders of the Ethereum ecosystem together. Depth first & developer focused, it aims to provide a place to facilitate discussion on technical subjects so that we all learn and make progress in the space to build a better future."
        />
        <meta property="twitter:image" content="" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
