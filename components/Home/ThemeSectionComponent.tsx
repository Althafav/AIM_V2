import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ThemeSectionComponent: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='theme-section-wrapper section-wrapper'>
            <div className="section-container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">

                        <motion.div
                            className='main-head'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span className='small-head'>Mapping the Future of</span><span>Global Investment</span>
                        </motion.div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">

                        <motion.p
                            className='sub-head'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            The New Wave of a Globalized Investment Landscape: Towards a New Balanced World Structure
                        </motion.p>
                    </div>


                </div>

            </div>

            <div className="row">
                <motion.div className="col-12 mt-4" initial={{ y: 100, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1.1 }}>
                    <img src="/assets/imgs/AIM Web  banner 00   -05 (1).jpg" alt="" style={{width: "100%", objectFit: "cover"}}/>
                </motion.div>
            </div>

        </section>
    );
};

export default ThemeSectionComponent;
