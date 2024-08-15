import Banner from '@/components/FDI/Banner'
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React, { useState } from 'react'
import { motion } from "framer-motion"
export default function foriegnDirectInvestment() {
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
            <Banner />
            <section className='about-portfolio-section-wrapper'>
                <div className="container">
                    <div className="row about-content">
                        <div className="col-12">
                            <h1 className='section-heading'>Mapping the Future of</h1>
                        </div>
                        <input type="checkbox" id="toggle-paragraph" className="toggle-checkbox" />
                        <div className="col-12">
                            <p className='paragraph'>
                                Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant.
                           
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam adipisci dolorem quidem rerum nesciunt praesentium sunt dignissimos corporis beatae. Aliquid ab harum nesciunt velit, deleniti qui doloribus enim vel veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio numquam nihil accusamus? Exercitationem labore officiis consectetur sapiente provident voluptates sed. Tempore esse ipsa beatae? Aspernatur exercitationem rem dolorum itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus molestias adipisci deserunt ipsam. Dicta, recusandae doloribus nulla numquam commodi placeat vitae reprehenderit provident, harum, quidem architecto necessitatibus error libero.
                            </p>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                            <label className='read-more-btn' htmlFor="toggle-paragraph">Read More</label>
                        </div>
                    </div>
                </div>
            </section>


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
