import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { Brochure } from '@/contants/data';
import Link from 'next/link';
import { PiDownloadSimple } from 'react-icons/pi';





export default function PostshowReport() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className='postshow-report-page-wrapper' >
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/postshow-banner-bg.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Post show reports</h1>
                </div>
            </div>

           
        </div>
    )
}
