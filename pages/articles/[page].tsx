import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import Helper from "@/modules/Helper";
import Globals from '@/modules/Globals';
import { Blogs } from '@/models/blogs';
import { Blogitems } from '@/models/blogitems';
import Link from 'next/link';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';

const ITEMS_PER_PAGE = 12;

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

export async function getStaticProps({ params }: { params: { page: string } }) {
    const currentPage = parseInt(params.page || "1");

    const datasourceStr: string = await Globals.KontentClient.item("blog_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Blogs = JSON.parse(datasourceStr);

    const totalArticles = data.articlesItems.value.length;
    const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);

    const articles = data.articlesItems.value.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return {
        props: {
            pageData: { ...data, articlesItems: { value: articles } },
            currentPage,
            totalPages,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const datasourceStr: string = await Globals.KontentClient.item("blog_page")
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Blogs = JSON.parse(datasourceStr);
    const totalArticles = data.articlesItems.value.length;
    const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);

    const paths = Array.from({ length: totalPages }, (_, index) => ({
        params: { page: (index + 1).toString() },
    }));

    return { paths, fallback: false };
}

export default function Articles({ pageData, currentPage, totalPages }: { pageData: Blogs, currentPage: number, totalPages: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handlePageChange = (pageNumber: number) => {
        window.location.href = `/articles/${pageNumber}`;
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            window.location.href = `/articles/${currentPage + 1}`;
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            window.location.href = `/articles/${currentPage - 1}`;
        }
    };

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + 3);

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
                                <motion.div className="col-lg-3 col-md-6 col-12 mb-3" key={`article-${index}`} variants={cardVariants}>
                                    <Link
                                        passHref
                                        legacyBehavior
                                        href={`/article/${Helper.formatUrlParameter(
                                            item.heading.value
                                        )}`}
                                    >
                                        <div className='blog-card'>
                                            <Image width="400" height={200} src={item.image.value[0].url} alt="" className='blog-image' quality={80}/>
                                            <p className='name'>{item.heading.value}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </motion.div>


                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-12 pb-5 d-flex justify-content-center">

                        <div className="pagination-controls">
                            <button
                                onClick={handlePrevious}
                                disabled={currentPage === 1}
                                className={`control-btn ${currentPage === 1 ? 'disabled' : ''}`}
                            >
                                <FaAngleLeft />
                            </button>
                            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                                <button
                                    key={startPage + index}
                                    onClick={() => handlePageChange(startPage + index)}
                                    disabled={startPage + index === currentPage}
                                    className={`pagination-button btn ${startPage + index === currentPage ? 'active' : ''}`}
                                >
                                    {startPage + index}
                                </button>
                            ))}

                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`control-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                            >
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
