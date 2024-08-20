import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { MdLocationPin } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

export default function BannerComponent() {

    const customHeading = "Annual Investment Meeting"
    return (
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
                <h2 className='banner-heading-2'>Harnessing new potential around the world!</h2>
             

                <div className='mt-3 d-flex align-items-lg-center align-items-start gap-3 flex-lg-row flex-column-reverse'>
                    <button className='register-interest-cta mb-4 mb-lg-0'>Register your interest</button>
                    <p className='date-venue'>7 - 9 April | Abu dhabi, United Arab Emirates</p>
                </div>



           





            </div>

            <div className="stats-content ">
               

                <ul className='row g-lg-5 g-0'>
                    <li className='col-lg-3 col-6 mb-3 mb-lg-0'>
                        <div className='d-flex flex-column gap-0'>

                            <span className='count'>175</span>
                            <span>Countries</span>
                        </div>
                    </li>

                    <li className='col-lg-3 col-6 mb-3 mb-lg-0'>
                        <div className='d-flex flex-column gap-0'>

                            <span className='count'>12,000</span>
                            <span>Participants</span>
                        </div>
                    </li>

                    <li className='col-lg-3 col-6 mb-3 mb-lg-0'>
                        <div className='d-flex flex-column gap-0'>

                            <span className='count'>450</span>
                            <span>Sessions</span>
                        </div>
                    </li>

                    <li className='col-lg-3 col-6 mb-3 mb-lg-0'>
                        <div className='d-flex flex-column gap-0'>

                            <span className='count'>900</span>
                            <span>Speakers</span>
                        </div>
                    </li>
                </ul>
            </div>




        </div>
    )
}
