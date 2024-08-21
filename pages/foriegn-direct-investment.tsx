
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
        return <></>
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
        >
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} portfolioColorName="fdi" />
            <AboutComponent aboutHeading={pageData.aboutheading.value} aboutParagraph={pageData.aboutparagraph.value} />
            <CardGrid  pageData={pageData}/>

            <section className='benefits-section-wrapper'>
                <div className="section-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className='mainheading text-fdi'>Benefits of Foriegn Direct Investment</h1>
                        </div>
                        <div className="col-lg-7 d-flex justify-content-center flex-column gap-3">
                            <img src="/assets/imgs/benefits-fdi.png" alt="" />
                            <div className={`benefit-items ${isExpanded ? 'expanded' : 'faded'}`}>
                                {fdiBenefits.map((item: any, index: number) => {
                                    return (

                                        <div className='benefit-item' key={`benefit-item-${index}`}>
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

            </section>


            <section className='frequently-asked-questions-wrapper'>
                <div className="section-container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>frequently asked questions</h1>
                        </div>
                    </div>

                    <AccordionComponent data={fdiFAQ} />
                </div>
            </section>
        </motion.div>
    )
}
