import { Blogitems } from '@/models/blogitems';
import { Blogs } from '@/models/blogs';
import Globals from '@/modules/Globals';
import Helper from "@/modules/Helper";
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

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

export default function ArticlesComponent() {
    const [pageData, setPageData] = useState<Blogs | null>(null);
   


    React.useEffect(() => {
        const subscription = Globals.KontentClient.item("blog_page")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });

        
        return () => subscription.unsubscribe();
    }, []);

   
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    console.log("Is in view:", isInView);
    const limitedArticles = pageData?.articlesItems.value.slice(0, 5);

    return (
        <section className='articles-component-wrapper' ref={ref}>
            <div className="section-container">
                <motion.div className="row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {limitedArticles?.map((m: any, index: number) => {
                        const item: Blogitems = m;
                        let colClass = "col-lg-4 col-md-6 col-12"; // default

                        if (index === 3) {
                            colClass = "col-lg-8 col-md-6 col-12";
                        } else if (index === 4) {
                            colClass = "col-lg-4 col-md-6 col-12";
                        }

                        return (
                            <motion.div
                                className={`${colClass} mb-3`}
                                key={`article-card-${index}`}
                                variants={cardVariants}
                            >
                                <Link
                                    passHref
                                    legacyBehavior
                                    href={`/article/${Helper.formatUrlParameter(
                                        item.heading.value
                                    )}`}
                                >
                                    <div className="article-card">
                                        <div className="article-badge">
                                            News Article
                                        </div>
                                        <img src={item.image.value[0].url} alt="" />
                                        <div className="content">
                                            <p className='heading'>{item.heading.value}</p>
                                            <div className='timestamp'>
                                                <span>{item.date.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
