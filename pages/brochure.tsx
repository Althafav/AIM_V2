import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from "framer-motion";
import { Brochure } from '@/contants/data';
import Link from 'next/link';
import { PiDownloadSimple } from 'react-icons/pi';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import Globals from '@/modules/Globals';
import { Postshowreport } from '@/models/postshowreport';
import { Postshowreportyear } from '@/models/postshowreportyear';
import { Reportitem } from '@/models/reportitem';

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

    return {
        props: {
            brochureData: Brochure,
        },
    };
}

export default function Broucher({ brochureData }: { brochureData: any[] }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [pageData, setPageData] = useState<Postshowreport | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("brochure_reports")
            .withParameter("depth", "2")
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
        <div className='brochure-page-wrapper' >
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/postshow-banner-bg.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Download Brochure</h1>
                </div>
            </div>

            <section>
                <div className="container" ref={ref}>
                    {/* <motion.div className="row"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {brochureData.map((item: any, index: number) => (
                            <motion.div className="col-lg-3 col-md-6 col-12 mb-3 " key={`brochure-item-${index}`} variants={cardVariants}>
                                <div className='brochure-card'>
                                    <img src={item.image} alt="" className='' />
                                    <div className='download-btn-floating'>
                                        <Link href={item.link} className='d-flex align-items-center gap-3'>
                                            <p>Download Now</p>
                                            <PiDownloadSimple size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div> */}

                    <div className="col-12 agenda-revamp-wrapper">
                        <ul className="partners-category-wrap">
                            {pageData.items.value.map((c: any, index) => {
                                let category: Postshowreportyear = c;
                                return (
                                    <li className="partners-category-li" key={category.system.id}>
                                        <a id={category.system.id} className={`${index == 0 ? "category-btn-active" : "category-btn"} ctaegory-btn-all`} href="javascript:0"
                                            onClick={() => {
                                                $(".ctaegory-btn-all").removeClass("category-btn-active");
                                                $(".ctaegory-btn-all").addClass("category-btn");
                                                $("#" + category.system.id).addClass("category-btn-active");

                                                $(".agenda").addClass("d-none");
                                                $(`#agenda_${category.system.id}`).removeClass("d-none");

                                                $(".date-tabs").removeClass("date-tabs-active");
                                                $(".agenda-card").addClass("d-none");
                                                $(`#agenda_${category.system.id}_0`).addClass("date-tabs-active");
                                                $(`#agenda_time_${category.system.id}_0`).removeClass("d-none");
                                            }}
                                        >
                                            {category.year.value}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {pageData.items.value.map((c: any, index) => {
                        let category: Postshowreportyear = c;
                        return (
                            <div className={`${index == 0 ? "" : "d-none"} agenda col-12`} id={`agenda_${category.system.id}`} key={`brochure-items-${index}`}>
                                <div className="row">
                                    {
                                        category.items.value.map((a: any, index: any) => {
                                            let report: Reportitem = a;
                                            return (
                                                <div className="col-12 col-md-6 col-lg-3 m-b-30 report-wrapper" key={`brochure-${index}`}>
                                                    <a href={`/reports/download-brochure/${report.system.id}`}>
                                                        <div className="report-image" style={{ background: "url(" + report.image.value[0].url + ")" }}>
                                                            
                                                        </div>

                                                        <div className="report-image-content">
                                                            <p>Download</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
