
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import { fdiBenefits, fdiFAQ } from '@/contants/data';
import { Portfoliofeatures } from '@/models/portfoliofeatures';
import Globals from '@/modules/Globals';
import { Portfoliopage } from '@/models/portfoliopage';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import Image from 'next/image';
import { Serviceitem } from '@/models/serviceitem';
import ParticipateSection from '@/components/Portfolio/future-finance/ParticipateSection';
import { FeaturesActivities } from '@/components/Portfolio/FeaturesActivities';
import { KeyAgenda } from '@/components/Portfolio/KeyAgenda';
import { AboutComponentRevamp } from '@/components/Portfolio/AboutComponentRevamp';
import Link from 'next/link';
import SpeakersCarouselComponent from '@/components/Portfolio/SpeakersCarouselComponent';
import HomeSponsorsComponent from '@/components/HomeSponsorsComponent';
import InvestmentDestinationCarousel from '@/components/Portfolio/FDI/InvestmentDestinationCarousel';
import Services from '@/modules/Services';

export default function ForiegnDirectInvestment() {



    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("fdi_portfolio")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);

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

    if (!pageData) {
        return <SpinnerComponent />
    }

    const about1 = `The Foreign Direct Investment (FDI) Portfolio at AIM Congress 2025 will focus on the theme "Navigating the Future of FDI: Overcoming Challenges, Seizing New Global Opportunities."As FDI undergoes significant transformations driven by technological advancements, geopolitical shifts, and evolving economic landscapes, this portfolio aims to provide valuable insights into digital economies, green investments, and regional trade agreements, which are pivotal for future growth. `
    const about2 = `Through a strategic approach, the FDI Portfolio will empower participants to tackle emerging challenges while seizing new opportunities in global markets. By fostering collaboration and innovation, we will equip stakeholders with the tools needed to thrive and shape the future of investment. `

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='future-finance-page-wrapper'
        >
            <div className="fdi-hero-section-wrapper">
                <div className="container">
                    <img src="/assets/imgs/fdi/fdi-hero-top.png" alt="" />
                    <div className="row g-lg-5 g-3 mt-2">
                        <div className="col-lg-6 ">
                            <h3 className='heading'>Foreign
                                Direct
                                Investment</h3>
                        </div>

                        <div className="col-lg-6 d-flex flex-column gap-2">
                            <h4 className='subheading'>Navigating the Future of Foreign Direct Investment (FDI)</h4>

                            <div>
                                <Link href="/register-interest/fdi">

                                </Link>
                                <button className='cta-btn fdi text-white'>Register your interest</button>
                            </div>
                            <p className='date-venue text-white'>{pageData.dateandvenu.value}</p>
                        </div>
                    </div>

                    <div className="row about-section ">
                        <div className="col-lg-4 mb-2">
                            <p className='description'>{about1}</p>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <p className='description'>{about2}</p>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <h3 className='subheading'>
                                Overcoming Challenges, Seizing New Global Opportunities
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0]?.url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} dateVenu={pageData.dateandvenu.value} registerLink={'/register-interest/fdi'} portfolioColorName="fdi" /> */}
            {/* <AboutComponentRevamp pageData={pageData} /> */}
            <FeaturesActivities pageData={pageData} />

            {/* <KeyAgenda pageData={pageData} /> */}
            <motion.div
                className='key-agenda-section-wrapper'
                style={{
                    backgroundImage: `url(${pageData.keyagendabackgroundimage.value[0]?.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

            >
                <div className="container">
                    <div className="row mt-5 g-lg-5 justify-content-center">
                        <div className="col-lg-4 d-flex justify-content-center flex-column align-items-left">
                            <motion.h2
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className='text-start section-heading text-white fw-normal'>{pageData.keyagendaheading.value}</motion.h2>
                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className='text-left  text-white fw-normal'>Maximizing global investment success through strategic insights, opportunities, and collaboration </motion.p>
                        </div>
                        <div className="col-lg-8">
                            <div className="row g-3">
                                {pageData.keyagendaitems.value.map((m: any, index) => {
                                    var item: Serviceitem = m;
                                    return (
                                        <motion.div
                                            className="col-lg-3 col-md-4 col-6"
                                            key={index}

                                        >
                                            <motion.div className="key-agenda-card" initial={{ y: 100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
                                                viewport={{ once: true, amount: 0.1 }}>
                                                <h4 className="name">{item.name.value}</h4>
                                            </motion.div>
                                        </motion.div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>

            <section className='investmentdestinationCarousel'>
                <InvestmentDestinationCarousel pageData={pageData} />
            </section>

            <section>
                <SpeakersCarouselComponent pageData={pageData} />

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
