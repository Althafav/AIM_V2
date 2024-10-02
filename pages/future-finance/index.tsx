import React, { useEffect, useState } from 'react'
import { motion, useInView } from "framer-motion";
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';

import AccordionComponent from '@/components/UI/AccordinComponent';

import { Portfoliopage } from '@/models/portfoliopage';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import ParticipateSection from '@/components/Portfolio/future-finance/ParticipateSection';


const FutureFinance = () => {

    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("future_finance_portfolio")
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
            className='future-finance-page-wrapper'
        >
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} dateVenu={pageData.dateandvenu.value} registerLink={'/register-interest/future-finance'} portfolioColorName="future-finance" />
            <div className="about-section-wrapper" style={{
                backgroundImage: "url('/assets/imgs/future-finance/ff-about-bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

                <div className="container">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}

                        className="row">
                        <div className="col-lg-8">
                            <motion.h2


                                className='heading'>{pageData.aboutheading.value}</motion.h2>
                            <motion.p

                                className='paragraph' dangerouslySetInnerHTML={{ __html: pageData.aboutparagraph.value }} />
                            {/* <div className='mt-4'>
                                <button className='future-finance-cta-btn'>Register Now</button>
                            </div> */}
                        </div>
                    </motion.div>

                </div>

            </div>

            <ParticipateSection />

            <motion.div
                className='key-agenda-section-wrapper'
                style={{
                    backgroundImage: "url('/assets/imgs/future-finance/ff-key-agnda-bg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

            >
                <div className="container">
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-center section-heading text-white fw-normal'>Key Agenda</motion.h2>

                    <div className="row mt-5 g-3 justify-content-center">
                        {[
                            "Fintech & Digital Adoption",
                            "Banking & Payments",
                            "Sustainable Finance & Global Economics",
                            "Risk Management & Regulatory Compliance",
                            "Stock Exchange Market"
                        ].map((agenda, index) => (
                            <motion.div
                                className="col-lg-2 col-md-4 col-6"
                                key={index}

                            >
                                <motion.div className="key-agenda-card" initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
                                    viewport={{ once: true, amount: 0.1 }}>
                                    <h4 className="name">{agenda}</h4>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>



            <section className='frequently-asked-questions-wrapper'>



                <AccordionComponent pageData={pageData} />

            </section>
        </motion.div>
    )
}

export default FutureFinance;
