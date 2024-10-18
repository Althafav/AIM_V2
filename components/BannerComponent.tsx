import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { MdLocationPin } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Homepage } from '@/models/homepage';
import { Buttonitem } from '@/models/buttonitem';
import { Statsitem } from '@/models/statsitem';

interface PageDataProps {
    pageData: Homepage | null;
}

const BannerComponent: React.FC<PageDataProps> = ({ pageData }) => {

    return (
        <>

            <div className="banner-wrapper">
                <div className="video-section">

                    <video width="100%" autoPlay loop playsInline muted controls={false} preload="auto">
                        <source src={pageData?.backgroundvideolink.value} type="video/mp4" className='banner-video' width="100%" />
                    </video>
                </div>

                <div className="text-container container">
                    <h1 className='banner-heading'>
                        {pageData?.bannerheading.value}
                    </h1>
                    {/* <h2 className='banner-heading-2'>{subHeading}</h2> */}


                    <div className='mt-3 d-flex align-items-lg-center align-items-start gap-3 flex-lg-row flex-column-reverse'>
                        {pageData?.bannerctabutton.value.map((m: any, index: number) => {
                            var item: Buttonitem = m;
                            return (
                                <Link href={item.link.value} key={`banner-cta-${index}`}>

                                    <button className='register-interest-cta mb-4 mb-lg-0'>{item.name.value}</button>
                                </Link>
                            )
                        })}

                        <p className='date-venue'>{pageData?.datevenue.value}</p>
                    </div>

                </div>

            </div>



            <div className="stats-content ">
                <div className="container ">
                    <ul className="row g-4">
                        {pageData?.statistics.value.map((m: any, index: number) => {
                            var item: Statsitem = m;
                            return (
                                <li className="col-lg-3 col-6 " key={`statistics-${index}`}>
                                    <div className="d-flex flex-column align-items-lg-center">
                                        <span className="count">{item.count.value}</span>
                                        <span>{item.name.value}</span>
                                    </div>
                                </li>
                            )
                        })}


                    </ul>
                </div>
            </div>


        </>
    )
}

export default BannerComponent;