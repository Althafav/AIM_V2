import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { MdLocationPin } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

export default function BannerComponent() {

    const customHeading = "Annual Investment Meeting"
    const subHeading = "The World’s Leading Investment Platform"
    return (
        <>

            <div className="banner-wrapper">
                <div className="video-section">

                    <video width="100%" autoPlay loop muted controls={false} preload="auto">
                        <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/aim-bg.mp4" type="video/mp4" className='banner-video' width="100%" />
                    </video>
                </div>

                <div className="text-container container">
                    <h1 className='banner-heading'>
                        {customHeading}
                    </h1>
                    <h2 className='banner-heading-2'>{subHeading}</h2>


                    <div className='mt-3 d-flex align-items-lg-center align-items-start gap-3 flex-lg-row flex-column-reverse'>
                        <Link href="/register-interest">
                        
                        <button className='register-interest-cta mb-4 mb-lg-0'>Register your interest</button>
                        </Link>
                        <p className='date-venue'>7 - 9 April 2025 | Abu Dhabi, United Arab Emirates</p>
                    </div>

                </div>






            </div>



            <div className="stats-content ">
                <div className="container ">
                    <ul className="row g-4">
                        <li className="col-lg-3 col-6 ">
                            <div className="d-flex flex-column align-items-lg-center">
                                <span className="count">179</span>
                                <span>Countries</span>
                            </div>
                        </li>
                        <li className="col-lg-3 col-6 ">
                            <div className="d-flex flex-column align-items-lg-center">
                                <span className="count">12,427</span>
                                <span>Participants</span>
                            </div>
                        </li>
                        <li className="col-lg-3 col-6 ">
                            <div className="d-flex flex-column align-items-lg-center">
                                <span className="count">412</span>
                                <span>Sessions</span>
                            </div>
                        </li>
                        <li className="col-lg-3 col-6 ">
                            <div className="d-flex flex-column align-items-lg-center">
                                <span className="count">927</span>
                                <span>Speakers</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}
