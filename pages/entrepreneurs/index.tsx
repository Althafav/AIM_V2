
import AccordionComponent from '@/components/UI/AccordinComponent';

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';

import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import Head from 'next/head';
import { FeaturesActivities } from '@/components/Portfolio/FeaturesActivities';
import { Buttonitem } from '@/models/buttonitem';
import Link from 'next/link';
import { Serviceitem } from '@/models/serviceitem';
import { FaRegCheckCircle } from 'react-icons/fa';
import { ImageButton } from '@/models/image_button';
import { EntrepreneurPortfolio } from '@/models/entrepreneur_portfolio';
import Image from 'next/image';
import { Faqitem } from '@/models/faqitem';

export default function ForiegnDirectInvestment() {

    const [pageData, setPageData] = useState<EntrepreneurPortfolio | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("entrepreneur_portfolio")
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='entrepreneurs-page'
        >
            <Head>
                <title>{pageData.pagetitle.value}</title>
                <meta name="title" content={pageData.pagetitle.value} />
                <meta name="description" content={pageData.metadescription.value} />
            </Head>
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0]?.url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} dateVenu={pageData.dateandvenue.value} registerLink={'/register-interest/entrepreneurs'} portfolioColorName="entrepreneurs" />
            <div className="about-component-wrapper" style={{
                backgroundImage: `url(${pageData.aboutbackgroundimage.value[0]?.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="container">
                    <div className="row">
                        <h2 className='section-heading'>{pageData.aboutheading.value}</h2>

                        <p className='paragraph' dangerouslySetInnerHTML={{ __html: pageData.aboutparagraph.value }} />
                    </div>
                </div>
            </div>
            <section>
                <div className="features-activities-section-wrapper">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <h2 className="section-heading">
                                    {pageData.featureheading.value}
                                </h2>
                            </div>





                        </div>

                        <div className="row g-4 mt-3 justify-content-center">
                            {pageData.features.value.map((m: any, index: number) => {
                                var item: Serviceitem = m;
                                return (
                                    <motion.div className="col-lg-3 col-md-6" key={`features-${index}`}>
                                        <motion.div className="features-card" initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
                                            viewport={{ once: true, amount: 0.1 }}>
                                            <Image
                                                width={310}
                                                height={270}

                                                src={item.image?.value[0]?.url}
                                                alt={`feature-${index + 1}`}
                                                className="activities-image-bg"
                                            />

                                            <div className='content-wrapper'>

                                                <p className="features-name">{item.name.value}</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>




            <div className='categories-section'>
                <div className="container">
                    <h2 className='section-heading  text-start'>{pageData.benefitsheading.value}</h2>

                </div>

                <div className='categories-grid mt-4'>
                    {pageData.benefits?.value.map((m: any, index: number) => {
                        var item: Serviceitem = m;
                        return (

                            <div className={`categories-card ${index % 2 === 0 ? 'card-black' : 'card-gradient'}`} key={`categories-card-${index}`}>
                                <h4 className='heading'>{item.name.value}</h4>
                                <div className="overlay-content">

                                    <p className='description' dangerouslySetInnerHTML={{ __html: item.content.value }} />
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>

            <div className="bottom-section">


                <img src="/assets/imgs/entrepreneurs/smes.png" alt={pageData.pagetitle.value} className='element-2' />

                <div className="container attribute-2-content">
                    <div className="row">

                        <div className="col-lg-5">

                            <div className="row">
                                <div className="col-12">
                                    <h2 className='section-heading text-white text-start'>{pageData.focus_sectors_heading.value}</h2>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className="row g-4">
                                    {pageData.focus_sectors_items.value.map((m: any, index: number) => {
                                        var item: Serviceitem = m;
                                        return (
                                            <div className='col-lg-6 ' key={`attributes-2-${index}`}>
                                                <div className="attributes-card-2">
                                                    <h4 className='heading'> {item.name.value}</h4>

                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

                <div className="who-can-participate">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className='section-heading text-white text-start'>
                                    {pageData.whoparticipateheading.value}
                                </h2>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className="row g-4">
                                {pageData.whoparticipateitems.value.map((m: any, index: number) => {
                                    var item: Serviceitem = m;
                                    return (
                                        <div className='col-lg-6' key={`who-can-${index}`}>
                                            <div className="who-can-participate-card">
                                                <FaRegCheckCircle color={pageData.brandcolorcode.value} size={25} />
                                                <h4 className='heading'>{item.name.value}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tailend-section"
                    style={{
                        backgroundImage: `url(${pageData.tailendctaimage.value[0]?.url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                    <div className="container">
                        <div className="row">
                            <div className="col-12 ">
                                <h2 className='section-heading  text-start'>{pageData.tailendctaheading.value}</h2>
                            </div>

                            <div className="col-12">
                                {pageData.tailendctabutton.value.map((m: any, index: number) => {
                                    var item: Buttonitem = m;
                                    return (
                                        <div className='mt-3' key={`btn-${index}`}>
                                            <Link href={item.link.value}>
                                                <button className='cta-btn text-white ' style={{ background: pageData.brandcolorcode.value }}>{item.name.value}</button>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className='frequently-asked-questions-wrapper'>



                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>FAQs</h1>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        {pageData?.faq.value.map((m: any, index: number) => {
                            var item: Faqitem = m;
                            return (
                                <div className="accordion-item" key={item.system.id}>
                                    <h2 className="accordion-header" id={`heading${item.system.id}`}>
                                        <button
                                            className={`accordion-button fs-5 ${index === 0 ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${item.system.id}`}
                                            aria-expanded={index === 0 ? 'true' : 'false'}
                                            aria-controls={`collapse${item.system.id}`}
                                        >
                                            {item.title.value}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${item.system.id}`}
                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                        aria-labelledby={`heading${item.system.id}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: item.content.value,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        )}
                    </div>
                </div>

            </section>
        </motion.div>
    )
}
