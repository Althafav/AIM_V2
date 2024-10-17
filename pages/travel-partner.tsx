import { shamsiTravelsServices } from '@/contants/data'
import React from 'react'
import { FaGlobe, FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { motion } from "framer-motion";
import Head from 'next/head';

export default function TravelPartner() {
    return (
        <div className='travel-partner-page-wrapper'>
            <Head>
                <title>AIM Congress Travel Partners</title>
                <meta name="title" content=" AIM Congress Travel Partners" />
                <meta name="description" content="checkout AIM Congress Travel Partners" />
            </Head>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/travel-agent-banner-bg.png" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Travel Partners</h1>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div>
                                <span className='travels-name'>
                                    ALSHAMSI TRAVELS
                                </span>
                            </div>

                            <div>
                                <img

                                    src="/assets/imgs/shamsi-travels-logo.png" alt="" className='travels-logo' />
                            </div>
                        </div>

                        <hr className='text-dark mt-3 mb-3' />
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h3 className='text-dark text-center fs-1'>Services</h3>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {shamsiTravelsServices.map((item: any, index: number) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center" key={`travel-service-item-${index}`}>

                                    <div className='item flex flex-column align-items-center justify-content-center '>
                                        <img src={item.image} alt="" />
                                        <p className='mt-3 text-center'>{item.name}</p>
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                    <div className="row mt-4">

                        <div className="col-12  d-flex justify-content-center flex-column gap-3 align-items-center">
                            <p className='fs-3 m-0 p-0'>Connect with us</p>
                            <div className='d-flex align-items-center gap-3'>
                                <FaGlobe color='rgb(210,81,49)' />
                                <span> www.alshamsitravels.com</span>
                            </div>

                            <div className='d-flex align-items-center gap-3'>
                                <IoMdMail color='rgb(210,81,49)' />
                                <span>info@alshamsitravels.com</span>
                            </div>

                            <div className='d-flex align-items-center gap-3'>
                                <FaPhoneAlt color='rgb(210,81,49)' />
                                <span> 04 222 2122</span>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}
