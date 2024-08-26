import React from 'react'
import { motion } from "framer-motion";
export default function Resources() {
    return (
        <div className='resources-page-wrapper'>
            <div className="banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/assets/imgs/Gradient.png" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Resources</h1>
                </div>
            </div>
        </div>
    )
}
