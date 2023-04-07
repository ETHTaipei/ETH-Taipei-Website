import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

declare global {
  interface Window {
    unlockProtocol: any;
  }
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="stylesheet" href="/fonts/fonts.css" /> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(d, s) {
                var js = d.createElement(s),
                  sc = d.getElementsByTagName(s)[0];
                js.src = "https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
                sc.parentNode.insertBefore(js, sc);
              }(document, "script"));`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var unlockProtocolConfig = {
                "locks": {
                  "0x8e4f319702f857585a6d5888f43edfece92f83a6": {
                    "name": "ETHTaipei 2023",
                    "network": 100,
                  },
                  "0x53FaF6285C426920b7d103c5f4a40F7788E1F1FD": {
                    "name": "ETHTaipei 2023",
                    "network": 10,
                  },
                  "0x8fB09430C4D31130Eb3a906c9244dD20f14C1F67": {
                    "name": "ETHTaipei 2023",
                    "network": 137,
                  },
                  "0xc741bf2cdcda007e76027348b39f9fff67ac885a": {
                    "name": "ETHTaipei 2023",
                    "network": 42161,
                  }
                },    
                "title": "ETHTaipei Early Bird",
                "icon": "https://ethtaipei.org/images/logo-transparent.png"           
              }`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
