import React from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import { fdiFAQ } from '@/contants/data';
const FutureCities = () => {
    const text = `Future Cities are poised to be the cornerstone of sustainable and efficient urban development, a focal point of the AIM Congress 2025. These cities are set to redefine progress by integrating cutting-edge technologies, leading to a transformative era. Robotics-enabled automation and AI-enhanced systems are at the forefront, promising to revolutionize industries and daily life by significantly boosting productivity, reducing errors, and enhancing urban living standards. 

 

The AIM Congress underscores the crucial role of supply chain digitalization in shaping Future Cities. By harnessing artificial intelligence, cities can optimize resource allocation and employ predictive analytics, paving the way for smarter, more adaptive urban environments. The integration of digital platforms like cloud computing, IoT, blockchain, and additive manufacturing will build interconnected and efficient supply chains, driving urban innovation. 

 

With urban populations on the rise, Future Cities are set to become vibrant hubs of innovation, sustainability, and inclusivity. Emphasizing green infrastructure, smart transportation, and mixed-use development, these cities will not only reduce their environmental footprint but also enhance livability. This holistic approach fosters economic growth, cultural exchange, and social progress, making cities epicenters of creativity and problem-solving. 

 

As we face global challenges such as social cohesion and environmental sustainability, international cooperation will be key. Investing in sustainable infrastructure and promoting inclusive policies, while facilitating knowledge sharing and technology transfer, will help cities become beacons of global prosperity. By working together, cities will drive positive change and improve lives worldwide, shaping a brighter future for all. `;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner bannerImageSrc="/assets/imgs/Future Cities.jpg" Heading={"Future Cities"} subHeading="Creating cities of tomorrow: A hub for global prosperity, social cohesion, and economic opportunity through megacities and international cooperation. " portfolioColorName="future-cities" />
            <AboutComponent aboutHeading="Navigating the Future of Future Cities" aboutParagraph={text} />
        


            <section className='frequently-asked-questions-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>frequently asked questions</h1>
                        </div>
                    </div>

                    <AccordionComponent data={fdiFAQ}/>
                </div>
            </section>
        </motion.div>
    )
}

export default FutureCities
