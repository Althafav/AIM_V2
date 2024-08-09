import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ThemeSectionComponent: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='theme-section-wrapper'>
            <div className="container">
                <motion.h1
                    className='main-head'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Mapping the Future of Global Investment
                </motion.h1>
                <motion.p
                    className='sub-head'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    The New Wave of a Globalized Investment Landscape: Towards a New Balanced World Structure
                </motion.p>
            </div>

        </section>
    );
};

export default ThemeSectionComponent;
