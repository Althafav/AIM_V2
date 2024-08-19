import React from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
const StartUp = () => {
    const text = `AIM Startup, a pivotal aspect of AIM Congress, offers essential tools and funding to empower digital entrepreneurs and overcome resource limitations. With UAE's ambition to be a global tech hub by 2025, startups have emerged as key players, with investments surpassing $2.9 billion last year. These ventures are at the forefront of innovations in AI, blockchain, and renewable energy, driving industry transformation and drawing considerable investment. They also accelerate digital adoption in traditional businesses, contributing to a rapidly evolving technological landscape. With their emphasis on quick expansion and disruptive market dynamics, startups are the vanguard of innovation and entrepreneurship. These business endeavours usually start with an innovative concept or technology that solves a particular issue or market niche. Startups stand out for their desire to grow quickly; they frequently use novel technology or business strategies to achieve exponential growth without experiencing a linear rise in expenses. 
 
A startup's lifecycle typically consists of three stages: the seed stage, where initial funding is used to develop a concept or prototype; the early stage, where funds are provided by venture capital or angel investors to refine the product and establish a market presence; and the growth stage, where the startup grows its customer base, expands operations, and looks for additional funding. 

 

Startup cultures are frequently characterized by an entrepreneurial and collaborative atmosphere that fosters innovation and experimentation. Startup teams are often compact and vibrant, united by a single vision and a shared passion for their purpose. Startups consistently improve user experience and promote adoption by iterating on their offerings and keeping a customer-centric attitude. This creative climate creates a setting where traditional business methods are questioned, opening the door for ground-breaking ideas and novel approaches to the market. `;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner Heading={"Startups & Unicorn"} subHeading={`From 4.0 to 5.0: - "Connecting Visionaries & Building Futures"`} portfolioColorName="startup" />
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

export default StartUp;
