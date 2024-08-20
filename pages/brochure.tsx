import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { Brochure } from '@/contants/data';
import Link from 'next/link';
import { PiDownloadSimple } from 'react-icons/pi';


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};


export default function brochure() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className='brochure-page-wrapper' >
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/postshow-banner-bg.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Download Brochure</h1>
                </div>
            </div>

            <section ref={ref}>
                <div className="container">
                    <motion.div className="row"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {Brochure.map((item: any, index: number) => {
                            return (
                                <motion.div className="col-lg-3" key={`brochure-item-${index}`} variants={cardVariants}>
                                    <div className='brochure-card'>

                                        <img src={item.image} alt="" className='' />

                                        <div className='download-btn-floating'>
                                            <Link href={item.link} className='d-flex align-items-center gap-3'>

                                                <p>Download Now</p>
                                                <PiDownloadSimple size={20} />
                                            </Link>
                                        </div>
                                    </div>


                                </motion.div>
                            )
                        })}

                    </motion.div>
                </div>
            </section>
        </div>
    )
}
