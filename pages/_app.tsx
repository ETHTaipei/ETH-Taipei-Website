import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle, ResetStyle } from "@/styles/globalStyle";
import Layout from "@/components/Layout";
import t from "@/public/constant/content";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ResetStyle />
      <GlobalStyle />
      <Head>
        <title>{t.common.ethTaipei}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={t.common.ethTaipeiIntro}
        />
        <meta name="google-site-verification" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="ETH Taipei" />
        <meta
          property="og:description"
          content={t.common.ethTaipeiIntro}
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="ETH Taipei" />
        <meta
          property="twitter:description"
          content={t.common.ethTaipeiIntro}
        />
        <meta property="twitter:image" content="" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
