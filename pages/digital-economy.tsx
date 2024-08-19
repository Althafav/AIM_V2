import React from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
const DigitalEconomy = () => {
    const text = `Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant.   Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant.`;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner Heading={"Digital Economy"} portfolioColorName="digital-economy" />
            <AboutComponent aboutHeading="Navigating the Future of FDI" aboutParagraph={text} />
            <CardGrid />


            <section className='frequently-asked-questions-wrapper'>
                <div className="container">
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

export default DigitalEconomy;
