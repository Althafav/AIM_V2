// pages/index.js
import Head from "next/head";
import Image from "next/image";

import dynamic from "next/dynamic";

import BannerComponent from "@/components/BannerComponent";
import Globals from "@/modules/Globals";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Aboutpage } from "@/models/aboutpage";
import DownloadCatelogue from "@/components/DownloadCatelogue";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
const ServiceSectionComponent = dynamic(() => import('@/components/ServiceSectionComponent'));
const CtaBannerComponent = dynamic(() => import('@/components/CtaBannerComponent'));
const PreviousWorksComponents = dynamic(() => import('@/components/PreviousWorksComponents'));

import { motion } from "framer-motion"
import { fadeInAnimationVariants } from "@/utils/customAnimation";



export default function Home() {
  const [pageData, setPageData] = useState<Aboutpage | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {


    Globals.KontentClient.item("about_page")
      .toObservable()
      .subscribe((response: any) => {
        setPageData(response.item);
        setIsLoaded(true);


      });

  }, []);

  const truncateText = (text: string, wordLimit: number) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + (text.split(" ").length > wordLimit ? "..." : "");
  }


  if (!pageData) {
    return <SpinnerComponent />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>AIM Congress | 2025</title>
        <meta name="description" content="" />

      </Head>

      <BannerComponent />

     



    </motion.div>
  );
}
