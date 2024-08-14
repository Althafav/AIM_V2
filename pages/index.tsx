import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import BannerComponent from "@/components/BannerComponent";
import { useInView } from 'react-intersection-observer';

const ThemeSectionComponent = dynamic(() => import("@/components/Home/ThemeSectionComponent"));
const AudientsCTAComponent = dynamic(() => import("@/components/Home/AudientsCTAComponent"));
const PortfolioCTAComponent = dynamic(() => import("@/components/Home/PortfolioCTAComponent"));
const SustainbleSecComponent = dynamic(() => import("@/components/Home/SustainbleSecComponent"));
const TestimonialsComponent = dynamic(() => import("@/components/Home/TestimonialsComponent"));
const ArticlesComponent = dynamic(() => import("@/components/Home/ArticlesComponent"));
const YoutubeSectionComponent = dynamic(() => import("@/components/Home/YoutubeSectionComponent"));


export default function Home() {
  const [themeRef, inViewTheme] = useInView({ triggerOnce: true });
  const [audientsRef, inViewAudients] = useInView({ triggerOnce: true });
  const [portfolioRef, inViewPortfolio] = useInView({ triggerOnce: true });
  const [sustainbleRef, inViewSustainble] = useInView({ triggerOnce: true });
  const [testimonialsRef, inViewTestimonials] = useInView({ triggerOnce: true });
  const [articlesRef, inViewArticles] = useInView({ triggerOnce: true });
  const [youtubeRef, inViewYoutube] = useInView({ triggerOnce: true });
  const [ctaBannerRef, inViewCtaBanner] = useInView({ triggerOnce: true });

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

      <div ref={themeRef}>
        {inViewTheme && <ThemeSectionComponent />}
      </div>
      <div ref={audientsRef}>
        {inViewAudients && <AudientsCTAComponent />}
      </div>
      <div ref={portfolioRef}>
        {inViewPortfolio && <PortfolioCTAComponent />}
      </div>
      <div ref={sustainbleRef}>
        {inViewSustainble && <SustainbleSecComponent />}
      </div>
      <div ref={testimonialsRef}>
        {inViewTestimonials && <TestimonialsComponent />}
      </div>
      <div ref={articlesRef}>
        {inViewArticles && <ArticlesComponent />}
      </div>
      <div ref={youtubeRef}>
        {inViewYoutube && <YoutubeSectionComponent />}
      </div>
     
    </motion.div>
  );
}
