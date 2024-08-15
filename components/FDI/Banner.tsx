import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { MdLocationPin } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

export default function Banner() {

    const customHeading = "Your gateway to meet global investment and economic leaders and connect with key decision makers".split(" ")
    return (
        <div className="portfolio-banner-wrapper">
            {/* <div className="video-section">

                <video width="100%" autoPlay loop muted controls={false} preload="auto">
                    <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/aim-bg.mp4" type="video/mp4" className='banner-video' width="100%" />
                </video>
            </div> */}

            <img src="/assets/imgs/fdi-banner-bg.png" alt="" className='banner-bg'/>

            <div className="text-container container">
                <h1 className='banner-heading'>
                    Navigating the
                    Future of FDI
                </h1>
                <h2 className='banner-heading-2'>Overcoming Challenges, Seizing New Global Opportunities</h2>


                <div className='mt-3 d-flex align-items-center gap-3'>
                    <button className='register-interest-cta'>Register your interest</button>
                    <p className='date-venue'>7 - 9 April | Abu dhabi, United Arab Emirates</p>
                </div>





            </div>
        </div>
    )
}
