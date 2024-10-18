import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Homepage } from '@/models/homepage';
import { ImageButton } from '@/models/image_button';


interface PageDataProps {
    pageData: Homepage | null
}


const AudientsCTAComponent: React.FC<PageDataProps> = ({ pageData }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='audients-section-wrapper'>
            <div className="section-container">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-center">

                        <motion.div
                            className='main-head'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span className='' style={{ textTransform: "capitalize" }}>{pageData?.targetaudientsheading.value}</span>
                        </motion.div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">

                        <motion.p
                            className='sub-head'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            {pageData?.targetaudientssubheading.value}
                        </motion.p>
                    </div>


                </div>

                <div className="row">
                    {pageData?.targetaudientscta.value.map((m: any, index: number) => {
                        var item: ImageButton = m;
                        return (
                            <motion.div className="col-lg-3  col-md-6 col-12 mb-4 mb-lg-0" initial={{ y: 100, opacity: 0 }}
                                animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} key={`audients-cta-${index}`}>
                                <div className="cta-card-item">
                                    <Link href="/register-interest">

                                        <Image width={340} height={200} layout='responsive' src={item.image.value[0].url} alt="" />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}

                </div>

            </div>

        </section>
    );
};

export default AudientsCTAComponent;