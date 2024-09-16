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
import { Buttonitem } from '@/models/buttonitem';
import { ImageButton } from '@/models/image_button';
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
            className=''
        >

            <div className="portfolio-banner-wrapper startup-banner portfolio-margin-top" >


                <motion.img
                    src={pageData.bannerimage.value[0].url}
                    alt=""
                    className="banner-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />

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
                                    <button className={`register-interest-cta startup`}>{item.name.value}</button>
                                </Link>
                            )
                        })}
                        <p className='date-venue'>{pageData.dateandvenu.value}</p>
                    </div>





                </div>
            </div>
            <AboutComponent aboutHeading={pageData.aboutheading.value} aboutParagraph={pageData.aboutparagraph.value} />

            <section className='features-activities-wrapper'>
                <div className="section-container">
                    <div className='row g-0'>
                        <div className="col-12">
                            <h2 className='section-heading'>{pageData.featureheading.value}</h2>
                            <p className='text-lg-center'>{pageData.featuresubheading.value}</p>
                        </div>

                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6 mb-lg-0 mb-3">
                            <div className="row g-3">

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
                                        <h3 className='section-heading'>{pageData.featuresbriefheading.value}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: pageData.featuresbriefcontent.value }} />
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
                            <h2 className='pitch-heading'>{pageData.ctabannerheading.value}</h2>
                            <h2 className='mt-3 pitch-subheading'>{pageData.ctabannersubheading.value}</h2>
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
                            <h2 className='section-heading'>{pageData.ctacardsheading.value}</h2>
                        </div>
                    </div>
                    <div className="row d-flex align-items-end">
                        {pageData.ctacarditems.value.map((m: any, index: number) => {
                            var item: ImageButton = m;
                            return (
                                <div className="col-md-4 mb-3">

                                    <Link href="/startup/startup-register">
                                        <img src={item.image.value[0].url} alt="register" />

                                    </Link>
                                </div>
                            )
                        })}

                     

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
