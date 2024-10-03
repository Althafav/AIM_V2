
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

export default function ForiegnDirectInvestment() {
    const [isExpanded, setIsExpanded] = useState(false);


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

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='future-finance-page-wrapper'
        >
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0]?.url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} dateVenu={pageData.dateandvenu.value} registerLink={'/register-interest/fdi'} portfolioColorName="fdi" />
            <div className="about-section-wrapper" style={{
                backgroundImage: `url(${pageData.aboutbackgroundimage.value[0]?.url})`,
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
                        className="row"
                    >
                        <div className="col-lg-8">
                            <motion.h2 className='heading'>{pageData.aboutheading.value}</motion.h2>
                            <motion.p

                                className='paragraph' dangerouslySetInnerHTML={{ __html: pageData.aboutparagraph.value }} />

                        </div>
                    </motion.div>

                </div>

            </div>
            <section>
                <div className="features-activities-section-wrapper">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <h2 className="section-heading">
                                    {pageData.featureheading.value}
                                </h2>
                            </div>





                        </div>

                        <div className="row g-4 mt-3 justify-content-center">
                            {pageData.features.value.map((m: any, index: number) => {
                                var item: Serviceitem = m;
                                return (
                                    <motion.div className="col-lg-3 col-md-6" key={`features-${index}`}>
                                        <motion.div className="features-card" initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
                                            viewport={{ once: true, amount: 0.1 }}>
                                            <Image
                                                width={310}
                                                height={270}

                                                src={item.image?.value[0]?.url}
                                                alt={`feature-${index + 1}`}
                                                className="activities-image-bg"
                                            />

                                            <div className='content-wrapper'>

                                                <p className="features-name">{item.name.value}</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <ParticipateSection pageData={pageData} />
            {/* <section className='benefits-section-wrapper'>
                <div className="section-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className='mainheading text-fdi '>Benefits of Foriegn Direct Investment</h1>
                        </div>
                        <div className="col-lg-7 d-flex justify-content-center flex-column gap-3">
                            <img src="/assets/imgs/benefits-fdi.png" alt="" />
                            <div className={`benefit-items ${isExpanded ? 'expanded' : 'faded'}`}>
                                {fdiBenefits.map((item: any, index: number) => {
                                    return (

                                        <div className='benefit-item mb-3' key={`benefit-item-${index}`}>
                                            <p className='benefit-name'>{item.name}</p>
                                            <p className='benefit-desc'>{item.content}</p>

                                        </div>


                                    )
                                })}


                            </div>


                            <div className="col-12 d-flex justify-content-left align-items-center mt-3" onClick={handleToggle}>
                                <button className='read-more-btn '>{isExpanded ? 'Read Less' : 'Read More'}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
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
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-center section-heading text-white fw-normal'>{pageData.keyagendaheading.value}</motion.h2>

                    <div className="row mt-5 g-3 justify-content-center">
                        {pageData.keyagendaitems.value.map((m: any, index) => {
                            var item: Serviceitem = m;
                            return (
                                <motion.div
                                    className="col-lg-2 col-md-4 col-6"
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
            </motion.div>


            <section className='frequently-asked-questions-wrapper'>


                <AccordionComponent pageData={pageData} />

            </section>
        </motion.div>
    )
}
