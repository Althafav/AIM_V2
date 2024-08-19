import React from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
const FutureFinance = () => {
    const text = `Digital disruption is revolutionizing our world, driven by mobile apps, home automation, and cashless transactions. Cloud-based ERP, automation, and cognitive technologies are streamlining processes, and blockchain is accelerating this transformation. These advancements free up time and resources, enabling a focus on strategic tasks. To thrive in this dynamic environment, leverage these innovations with AIM to stay competitive and unlock new growth opportunities. 

“Click to Read More”   

Innovative technology and evolving market dynamics are expected to significantly alter the financial landscape in the future. Advanced digital platforms will be integrated at the center of this transition, opening up financial services through internet interfaces, mobile apps, and smart gadgets that are connected. Innovation will be fueled by open banking and APIs, allowing for more flexible and customizable financial solutions catered to specific requirements. 
 
Security will come first, and artificial intelligence (AI) and machine learning will improve fraud detection and prevention. Concerns regarding digital safety and privacy are growing, yet biometric authentication and sophisticated encryption will protect critical data and guarantee secure transactions. 
 
The acceptance of contactless and mobile payments will increase, bringing about substantial changes to payment systems. Coins and digital wallets will provide practical substitutes for 

conventional techniques, simplifying both routine business dealings and intricate financial processes. Data analytics and artificial intelligence (AI) will enable highly customized financial services and advice that match personal preferences and objectives, making personalization a major trend in the coming years. The user experience will be improved, and financial management will become more efficient and natural with this tailored approach. 
 
As digital banking and fintech developments give previously marginalized people access, financial inclusion will advance significantly. As a result, the financial ecosystem will see increased participation and gaps left by existing banking systems filled. 
 
Standards for data privacy and security will be strictly maintained as regulatory frameworks adjust to technological developments. Furthermore, sustainability will come under more and more scrutiny. Green finance and corporate social responsibility will be prioritized, and these concepts will direct financial operations toward more moral and ecologically responsible goals. 

 
In conclusion, improved security, more accessibility, and a dedication to sustainability are all expected to shape the financial landscape of the future and make it more efficient, inclusive, and progressive. Our mission at AIM Congress is to investigate and promote these advancements in order to create a forward-thinking financial environment going forward. `;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner Heading={"AIM Embracing The “Future of Finance” "} subHeading="From 4.0 to 5.0: Rethinking and Embracing: The Direction of Financial Innovation Going Forward " portfolioColorName="future-finance" />
            <AboutComponent aboutHeading="Fuelling the FUTURE OF FINANCIAL REVOLUTION" aboutParagraph={text} />
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

export default FutureFinance;
