import React from 'react'
import { motion, useInView } from "framer-motion";
export default function Articles() {
    return (
        <div className='articles-page-wrapper'>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/Gradient.png" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Our Blogs</h1>
                </div>
            </div>
        </div>
    )
}
