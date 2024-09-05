import React from 'react'
import { motion } from "framer-motion";
export default function startupRegister() {
    return (
        <div>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/Gradient.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Startup Register</h1>
                    <h4 className='text-center mt-3' >Dynamic features and activities fueling startup evolution and success</h4>
                </div>
            </div>

            <section>
                
            </section>
        </div>
    )
}
