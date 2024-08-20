import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

import Globals from '@/modules/Globals';
import { Blogs } from '@/models/blogs';

import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Blogitems } from '@/models/blogitems';

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
    try {
        const datasourceStr: string = await Globals.KontentClient.item("blog_page")
            .languageParameter(Globals.CURRENT_LANG_CODENAME)
            .toObservable()
            .toPromise()
            .then((r: any) => {
                return JSON.stringify(r.item);
            });

        const data: Blogs = JSON.parse(datasourceStr);
        console.log(data, "this is data")
        return {
            props: {
                data,
            },
            revalidate: 120,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                data: null,
            },
        };
    }
}


function ListPage({ data }: { data: Blogs }) {
    if (!data) {
        return <SpinnerComponent />;
    }
    var formatName = "";
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
                        {/* {BlogsData.map((item: any, index: number) => {
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
                        })} */}

                        {data.articlesItems.value.map((i: any, key: number) =>
                            i.chooseArticle.value == null
                                ? ((formatName = i.system.id),
                                    (
                                        <motion.div className="col-lg-3 mb-3" key={`article-${key}`}
                                            variants={cardVariants}
                                        >

                                            <div className='blog-card'>

                                                <img src={i.image.value[0].url} alt="" className='' />
                                                <p className='name'>{i.heading.value}</p>
                                            </div>
                                        </motion.div>
                                    ))
                                : ""
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ListPage;
