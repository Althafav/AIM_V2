import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from "framer-motion";
import Helper from "@/modules/Helper";
import Globals from '@/modules/Globals';
import { Blogs } from '@/models/blogs';

import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Blogitems } from '@/models/blogitems';
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


export default function Articles() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [pageData, setPageData] = useState<Blogs | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("blog_page")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />;
    }

    
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


                        {pageData.articlesItems.value.map((m: any, index: number) => {

                            var item: Blogitems = m;
                            return (
                                <div className="col-lg-3 mb-3" key={`article-${index}`}

                                >
                                    <Link
                                        passHref
                                        legacyBehavior
                                        href={`/article/${Helper.formatUrlParameter(
                                            item.heading.value
                                        )}`}
                                    >

                                        <div className='blog-card'

                                        >

                                            <img src={item.image.value[0].url} alt="" className='' />
                                            <p className='name'>{item.heading.value}</p>
                                        </div>

                                    </Link>
                                </div>
                            )
                        })}


                    </motion.div>
                </div>
            </section>
        </div>
    )
}
