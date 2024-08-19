
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React, { useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import { fdiBenefits } from '@/contants/data';

export default function ForiegnDirectInvestment() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const text = `Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant.   Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant.`;
    const limitedText = text.substring(0, 450);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner Heading={"Foreign Direct Investment"} portfolioColorName="fdi" />
            <AboutComponent aboutHeading="Navigating the Future of FDI" aboutParagraph={text} />
            <CardGrid />

            <section className='benefits-section-wrapper'>
                <div className="section-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className='mainheading text-fdi'>Benefits of Foriegn Direct Investment</h1>
                        </div>
                        <div className="col-lg-7 d-flex justify-content-center flex-column gap-3">
                            <img src="/assets/imgs/benefits-fdi.png" alt="" />

                            {fdiBenefits.map((item: any, index: number) => {
                                return (
                                    <>
                                        <div>
                                            <p className='benefit-name'>{item.name}</p>
                                            <p className='benefit-desc'>{item.content}</p>

                                        </div>

                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>


            <section className='frequently-asked-questions-wrapper'>
                <div className="section-container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>frequently asked questions (FAQ)</h1>
                        </div>
                    </div>

                    <AccordionComponent />
                </div>
            </section>
        </motion.div>
    )
}
