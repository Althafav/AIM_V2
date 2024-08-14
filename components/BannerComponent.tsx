import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { MdLocationPin } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

export default function BannerComponent() {

    const customHeading = "Your gateway to meet global investment and economic leaders and connect with key decision makers".split(" ")
    return (
        <div className="banner-wrapper">
            <div className="video-section">

                <video width="100%" autoPlay loop muted controls={false} preload="auto">
                    <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/aim-bg.mp4" type="video/mp4" className='banner-video' width="100%" />
                </video>
            </div>

            <div className="text-container container">
                <h1 className='banner-heading'>
                    Worlds Leading
                    Investment Platform
                </h1>
                <h2 className='banner-heading-2'>Harnessing new potential around the world!</h2>
                {/* <div className='d-flex text-white  align-items-lg-center gap-lg-3 flex-lg-row flex-column'>
                    <p className='d-flex align-items-center gap-3'><SlCalender size={20} className='text-primary' /> <span>07 - 09, April 2025</span></p>
                    <p className='d-flex align-items-center gap-2'><MdLocationPin size={20} className='text-primary' /><span>Abu Dhabi, United Arab Emirates</span></p>

                </div> */}

                <div className='mt-3 d-flex align-items-center gap-3'>
                    <button className='register-interest-cta'>Register your interest</button>
                    <p className='date-venue'>7 - 9 April | Abu dhabi, United Arab Emirates</p>
                </div>



                {/* <div className='menu-cta-wrapper d-flex gap-3 align-items-center  mt-2 flex-wrap'>
                    <Link href="/contact-us">
                        <button className='menu-cta-btn'><span>Secure Your Spot</span></button>
                    </Link>

                    <Link href="/contact-us">
                        <button className='menu-cta-btn-outline'><span>Register your interest</span></button>
                    </Link>
                </div> */}

              
            </div>
        </div>
    )
}
