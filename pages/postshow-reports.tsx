import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Postshowreport } from '@/models/postshowreport';
import Globals from '@/modules/Globals';
import { Postshowreportyear } from '@/models/postshowreportyear';
import { Reportitem } from '@/models/reportitem';
import Link from 'next/link';
import SpinnerComponent from '@/components/UI/SpinnerComponent';

export default function PostshowReport() {
    const [pageData, setPageData] = useState<Postshowreport | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null); // Track active category
    const [activeReportIndex, setActiveReportIndex] = useState<number>(0); // Track active report index

    useEffect(() => {
        Globals.KontentClient.item("post_show_reports")
            .withParameter("depth", "2")
            .languageParameter(Globals.CURRENT_LANG_CODENAME)
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
                if (response.item.items.value.length > 0) {
                    setActiveCategory(response.item.items.value[0].system.id); // Set initial active category
                }
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent/>;
    }

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        setActiveReportIndex(0); // Reset the active report index when the category changes
    };

    return (
        <div className='postshow-report-page-wrapper'>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/postshow-banner-bg.jpg"
                    alt="Post show banner"
                    className='banner-image'
                />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Post show reports</h1>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="col-12 agenda-revamp-wrapper">
                        <ul className="partners-category-wrap">
                            {pageData.items.value.map((c: any, index) => {
                                let category: Postshowreportyear = c;
                                return (
                                    <li className="partners-category-li" key={category.system.id}>
                                        <button
                                            className={`ctaegory-btn-all ${activeCategory === category.system.id ? "category-btn-active" : "category-btn"}`}
                                            onClick={() => handleCategoryClick(category.system.id)}
                                        >
                                            {category.year.value}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {pageData.items.value.map((c: any) => {
                        let category: Postshowreportyear = c;
                        return (
                            <div className={`${activeCategory === category.system.id ? "" : "d-none"} agenda col-12`} id={`agenda_${category.system.id}`} key={category.system.id}>
                                <div className="row">
                                    {category.items.value.map((a: any, index: any) => {
                                        let report: Reportitem = a;
                                        return (
                                            <div className="col-12 col-md-6 col-lg-3 m-b-30 report-wrapper" key={report.system.id}>
                                                <a href={report.reportpdf.value[0].url} target="_blank">
                                                    <div className="report-image" style={{ backgroundImage: `url(${report.image.value[0].url})` }}>
                                                    </div>
                                                    <div className="report-image-content">
                                                        <p>Download</p>
                                                    </div>
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
