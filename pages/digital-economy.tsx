import React from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import { fdiFAQ, tradeInnovationFAQ } from '@/contants/data';
const DigitalEconomy = () => {
    const text = `The digital economy is rapidly evolving, driven by an ecosystem of interconnected digital technologies that significantly impact economic and societal changes. This ecosystem, fuelled by data, generates substantial value while also introducing risks related to privacy and online security. Some technologies are already embedded in daily life, while others are emerging. 

Encompassing a broad range of activities driven by technologies such as the internet, digital communication networks, computers, and software. The futuristic economy is marked by the digitization of products and services, widespread use of digital platforms, and the application of data and analytics for growth and innovation. It also promotes greater equality through improved financial inclusion, trade accessibility, connectivity, and public service delivery. 

The development of digital technologies is crucial for the competitiveness of nations and economic unions. These technologies create opportunities for transforming economies by fostering new interactions, information access, and business operations, while diminishing geographical and physical barriers. Successful digital transformation requires ensuring compatibility, interoperability, and scalability of digital infrastructures and solutions to create an effective, inclusive, and secure digital economy. 

AIM Congress 2025 aims to conceptualize the transition to a digitally enabled economy and promote a sustainable, inclusive, and secure digital future. This transformation will not only change how resources are converted into economic value but also redefine how we view and utilize resources to address economic and social challenges.`;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner Heading={"Digital Economy"} subHeading="Embracing Digital Transformation: An ecosystem of interdependent digital technologies for a sustainable and inclusive future." portfolioColorName="digital-economy" />
            <AboutComponent aboutHeading="Navigating the Future of Digital Economy" aboutParagraph={text} />
            <CardGrid />


            <section className='frequently-asked-questions-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>frequently asked questions</h1>
                        </div>
                    </div>

                    <AccordionComponent data={tradeInnovationFAQ}/>
                </div>
            </section>
        </motion.div>
    )
}

export default DigitalEconomy;
