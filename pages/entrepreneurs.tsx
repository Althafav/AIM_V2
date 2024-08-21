
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React, { useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import { fdiFAQ } from '@/contants/data';

export default function ForiegnDirectInvestment() {
  

    const text = `By turning innovative concepts into practical solutions, entrepreneurs are the engine of economic expansion and game-changing inventions. Here at AIM, our mission is to empower these extraordinary people by offering vital tools, money, and professional mentoring. The fundamental idea behind AIM is to support and promote early-stage businesses by providing a strong ecosystem that enables quick development and scaling. Entrepreneurs are instrumental in redefining the global economy through their innovative approaches and forward-thinking solutions. They act as agents of change by introducing disruptive technologies, creating new market opportunities, and enhancing competition. This dynamic process not only accelerates economic growth but also leads to the development of entirely new industries. 

At the core of entrepreneurship is the drive to solve complex problems and meet evolving market demands. Entrepreneurs harness their creativity and resilience to turn groundbreaking ideas into successful enterprises. Their ventures often address global challenges such as sustainability, healthcare, and digital transformation, thereby contributing to both local and global progress. 

 
Entrepreneurs also aid in economic diversification and the creation of jobs. With the growth of startups, economies become more flexible and robust to external shocks by creating jobs and reducing dependency on more established industries. 
 
To summarise, the growth of the world economy depends on entrepreneurs. A more connected and wealthier world is shaped by their capacity for innovation and scale, which also influences economic growth, promotes global trade, and supports sustainable development. `;
    const limitedText = text.substring(0, 450);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner bannerImageSrc="/assets/imgs/Entrepreneurs.jpg" Heading={"AIM Vision Entrepreneurs 2025"} subHeading=" From 4.0 to 5.0: Developing a Future Investment Map for the World" portfolioColorName="entrepreneurs"/>
            <AboutComponent aboutHeading="A New Balanced World Structure: Emerging Wave of a Globalized Investing Landscape" aboutParagraph={text}/>
           


            <section className='frequently-asked-questions-wrapper'>
                <div className="container">
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
