import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";


export default function PortfolioBanner(props: any) {

    return (
        <div className="portfolio-banner-wrapper">


            <motion.img
                src={props.bannerImageSrc}
                alt=""
                className="banner-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />

            <div className="text-container container">
                <h1 className='banner-heading'>

                    {props.Heading}
                </h1>
                <h2 className='banner-heading-2'>{props.subHeading}</h2>


                <div className='mt-3 d-flex align-items-lg-center align-items-start gap-3 flex-lg-row flex-column-reverse'>
                    <Link href="/register-interest"> 

                        <button className={`register-interest-cta ${props.portfolioColorName}`}>Register your interest</button>
                    </Link>
                    <p className='date-venue'>{props.dataVenu}</p>
                </div>





            </div>
        </div>
    )
}
