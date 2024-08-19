
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React, { useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import { fdiFAQ, tradeInnovationFAQ } from '@/contants/data';

export default function TradeInnovation() {


    const text = `One of the primary contributions of international trade to economic development, is its ability to stimulate economic growth. Through international trade, countries can access a wider market for their goods and services, increasing their production and sales. This expanded market creates opportunities for businesses to scale up their operations, invest in new technologies, and improve productivity.  

 

The resulting growth in output and income generates positive spillover effects throughout the economy, leading to higher employment rates, increased tax revenues, and improved living standards. International trade not only involves the exchange of goods and services but also facilitates foreign direct investment (FDI). FDI occurs when a company invests in a foreign country by establishing operations, building factories, or acquiring local businesses. Through FDI, countries can benefit from increased capital inflows, technology transfers, job creation, and knowledge spillovers.  

 

These investments contribute to the development of industries, infrastructure, and human capital, driving economic growth and attracting further investment. Engaging in international trade exposes countries to new ideas, technologies, and best practices from around the world. This exposure fosters innovation and encourages countries to adopt and develop new technologies to improve their competitiveness. In a globalized economy, countries that actively participate in international trade tend to be at the forefront of technological advancements. This emphasis on innovation leads to improved production processes, the development of new products and services, and increased productivity, all of which are crucial for economic development. `;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner Heading={`Trade Innovation`} subHeading="Digitizing the International Trade & the Sustainability and Transparency of Global Supply Chains" portfolioColorName="trade-innovation" />

            <AboutComponent aboutHeading="Navigating the Future of Trade Innovation" aboutParagraph={text} />



            <CardGrid />


            <section className='frequently-asked-questions-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>frequently asked questions (FAQ)</h1>
                        </div>
                    </div>

                    <AccordionComponent data={tradeInnovationFAQ}/>
                </div>
            </section>
        </motion.div>
    )
}
