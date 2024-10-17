import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Head from 'next/head';

export default function StandBuilder() {
    const text1 = "Established in 2014 in the United Arab Emirates (UAE) as part of Strategic Holding, Creation House is an exhibition stand fitting and production company. From the time of our existence till to date, we pride ourselves as an excellent enterprise with a proven track record of successfully completing projects on a turnkey basis ranging from fabrication to graphics, signage, furniture, and AV"

    const text2 = "We have been selected as the official contractor for several exhibitions as we assist the exhibitors from pre-show planning, and during show assistance to post-show close-out."
    return (
        <div className='stand-builder-page-wrapper' >
            <Head>
                <title>AIM Congress Stand Builders</title>
                <meta name="title" content=" AIM Congress Stand Builders" />
                <meta name="description" content="checkout AIM Congress Stand Builders" />
            </Head>
            <div className="inner-banner-section-wrapper">
                {/* <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/Gradient.png" alt="" className='banner-image' /> */}
                <video width="100%" autoPlay loop muted controls={false} preload="auto">
                    <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/26.mp4" type="video/mp4" className='banner-video' width="100%" />
                </video>
                <div className="inner-text-container">
                    <h1 className='banner-heading'>Our Stand Builder</h1>
                </div>
            </div>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                            <img src="/assets/imgs/Creation House New Logo 1.png" alt="" className='logo' />
                        </div>

                        <div className="col-lg-8">
                            <h2>Creation House</h2>
                            <p>{text1}</p>
                            <p>{text2}</p>
                            <p className='fs-4 mt-3'>Contact information:</p>

                            <div className='d-flex flex-column gap-1'>
                                <span>Mr. Mohamed Saleh</span>
                                <span>Business Development</span>
                            </div>

                            <div className='d-flex flex-column gap-1 mt-3'>
                                <span>mohammad.saleh@creation-house.ae</span>
                                <span>+971564034046</span>
                            </div>

                            <div>
                                <Link href="https://creation-house.ae/" target='_blank'>
                                    <button className='mt-3 text-primary bg-white'>Visit Website</button>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
