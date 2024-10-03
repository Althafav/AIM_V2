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
        { name: "Become a Delegate", bgColor: "#212121" },
        { name: "Become an Exhibitor", bgColor: "#7440F2" },
        { name: "Become a Partner", bgColor: "#212121" }
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
            <div className="about-section-wrapper" style={{
                backgroundImage: `url(${pageData.aboutbackgroundimage.value[0].url})`,
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




            <motion.div
                className='key-agenda-section-wrapper'
                style={{
                    backgroundImage: `url(${pageData.keyagendabackgroundimage.value[0].url})`,
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


            <div className="stats-section-wrapper">
                <div className="container">
                    <div className="row g-3 justify-content-center">
                        {stats.items.value.map((m: any, index: number) => {
                            var item: Statsitem = m;
                            return (
                                <div className='col-lg-2' key={`stats-${index}`}>
                                    <div className='stats-card'>
                                        <img src={item.image.value[0].url} alt={item.name.value} className='stats-image' />
                                        <div className="content-wrapper">
                                            <h4 className='count'>{item.count.value}</h4>
                                            <h6 className='name'>{item.name.value}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="target-audients-cta-larger_screen">

                <div className="cta-sub-head-wrapper">
                    <div className="container">
                        <div className="target-cta-cards ">

                            {TargetCta.map((item: any, index: number) => {
                                return (
                                    <div className="target-cta-card" style={{ background: item.bgColor }} key={`target-cta-${index}`}>
                                        <div className="content-wrap">
                                            <h3 className="name">{item.name}</h3>
                                            <div className='d-flex justify-content-end'>

                                                <RiArrowRightDownLine size={96} color='white' />
                                            </div>
                                        </div>
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
                                    <div className="target-cta-card">

                                        <h3 className="name">{item.name}</h3>
                                        <div className='d-flex justify-content-end'>

                                            <RiArrowRightDownLine size={96} color='white' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    <div>
                        <p className='text-center text-white '>Empowering Financial Journeys: Unlocking Every Possibility!</p>
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
