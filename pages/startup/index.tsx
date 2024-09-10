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
import { startupFeaturesAndActivities } from '@/contants/startupData';
import BenefitsComponent from '@/components/Portfolio/BenefitsComponent';
import { Serviceitem } from '@/models/serviceitem';
import Link from 'next/link';
const StartUp = () => {
    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("startup_portfolio")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);



    if (!pageData) {
        return <SpinnerComponent />;
    }

    const descriptionFeaturesActivities = "AIM Startup, a pivotal aspect of AIM Congress, offers essential tools and funding to empower digital entrepreneurs and overcome resource limitations. With UAE's ambition to be a global tech hub by 2025, startups have emerged as key players, with investments surpassing $2.9 billion last year. These ventures are at the forefront of innovations in AI, blockchain, and renewable energy, driving industry transformation and drawing considerable investment. They also accelerate digital adoption."

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} registerLink={'/register-interest/startup'} portfolioColorName="startup" />

            <AboutComponent aboutHeading={pageData.aboutheading.value} aboutParagraph={pageData.aboutparagraph.value} />

            <section className='features-activities-wrapper'>
                <div className="section-container">
                    <div className='row g-0'>
                        <div className="col-12">
                            <h2 className='section-heading'>Features & Activities</h2>
                            <p className='text-lg-center'>Dynamic features and activities fueling startup evolution and success.</p>
                        </div>

                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6 mb-lg-0 mb-3">
                            <div className="row g-3">
                                {/* {startupFeaturesAndActivities.map((item: any, index: number) => {
                                    return (
                                        <div className="col-md-4 col-6 " key={`features-${index}`}

                                        >
                                            <div className="startup-feature-activities-card">
                                                <p className='item-name'>{item.name}</p>
                                            </div>
                                        </div>
                                    )
                                })} */}

                                {pageData.features.value.map((m: any, index: number) => {

                                    var item: Serviceitem = m;

                                    return (
                                        <div className="col-md-4 col-6 " key={`features-${index}`}

                                        >
                                            <div className="startup-feature-activities-card">
                                                <img src={item.image.value[0].url} alt="" />
                                                <p className='item-name'>{item.name.value}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12 ">
                                    <div className='youtube-section'>

                                        <video autoPlay loop muted controls={false} preload="auto">
                                            <source src='https://d2g6bqkf4g3jqe.cloudfront.net/videos/startup-bg.mp4' />
                                        </video>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className='details-features-activities'>
                                        <h3 className='section-heading'>Conferences</h3>
                                        <p>{descriptionFeaturesActivities}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='pitch-section-wrapper'>
                <img src="/assets/imgs/Startup stage.png" alt="" className='pitch-section-bg' />
                <div className="section-container ">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='pitch-heading'>Pitch Your <br />
                                Next Big Thing</h2>
                            <h2 className='mt-3 pitch-subheading'>AIM Startup & Unicorn Dynamic Activity-Pitch Competition</h2>
                        </div>

                        <div className="col-12 mt-3">
                            <Link href="/startup/pitch">
                                <button className='pitch-cta-btn'>Participate</button>

                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='target-cta-cards-wrapper'>
                <div className="section-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='section-heading'>Get Involved with AIM Congress Today</h2>
                        </div>
                    </div>
                    <div className="row d-flex align-items-end">
                        <div className="col-md-4 mb-3">

                            <Link href="/startup/startup-register">
                                <img src="/assets/imgs/Startup.png" alt="" />

                            </Link>
                        </div>
                        <div className="col-md-4 mb-3">
                            <Link href="/startup/all-investors">

                                <img src="/assets/imgs/Aimvestor.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-md-4 mb-3">
                            <Link href="/startup/partner-register">

                                <img src="/assets/imgs/Partner.png" alt="" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


            <section className='startup-benefits-wrapper'>
                <div className="section-container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <div>
                                <h1 className='mainHead'>{pageData.benefitsheading.value}</h1>
                                <h2 className='subHead'>{pageData.benefitssubheading.value}</h2>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                {pageData.benefits.value.map((m: any, index: number) => {
                                    var item: Serviceitem = m;
                                    return (

                                        <div className="col-12 mb-2" key={`benefits-${index}`}>
                                            <div className="startup-benefit-card">
                                                <h4>{item.name.value}</h4>
                                                <div className='px-4 py-2'>
                                                    <p
                                                        className="description--startup"
                                                        dangerouslySetInnerHTML={{ __html: item.content.value }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='frequently-asked-questions-wrapper'>



                <AccordionComponent pageData={pageData} />

            </section>
        </motion.div>
    )
}

export default StartUp;
