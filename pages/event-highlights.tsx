
import { BenefitsOfParticipatingInAim2025 } from '@/contants/aimbenefits'
import { motion } from "framer-motion";
import Head from 'next/head';
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function EventHighlights() {

    const aboutAim = "The Annual Investment Meeting (AIM Congress) 2025 is dedicated to advancing the future of globalized investment and its industrial impact by charting the course for emerging investment trends. AIM Congress 2025 aims to create a more balanced global framework, identify opportunities within a dynamic economic environment, and unlock the potential of every business, country, and region. By fostering economic diversification and providing actionable insights into emerging trends, AIM Congress 2025 will empower investors to make strategic, informed decisions that align with their goals and requirements as well as equip participants to navigate a rapidly evolving landscape, ensuring that their investment choices are both prudent and aligned with long-term objectives."
    const aboutAbuDhabi = "As you prepare to attend AIM Congress 2025 in Abu Dhabi, get ready to immerse yourself in a city at the forefront of innovation and progress. From state-of-the-art developments to a dynamic business environment, Abu Dhabi offers an unparalleled setting for exploring new opportunities and forging valuable connections. Join us in Abu Dhabi for AIM Congress 2025, where you'll experience a city that embodies forward-thinking vision and sets the stage for transformative discussions and partnerships."
    return (
        <motion.div className='event-highlights-page-wrapper'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <Head>
                <title>AIM Congress | Event Highlights</title>
                <meta name="title" content="Event Highlights 2025" />

                <meta name="description" content="THE NEW WAVE OF A GLOBALIZED INVESTMENT LANDSCAPE:
TOWARDS A NEW BALANCED WORLD STRUCTURE" />
            </Head>
            <div className="banner-section-wrapper">

                <video width="100%" autoPlay loop playsInline muted controls={false} preload="auto">
                    <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/AIM 2025 Bigger Video.mp4" type="video/mp4" className='banner-video-event-highlights' width="100%" />
                </video>
            </div>




            <div className=' theme-of-the-year' style={{
                backgroundImage: "url('/assets/imgs/AIM 2025 Theme Background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="container">
                    <div className="row">


                        <div className="col-12">
                            <p className='section-tag text-center'>THEME OF THE YEAR</p>
                            <p className='section-head sub-1 text-center'>MAPPING THE FUTURE OF GLOBAL INVESTMENT </p>
                            <p className='section-head main-text text-center'>THE NEW WAVE OF A GLOBALIZED INVESTMENT LANDSCAPE: <br /> TOWARDS A NEW BALANCED WORLD STRUCTURE </p>
                        </div>
                    </div>
                </div>
            </div>



            <section className=" mb-5">


                <div className="container">
                    <div className="row">
                        <div className="col-lg-12"><p className='text-center paragraph'>{aboutAim}</p></div>

                    </div>

                </div>


            </section>


            <section className='hosting-abudhabi'>
                <div className=" inner-text-content">

                    <div className="section-container">

                        <div className="row g-3">
                            <div className="col-12">
                                <h2 className='section-heading'>Hosting AIM Congress 2025 in Abu Dhabi </h2>


                            </div>


                        </div>

                        <div className="row pt-2">
                            <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
                                <p className='paragraph'>{aboutAbuDhabi}</p>
                            </div>

                            <div className="col-lg-6 d-flex align-items-center justify-content-center">

                                <div>
                                    <Link href="https://visitabudhabi.ae/en" target='_blank'>
                                        <button className='text-primary p-3'>Experience Abu Dhabi | Travel and Tourism | Visit Abu Dhabi </button>

                                    </Link>

                                    <div className="date-venue mt-3">
                                        <p>7 – 9 April 2025

                                        </p>
                                        <p> ADNEC, Abu Dhabi, United Arab Emirates</p>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>
                <img src="/assets/imgs/abudhab2025.png" alt="" className='w-100 cover aim2025abudhabi' style={{ width: "100%" }} />



            </section>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='section-heading'>Key Benefits of Participating in AIM Congress 2025 </h2>
                        </div>




                        {BenefitsOfParticipatingInAim2025.map((benefit, benefitIndex) => (
                            <div className="row" key={`benefit-${benefitIndex}`}>
                                <div className="col-12 mt-4">
                                    <p className='benefit-title'>{benefit.heading}</p>
                                </div>

                                {benefit.items.map((item, itemIndex) => (
                                    <div className="col-lg-3 mb-4" key={`item-${itemIndex}`}>
                                        <div className="card benefits-card shadow h-100">
                                            <p className='name'>{item.name}</p>
                                            <p className='description'>{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section >
                <Marquee>

                    <p className='stay-tuned'>Stay tuned—our agenda is on the way!</p>

                </Marquee>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-lg-center flex-column gap-2 align-items-lg-center">
                            <p className='join-us-caption'>Join us at <strong>AIM Congress 2025</strong></p>
                            <p className='join-us-caption-2'>Empowering tomorrow, today!</p>
                        </div>
                    </div>

                </div>
            </section>

        </motion.div>
    )
}
