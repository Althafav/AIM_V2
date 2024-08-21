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

export async function getStaticProps() {
    // Fetch data at build time
    const datasourceStr: string = await Globals.KontentClient.item("blog_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Blogs = JSON.parse(datasourceStr);
    return {
        props: {
            pageData: data
        },
        revalidate: 10, // Revalidate the data every 10 seconds (adjust as needed)
    };
}

export default function Articles({ pageData }: { pageData: Blogs }) {
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
                        {pageData.articlesItems.value.map((m: any, index: number) => {
                            var item: Blogitems = m;
                            return (
                                <motion.div className="col-lg-3 mb-3" key={`article-${index}`} variants={cardVariants}>
                                    <Link
                                        passHref
                                        legacyBehavior
                                        href={`/article/${Helper.formatUrlParameter(
                                            item.heading.value
                                        )}`}
                                    >
                                        <div className='blog-card'>
                                            <img src={item.image.value[0].url} alt="" className='blog-image' />
                                            <p className='name'>{item.heading.value}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
