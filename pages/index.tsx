import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import BannerComponent from "@/components/BannerComponent";

const ThemeSectionComponent = dynamic(() => import("@/components/Home/ThemeSectionComponent"));
const AudientsCTAComponent = dynamic(() => import("@/components/Home/AudientsCTAComponent"));
const PortfolioCTAComponent = dynamic(() => import("@/components/Home/PortfolioCTAComponent"));
const SustainbleSecComponent = dynamic(() => import("@/components/Home/SustainbleSecComponent"));
const TestimonialsComponent = dynamic(() => import("@/components/Home/TestimonialsComponent"));
const ArticlesComponent = dynamic(() => import("@/components/Home/ArticlesComponent"));
const YoutubeSectionComponent = dynamic(() => import("@/components/Home/YoutubeSectionComponent"));
const CtaBannerComponent = dynamic(() => import("@/components/CTABannerComponent"));

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
      <YoutubeSectionComponent />
      <CtaBannerComponent />
    </motion.div>
  );
}
