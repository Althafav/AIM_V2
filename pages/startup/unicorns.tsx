import PortfolioBanner from '@/components/Portfolio/PortfolioBanner'
import React from 'react'
import { motion } from "framer-motion"
import { UnicornBenefits } from '@/contants/startupData'

export default function UnicornsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='unicorns-page-wrapper'
        >
            <PortfolioBanner bannerImageSrc={"/assets/imgs/startup-001.jpg"} Heading={"AIM Unicorns"} subHeading={"where the magic of disruption creates billion-dollar valuations"} registerLink={'/register-interest/startup'} portfolioColorName="startup" />

            <section className='about-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <div className="video-container-wrapper">

                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div>
                                <h2 className='section-heading text-start'>Insights & Strategies for Visionary Unicorns</h2>
                                <p className='description' style={{ maxWidth: "1000px" }}>AIM Startup, a pivotal aspect of AIM Congress, offers essential tools and funding to empower digital entrepreneurs and overcome resource limitations. With UAE&apos;s ambition to be a global tech hub by 2025, startups have emerged as key players, with investments surpassing $2.9 billion last year. These ventures are at the forefront of innovations in AI, blockchain, and renewable energy, driving industry transformation and drawing considerable investment. They also accelerate digital adoption</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='container unicorn-benefits-wrapper'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            {UnicornBenefits.map((item: any, index: number) => {
                                return (
                                    <div className='col-lg-4 col-md-6 mb-3' key={`unicorn-benefits-${index}`}>
                                        <div className='benefits-card-item h-100'>
                                            <p className='name'>{item.name}</p>
                                            <p className='content'>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/assets/icons/growth-icon.png" alt="" className='growth-icon' />
                    </div>


                </div>
            </section>

            <section className='sustainable_unicorn'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='left-seciton'>
                            <div className="container">

                                <h2 className='heading'>How Unicorns are Shaping a
                                    New Economics Worldwide</h2>

                                <p className='content'>Investment Forecast in Start-ups
                                    The set out environment offers a strong supportive network and future outlooks show further escalated funding for start-ups through VCs, and other forms of funding. In a report by CB insights, ‘the global venture capital funding rose to $ 621 billion in 2021’, and this trend is set to expand due to continuous support of investors that have great confidence in start-ups that disrupt conventional markets and come up with new value propositions. This positive outlook is supported by the trend of numerous funding rounds and exits that have risen that show the feasibility and profitability of start-up investments.
                                    Some of the essential fields that are inviting large scale investments; which include IT, healthcare, financial technology, and renewable energy. These industries shape the future and are involved in the processes that can change the world overcoming the existing challenges. The appearance of unicorns (companies with a valuation of more than $ 1 billion), proves the readiness of investors to provide significant funding to the ‘‘point-of-no-return’’ towards innovative business models, indicating a trend towards heavy investment within industry-changing solutions. Even with the existing economic challenges, the early-stage technology ventures, especially those focusing on artificial intelligence, blockchain and biotechnology received major funding in the year 2023. This captivates interest underlining the capacity and pertinacity of start-ups in having recourse to up-to-date technologies, so as to address new challenges in carnivalesque markets and abstract solving multifaceted issues.  </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </section>


            <section className='cta-card-wrapper'>
                <div className="container cta-card-container">
                    <div className="row cta-card-row">
                        <div className="col-12">
                            <h2 className='heading'>Elevate your Success with <br />AIM 2025 Pitch Competition</h2>
                        </div>
                        <div className="col-12 mt-3">
                            <button className='startup-btn'>Know More</button>
                        </div>
                    </div>
                </div>
                <img src="/assets/imgs/speaking-lady.png" alt="" className='speaking-lady-image d-none d-lg-block' />
            </section>
        </motion.div>
    )
}
