import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import BannerComponent from "@/components/BannerComponent";
import { useInView } from 'react-intersection-observer';
import CtaComponent from "@/components/CtaComponent";
import Services from "@/modules/Services";
import Globals from "@/modules/Globals";
import { useEffect, useState } from "react";
import { Speakers2024 } from "@/models/speakers2024";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
import HomeSpeakerComponentRevamp from "@/components/HomeSpeakersComponentRevamp";
import { Homepage } from "@/models/homepage";


const ThemeSectionComponent = dynamic(() => import("@/components/Home/ThemeSectionComponent"));
const AudientsCTAComponent = dynamic(() => import("@/components/Home/AudientsCTAComponent"));
const PortfolioCTAComponent = dynamic(() => import("@/components/Home/PortfolioCTAComponent"));
const SustainbleSecComponent = dynamic(() => import("@/components/Home/SustainbleSecComponent"));
const TestimonialsComponent = dynamic(() => import("@/components/Home/TestimonialsComponent"));
const ArticlesComponent = dynamic(() => import("@/components/Home/ArticlesComponent"));
const YoutubeSectionComponent = dynamic(() => import("@/components/Home/YoutubeSectionComponent"));
const HomeSpeakersComponent = dynamic(() => import("@/components/HomeSpeakersComponent"));
const HomeSponsorsComponent = dynamic(() => import("@/components/HomeSponsorsComponent"));


export default function Home() {
  const [themeRef, inViewTheme] = useInView({ triggerOnce: true });
  const [audientsRef, inViewAudients] = useInView({ triggerOnce: true });
  const [portfolioRef, inViewPortfolio] = useInView({ triggerOnce: true });
  const [sustainbleRef, inViewSustainble] = useInView({ triggerOnce: true });
  const [testimonialsRef, inViewTestimonials] = useInView({ triggerOnce: true });
  const [articlesRef, inViewArticles] = useInView({ triggerOnce: true });
  const [youtubeRef, inViewYoutube] = useInView({ triggerOnce: true });
  const [ctaBannerRef, inViewCtaBanner] = useInView({ triggerOnce: true });
  const [speakersRef, inViewSpeakers] = useInView({ triggerOnce: true });
  const [sponsorsRef, inViewSponsors] = useInView({ triggerOnce: true });

  const [pageData, setPageData] = useState<Homepage | null>(null);

  useEffect(() => {
    Globals.KontentClient.item("home_page_2025")
      .toObservable()
      .subscribe((response: any) => {
        console.log('API Response:', response);
        setPageData(response.item);
      });
  }, []);

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
        <title>{pageData.pagetitle.value}</title>
        <meta name="title" content={pageData.metatitle.value} />
        <meta name="description" content={pageData.metadescription.value} />
      </Head>

      <BannerComponent pageData={pageData} />

      <div ref={themeRef}>
        {inViewTheme && <ThemeSectionComponent pageData={pageData} />}
      </div>
      <div ref={audientsRef}>
        {inViewAudients && <AudientsCTAComponent pageData={pageData} />}
      </div>
      <div ref={portfolioRef}>
        {inViewPortfolio && <PortfolioCTAComponent pageData={pageData} />}
      </div>
      <div ref={sustainbleRef}>
        {inViewSustainble && <SustainbleSecComponent pageData={pageData} />}
      </div>
      <div ref={testimonialsRef}>
        {inViewTestimonials && <TestimonialsComponent  />}
      </div>
      <div ref={articlesRef}>
        {inViewArticles && <ArticlesComponent />}
      </div>
      {/* <div ref={youtubeRef}>
        {inViewYoutube && <YoutubeSectionComponent />}
      </div> */}
      <div ref={ctaBannerRef}>
        {inViewCtaBanner && <CtaComponent pageData={pageData} />}
      </div>
      <div ref={speakersRef}>
        {inViewSpeakers && <HomeSpeakersComponent />}
        {/* {inViewSpeakers && <HomeSpeakerComponentRevamp />} */}

      </div>

      <div ref={sponsorsRef}>
        {inViewSponsors && <HomeSponsorsComponent />}
      </div>

    </motion.div>
  );
}
