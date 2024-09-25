// _app.tsx
import LayoutComponent from "@/components/LayoutComponent";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const currentDomain = window.location.hostname;

    if (currentDomain === "fdi.aimcongress.com") {
      router.replace("/foreign-direct-investment");
    }


    if (currentDomain === "startup.aimcongress.com") {
      router.replace("/startup");
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
