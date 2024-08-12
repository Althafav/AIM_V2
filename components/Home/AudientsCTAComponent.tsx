import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AudientsCTAComponent: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='audients-section-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">

                        <motion.div
                            className='main-head'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span>Main Head</span>
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
                        </motion.p>``
                    </div>


                </div>

                <div className="row">
                    <motion.div className="col-lg-4 " initial={{ y: 100, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}>
                        <div className="cta-card-item">

                            <img src="/assets/imgs/Delegate Card 1.png" alt="" />
                        </div>
                    </motion.div>

                    <motion.div className="col-lg-4 " initial={{ y: 100, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}>
                        <div className="cta-card-item">

                            <img src="/assets/imgs/Exhibitor Card.png" alt="" />
                        </div>
                    </motion.div>

                    <motion.div className="col-lg-4 " initial={{ y: 100, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}>
                        <div className="cta-card-item">

                            <img src="/assets/imgs/Partner Card 1.png" alt="" />
                        </div>
                    </motion.div>
                </div>

            </div>

        </section>
    );
};

export default AudientsCTAComponent;