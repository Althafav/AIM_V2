// pages/index.js
import Head from "next/head";

import BannerComponent from "@/components/BannerComponent";

import { motion } from "framer-motion"



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

     



    </motion.div>
  );
}
