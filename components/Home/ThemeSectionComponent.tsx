import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Homepage } from '@/models/homepage';

interface PageDataProps {
    pageData: Homepage | null
}
const ThemeSectionComponent: React.FC<PageDataProps> = ({ pageData }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='theme-section-wrapper section-wrapper' style={{ overflowX: "hidden" }}>
            <div className="section-container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">

                        <motion.div
                            className='sub-head'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span className='small-head'>{pageData?.themesubheading.value}</span>
                        </motion.div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">

                        <motion.p
                            className=' main-head'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            {pageData?.themeheading.value}
                        </motion.p>
                    </div>


                </div>

            </div>

            <div className="row">
                <motion.div className="col-12 mt-4" initial={{ y: 100, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1.1 }}>
                    <Image layout="responsive"
                        width={700}
                        height={475}
                        src={pageData ? pageData.themeimage.value[0].url : ''} alt="AIM Congress" priority={false} />
                </motion.div>
            </div>

        </section>
    );
};

export default ThemeSectionComponent;
