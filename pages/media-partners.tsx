import React from 'react'
import { motion, useInView } from "framer-motion";
export default function MediaPartners() {
    return (
        <div className='media-partners-page'>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/media-partners-banner-bg.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Media Partners</h1>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
