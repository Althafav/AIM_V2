// _app.tsx
import LayoutComponent from "@/components/LayoutComponent";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const currentDomain = window.location.href;

    if (currentDomain === "https://fdi.aimcongress.com/") {
      router.replace("/foreign-direct-investment");
    }

    if (currentDomain === "https://trade.aimcongress.com/") {
      router.replace("/global-trade");
    }

    if (currentDomain === "https://manufacturing.aimcongress.com/") {
      router.replace("/global-manufacturing");
    }

    if (currentDomain === "https://futurecities.aimcongress.com/") {
      router.replace("/future-cities");
    }

    if (currentDomain === "https://digitaleconomy.aimcongress.com/") {
      router.replace("/digital-economy");
    }

    if (currentDomain === "https://futurefinance.aimcongress.com/") {
      router.replace("/future-finance");
      
    }

    if (currentDomain === "https://startup.aimcongress.com/") {
      router.replace("/startup");
    }

    if (currentDomain === "https://entrepreneurs.aimcongress.com/") {
      router.replace("/entrepreneurs");
    }

 

  }, [router]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}