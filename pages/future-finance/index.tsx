import React, { useEffect, useState } from 'react'
import { motion, useInView } from "framer-motion";
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';

import AccordionComponent from '@/components/UI/AccordinComponent';

import { Portfoliopage } from '@/models/portfoliopage';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import ParticipateSection from '@/components/Portfolio/future-finance/ParticipateSection';
import { Serviceitem } from '@/models/serviceitem';
import { RiArrowRightDownLine } from 'react-icons/ri';
import Image from 'next/image';
import { Aimstatistics } from '@/models/aimstatistics';
import { Statsitem } from '@/models/statsitem';
import Marquee from 'react-fast-marquee';
import { AboutComponentRevamp } from '@/components/Portfolio/AboutComponentRevamp';
import { FeaturesActivities } from '@/components/Portfolio/FeaturesActivities';
import { KeyAgenda } from '@/components/Portfolio/KeyAgenda';
import SpeakersCarouselComponent from '@/components/Portfolio/SpeakersCarouselComponent';
import Link from 'next/link';
import HomeSponsorsComponent from '@/components/HomeSponsorsComponent';
import JsLoader from '@/modules/JsLoader';
import Services from '@/modules/Services';
import KeyPlayersCarousel from '@/components/Portfolio/future-finance/KeyPlayersCarousel';
import { Buttonitem } from '@/models/buttonitem';


const FutureFinance = () => {

    const [pageData, setPageData] = useState<Portfoliopage | null>(null);
    const [stats, setStats] = useState<Aimstatistics | null>(null)

    useEffect(() => {
        Globals.KontentClient.item("future_finance_portfolio")
            .toObservable()
            .subscribe((response: any) => {

                setPageData(response.item);
            });

        Globals.KontentClient.item("aim_statistics_2024")
            .toObservable()
            .subscribe((response: any) => {

                setStats(response.item);

                Services.loadFile(
                    `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
                    () => {
                        Services.loadFile(
                            `${Globals.BASE_URL}assets/js/singleCarousel.js`
                        );
                        Services.loadFile(
                            `${Globals.BASE_URL}assets/js/speakerCarousel.js`
                        );
                    }
                );

            });
    }, []);

    if (!pageData || !stats) {
        return <SpinnerComponent />;
    }

    const TargetCta = [
        { name: "Become a Delegate", bgColor: "#212121", link: "/future-finance" },
        { name: "Become an Exhibitor", bgColor: "#7440F2", link: "/register-interest/exhibitor" },
        { name: "Become a Partner", bgColor: "#212121", link: "/register-interest" }
    ];





    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='future-finance-page-wrapper'
        >

            <div className=" future-finance-banner" >

                <video className='fdi-banner-bg' width="100%" autoPlay loop playsInline muted controls={false} preload="auto">
                    <source src="https://media.aimcongress.com/documents/future-finance-landing-hero-section.mp4
 " type="video/mp4" width="100%" />
                </video>

                <div className="text-container container">
                    <h1 className='banner-heading'>
                        {pageData.bannerheading.value}
                    </h1>
                    <h2 className='banner-heading-2'>{pageData.bannersubheading.value}</h2>


                    <div className='mt-3 d-flex align-items-lg-center align-items-start gap-3 flex-lg-row flex-column-reverse'>

                        {pageData.bannercta.value.map((m: any, index: number) => {
                            var item: Buttonitem = m;
                            return (

                                <Link href={item.link.value} key={`bannercta-${index}`}>
                                    <button className={`register-interest-cta future-finance`}>{item.name.value}</button>
                                </Link>
                            )
                        })}
                        <p className='date-venue'>{pageData.dateandvenu.value}</p>
                    </div>





                </div>
            </div>
            <AboutComponentRevamp pageData={pageData} />
            <FeaturesActivities pageData={pageData} />

            <ParticipateSection pageData={pageData} />




            <KeyAgenda pageData={pageData} />


            <div className="stats-section-wrapper container">


                <div className="portfolio-speaker-carousel owl-carousel">
                    {stats.items.value.map((m: any, index: number) => {
                        var item: Statsitem = m;
                        return (

                            <div className='stats-card' key={`stats-${index}`}>
                                <img src={item.image.value[0].url} alt={item.name.value} className='stats-image' />
                                <div className="content-wrapper">
                                    <h4 className='count'>{item.count.value}</h4>
                                    <h6 className='name'>{item.name.value}</h6>
                                </div>
                            </div>

                        )
                    })}
                </div>






            </div>

            <div className="target-audients-cta-larger_screen">

                <div className="cta-sub-head-wrapper">
                    <div className="container">
                        <div className="target-cta-cards ">

                            {TargetCta.map((item: any, index: number) => {
                                return (
                                    <div className="target-cta-card" style={{ background: item.bgColor }} key={`target-cta-${index}`}>
                                        <Link href={item.link}>
                                            <div className="target-cta-card">

                                                <h3 className="name">{item.name}</h3>
                                                <div className='d-flex justify-content-end'>

                                                    <RiArrowRightDownLine size={96} color='white' />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>

                        <div>
                            <p className='text-center text-white '>Empowering Financial Journeys: Unlocking Every Possibility!</p>
                        </div>

                    </div>


                </div>
            </div>

            <div className="target-audients-cta-small_screen mt-4">

                <div className="container">
                    <div className="row g-3">

                        {TargetCta.map((item: any, index: number) => {
                            return (
                                <div className="col-md-4 col-12" style={{ background: item.bgColor }} key={`target-cta-${index}`}>
                                    <Link href={item.link}>
                                        <div className="target-cta-card">

                                            <h3 className="name">{item.name}</h3>
                                            <div className='d-flex justify-content-end'>

                                                <RiArrowRightDownLine size={96} color='white' />
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            )
                        })}

                    </div>

                    <div>
                        <p className='text-center text-white '>Empowering Financial Journeys: Unlocking Every Possibility!</p>
                    </div>

                </div>



            </div>
            <section>

                <SpeakersCarouselComponent pageData={pageData} />

            </section>

            <section>

                <KeyPlayersCarousel pageData={pageData} />

            </section>

            <div>
                <HomeSponsorsComponent />
            </div>
            <div className='frequently-asked-questions-wrapper'>



                <AccordionComponent pageData={pageData} />

            </div>
        </motion.div>
    )
}

export default FutureFinance;
