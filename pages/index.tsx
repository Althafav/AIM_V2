// pages/index.js
import Head from "next/head";

import BannerComponent from "@/components/BannerComponent";

import { motion } from "framer-motion"
import ThemeSectionComponent from "@/components/Home/ThemeSectionComponent";
import AudientsCTAComponent from "@/components/Home/AudientsCTAComponent";
import PortfolioCTAComponent from "@/components/Home/PortfolioCTAComponent";
import SustainbleSecComponent from "@/components/Home/SustainbleSecComponent";
import TestimonialsComponent from "@/components/Home/TestimonialsComponent";
import ArticlesComponent from "@/components/Home/ArticlesComponent";
import CtaBannerComponent from "@/components/CTABannerComponent";
import YoutubeSectionComponent from "@/components/Home/YoutubeSectionComponent";



export default function Home() {

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

      <ThemeSectionComponent />
      <AudientsCTAComponent />
      <PortfolioCTAComponent />
      <SustainbleSecComponent />

      <TestimonialsComponent />
      <ArticlesComponent />
      <YoutubeSectionComponent/>
      <CtaBannerComponent/>


    </motion.div>
  );
}
