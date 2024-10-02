import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import { fdiFAQ } from '@/contants/data';
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
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className='heading'>{pageData.aboutheading.value}</h2>
                            <p className='paragraph' dangerouslySetInnerHTML={{ __html: pageData.aboutparagraph.value }} />
                            <div className='mt-4'>
                                <button className='future-finance-cta-btn'>Register Now</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <ParticipateSection />

            <div className='key-agenda-section-wrapper' style={{
                backgroundImage: "url('/assets/imgs/future-finance/ff-key-agnda-bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="container">
                    <h2 className='text-center section-heading text-white fw-normal'>Key Agenda</h2>
                   

                    <div className="row mt-5 g-3 justify-content-center">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="key-agenda-card">
                                <h4 className="name">
                                    Fintech & Digital Adoption
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="key-agenda-card">
                                <h4 className="name">
                                    Banking
                                    &
                                    Payments
                                </h4>
                            </div>
                        </div>


                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="key-agenda-card">
                                <h4 className="name">
                                    Sustainable
                                    Finance &
                                    Global
                                    Economics
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="key-agenda-card">
                                <h4 className="name">
                                    Risk
                                    Management
                                    & Regulatory
                                    Compliance
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="key-agenda-card">
                                <h4 className="name">
                                    Stock
                                    Exchange
                                    Market
                                </h4>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



            <section className='frequently-asked-questions-wrapper'>



                <AccordionComponent pageData={pageData} />

            </section>
        </motion.div>
    )
}

export default FutureFinance;
