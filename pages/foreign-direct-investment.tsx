
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

export default function ForiegnDirectInvestment() {



    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("fdi_portfolio")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />
    }

    const about1 = `Join us at AIM Congress 2025 for our session, Navigating the Future of FDI: Overcoming Challenges, Seizing New Global Opportunities. Foreign Direct Investment transforms due to technological advancements, geopolitical shifts, and evolving economic trends, this session will provide essential insights into key topics like digital economies, green investments, and regional trade agreements.`
    const about2 = `Gain strategies to navigate challenges and seize opportunities in this dynamic landscape. Whether expanding into new markets or aligning with sustainable practices, you'll leave equipped to confidently shape your investment future. Don’t miss this chance to lead in the evolution of FDI!`

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
                                <button className='cta-btn fdi text-white'>Register Now</button>
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
            <ParticipateSection pageData={pageData} />
            <KeyAgenda pageData={pageData} />
            <section className='frequently-asked-questions-wrapper'>
                <AccordionComponent pageData={pageData} />
            </section>
        </motion.div>
    )
}
