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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} portfolioColorName="startup" />
            {/* <div className='portfolio-sticky-nav-menu'>
                <p>Nav</p>
            </div> */}
            <AboutComponent aboutHeading={pageData.aboutheading.value} aboutParagraph={pageData.aboutparagraph.value} />
            {/* <CardGrid pageData={pageData} /> */}
            <section>
                <div className="container">
                    <div className='row'>
                        <div className="col-12">
                            <h2 className='section-heading'>Features & Activities</h2>
                            <p className='text-center'>Dynamic features and activities fueling startup evolution and success.</p>
                        </div>

                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6 ">
                            <div className="row g-3">
                                {startupFeaturesAndActivities.map((item: any, index: number) => {
                                    return (
                                        <div className="col-lg-4 " key={`features-${index}`}
                                           
                                        >
                                            <div className="bg-secondary p-3 rounded">
                                                <p className='text-white'>{item.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12 ">
                                    <div className='bg-warning p-3 h-100'>
                                        <p>You tube video will be here</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam ad saepe dolorum, quasi officia corrupti omnis numquam rerum ab. In, reprehenderit. Porro alias, minus ipsum reiciendis sequi quidem fugiat!</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>




            <section className='frequently-asked-questions-wrapper'>
                <div className="container">


                    <AccordionComponent pageData={pageData} />
                </div>
            </section>
        </motion.div>
    )
}

export default StartUp;
