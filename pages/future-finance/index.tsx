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
import SpeakersCarouselComponent from '@/components/Portfolio/FDI/SpeakersCarouselComponent';
import Link from 'next/link';
import HomeSponsorsComponent from '@/components/HomeSponsorsComponent';
import JsLoader from '@/modules/JsLoader';


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
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0]?.url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} dateVenu={pageData.dateandvenu.value} registerLink={'/register-interest/future-finance'} portfolioColorName="future-finance" />
            <AboutComponentRevamp pageData={pageData} />
            <FeaturesActivities pageData={pageData} />

            <ParticipateSection pageData={pageData} />




            <KeyAgenda pageData={pageData} />


            <div className="stats-section-wrapper">


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
            <div className='mt-5 '>
                <h2 className='section-heading mb-4'>Key Players</h2>
                <SpeakersCarouselComponent colorCode="#7428F4" />

            </div>

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
