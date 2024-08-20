import React, { useRef } from 'react'
import { motion } from "framer-motion";






export default function PostshowReport() {

 
 
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
