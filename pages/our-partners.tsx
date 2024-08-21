import React from 'react'
import { motion, useInView } from "framer-motion";
export default function OurPartners() {
    return (
        <div className='our-partners-page'>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/fdi-banner-bg.png" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Our Partners</h1>
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




