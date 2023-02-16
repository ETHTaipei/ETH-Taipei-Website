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
        <meta name="description" content="" />
        <meta
          name="google-site-verification"
          content="Unk2KoVoZ6g0RPknZCXPHBkyvyEbxFtRqAuinBSEt9s"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="ETH Taipei" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="ETH Taipei" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
