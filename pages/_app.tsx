import type { AppProps } from "next/app";
import Head from "next/head";

import MainLayout from "@/components/Layout";
import t from "@/public/constant/content";
import { GlobalStyle, ResetStyle } from "@/styles/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as any).getLayout ||
    ((page: React.ReactNode) => <MainLayout>{page}</MainLayout>);
  const Layout = getLayout(<Component {...pageProps} />);

  return (
    <div>
      <ResetStyle />
      <GlobalStyle />
      <Head>
        <title>{t.common.ethTaipei}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={t.common.ethTaipeiIntro} />
        <meta name="google-site-verification" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ethtaipei.org" />
        <meta property="og:title" content="ETH Taipei" />
        <meta property="og:description" content={t.common.ethTaipeiIntro} />
        <meta
          property="og:image"
          content="https://ethtaipei.org/images/ethtaipei-meta-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ethtaipei.org" />
        <meta property="twitter:title" content="ETH Taipei" />
        <meta
          property="twitter:description"
          content={t.common.ethTaipeiIntro}
        />
        <meta
          property="twitter:image"
          content="https://ethtaipei.org/images/ethtaipei-meta-image.jpg"
        />
      </Head>
      {Layout}
    </div>
  );
}
