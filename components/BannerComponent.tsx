import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

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

                    Your gateway to meet global investment and economic leaders and connect with key decision makers


                </h1>

               



                {/* <div className='menu-cta-wrapper mt-5'>
                    <Link href="/contact-us">
                        <button className='menu-cta-btn'><span>Secure Your Spot</span></button>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}
