import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Head from 'next/head';

export default function StandBuilder() {
    const text1 = "Etihad Airways is the National Airline of the United Arab Emirates. From their home in Abu Dhabi, Etihad fly to Passenger and Cargo Destinations in the Middle East, Africa, Europe, Asia, Australia and North America. Together with their codeshare partners, Etihad’s network offers access to hundreds of International Destinations. Etihad Airways offers exclusive discounts to AIM Delegates. "

    const text2 = "AIM Delegates can also avail of special rates from partner hotels which are accessible to the venue, to Regional and International Airports, and to most Locations frequented by Tourists."
    return (
        <div className='stand-builder-page-wrapper' >
            <Head>
                <title>AIM Congress Flights</title>
                <meta name="title" content=" AIM Congress Flights" />
                <meta name="description" content="checkout AIM Congress Flights" />
            </Head>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/flights-banner-bg.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>ETIHAD</h1>
                </div>
            </div>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                            <img src="/assets/imgs/AIM TRAVEL PARTNER_ETIHAD.webp" alt="" className='logo' />
                        </div>

                        <div className="col-lg-8">
                            <h2>Etihad Airways</h2>
                            <p>{text1}</p>
                            <p>{text2}</p>


                            <p className='mt-4 mb-3'>Plan your business trip to AIM Congress 2025 with Etihad Airways using</p>
                            <p>PROMO CODE: <strong>EYAIM24 </strong></p>
                            <p className='mt-3'>*to avail discount please visit etihadairways*</p>

                            <div >
                                <Link href="https://www.etihad.com/en-ae/" target='_blank'>
                                    <button className='mt-3 text-primary bg-white'>Book Now</button>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
