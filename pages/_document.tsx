// _document.tsx



import HeaderComponent from "@/components/HeaderComponent";
import Globals from "@/modules/Globals";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" translate="no">
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <HeaderComponent />
        <link rel="preconnect" href="https://deliver.kontent.ai" crossOrigin="anonymous" />
        <Script
          src={`${Globals.BASE_URL}assets/js/bootstrap.bundle.min.js`}
          strategy="afterInteractive"
        />
       
      
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src={`${Globals.BASE_URL}assets/js/jquery-3.5.1.min.js`}
          strategy="beforeInteractive"
        />


      </body>
    </Html>
  );
}
