import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { Blogs } from '@/contants/data';

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
export default function Articles() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
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


            <section ref={ref}>
                <div className="container">
                    <motion.div className="row"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {Blogs.map((item: any, index: number) => {
                            return (
                                <motion.div className="col-lg-3 mb-3" key={`article-${index}`}
                                    variants={cardVariants}
                                >

                                    <div className='blog-card'>

                                        <img src={item.image} alt="" className='' />
                                        <p className='name'>{item.name}</p>
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
