import React, { useCallback, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { PortfolioCards } from "@/contants/data.js"
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import Link from 'next/link';

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

const PortfolioCTAComponent: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  

    return (
        <section ref={ref} className='section-wrapper portfolio-section-wrapper' id='Portfolio'>
            <div className="section-container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">

                        <motion.div
                            className='main-head'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span>Portfolio Strategically Designed for your Idea</span>
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


                <div className="row g-3 mt-4">


                    <motion.div className="row"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {PortfolioCards.map((item: any, index: number) => {
                            return (
                                <motion.div className="col-lg-3 col-6 mb-4" key={`portfoliocard-${index}`}
                                    variants={cardVariants}

                                >

                                    <motion.div className="portfolio-card"
                                    >
                                        <div className="cta-card-item">
                                            <img src={item.image} alt="" />
                                            <div className="text-container">
                                                <div className='d-flex flex-column'>
                                                    <span className='main-head--card'>{item.mainHead}</span>
                                                    <span className='sub-head--card mt-1'>{item.kicker}</span>
                                                </div>
                                                <Link href={item.link ? item.link : '#'} >

                                                    <button className={`know-more-btn ${item.btnName}`}>Know More <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.4657 4.21318C17.5965 3.39515 17.0395 2.62593 16.2214 2.49507L2.89092 0.362647C2.07289 0.231791 1.30367 0.788853 1.17281 1.60688C1.04196 2.42491 1.59902 3.19413 2.41704 3.32498L14.2664 5.22047L12.3709 17.0698C12.24 17.8879 12.7971 18.6571 13.6151 18.7879C14.4332 18.9188 15.2024 18.3617 15.3332 17.5437L17.4657 4.21318ZM1.8798 16.0427L16.8643 5.19113L15.1047 2.76136L0.120192 13.613L1.8798 16.0427Z" fill="white" />
                                                    </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )
                        })}



                    </motion.div>


                    {/* <div className="embla" ref={emblaRef}>
                        <motion.div className="embla__container"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {PortfolioCards.map((item: any, index: number) => {
                                return (
                                    <motion.div className="embla__slide" key={`portfoliocard-${index}`}
                                        variants={cardVariants}

                                    >

                                        <motion.div className="portfolio-card"
                                        >
                                            <div className="cta-card-item">

                                                <img src={item.image} alt="" />
                                                <div className="text-container">
                                                    <div className='d-flex flex-column'>
                                                        <span className='main-head--card'>{item.mainHead}</span>
                                                        <span className='sub-head--card'>kicker Line here</span>
                                                    </div>
                                                    <div>

                                                        <button className={`know-more-btn ${item.btnName}`}>Know More <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.4657 4.21318C17.5965 3.39515 17.0395 2.62593 16.2214 2.49507L2.89092 0.362647C2.07289 0.231791 1.30367 0.788853 1.17281 1.60688C1.04196 2.42491 1.59902 3.19413 2.41704 3.32498L14.2664 5.22047L12.3709 17.0698C12.24 17.8879 12.7971 18.6571 13.6151 18.7879C14.4332 18.9188 15.2024 18.3617 15.3332 17.5437L17.4657 4.21318ZM1.8798 16.0427L16.8643 5.19113L15.1047 2.76136L0.120192 13.613L1.8798 16.0427Z" fill="white" />
                                                        </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}



                        </motion.div>
                    </div> */}






                </div>

                {/* <div className="row mt-4">
                    <div className='d-flex justify-content-end'>
                        <button className="embla__prev bg-none" onClick={scrollPrev}>

                            <FaCircleChevronLeft size={32} color='lightgray' />
                        </button>
                        <button className="embla__next bg-none" onClick={scrollNext}>
                            <FaCircleChevronRight color='gray' size={32} />
                        </button>
                    </div>

                </div> */}

            </div>

        </section>
    );
};

export default PortfolioCTAComponent;