
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import Services from '@/modules/Services';

import { Serviceitem } from '@/models/serviceitem';
import Link from 'next/link';
import { Investmentdestinationpagefdi } from '@/models/investmentdestinationpagefdi';
import Head from 'next/head';
import { Buttonitem } from '@/models/buttonitem';

export default function InvestmentDestinations() {

    const [pageData, setPageData] = useState<Investmentdestinationpagefdi | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("investment_destination_2025")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);

                Services.loadFile(
                    `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
                    () => {
                        Services.loadFile(
                            `${Globals.BASE_URL}assets/js/singleCarousel.js`
                        );
                        Services.loadFile(
                            `${Globals.BASE_URL}assets/js/speakerCarousel.js`
                        );
                    }
                );
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />
    }

    const about1 = `The Foreign Direct Investment (FDI) Portfolio at AIM Congress 2025 will focus on the theme "Navigating the Future of FDI: Overcoming Challenges, Seizing New Global Opportunities."As FDI undergoes significant transformations driven by technological advancements, geopolitical shifts, and evolving economic landscapes, this portfolio aims to provide valuable insights into digital economies, green investments, and regional trade agreements, which are pivotal for future growth. `
    const about2 = `Through a strategic approach, the FDI Portfolio will empower participants to tackle emerging challenges while seizing new opportunities in global markets. By fostering collaboration and innovation, we will equip stakeholders with the tools needed to thrive and shape the future of investment. `

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='investment-destination-page'
        >
            <Head>
                <title>{pageData.pageTitle.value}</title>
                <meta name="title" content={pageData.pageTitle.value} />
                <meta name="description" content={pageData.metaDescription.value} />
            </Head>
            <div className="black-replacer-nav">

            </div>
            <div className="container">
                <div className='map-section-wrapper mt-3 '>
                    <img src={pageData.bannerimage.value[0].url} alt="investmentdestinations" className='map-image' />

                    <h2 className='map-heading'>{pageData.bannerheading.value}</h2>
                </div>

                <section className="about-investment-destination">
                    <div className="banner-wrap">
                        <img src="/assets/imgs/fdi/fdi-hero-top.png" alt="" />

                        <span className='heading'>{pageData.aboutHeading.value}</span>
                    </div>

                    <div className="row presentation-guidelines-contents  mt-3">
                        <div className="col-lg-4">
                            <p className='light-text' dangerouslySetInnerHTML={{ __html: pageData.aboutDescription1.value }}></p>
                        </div>
                        <div className="col-lg-4">
                            <p className='light-text' dangerouslySetInnerHTML={{ __html: pageData.aboutDescription2.value }}></p>
                        </div>
                        <div className="col-lg-4">

                            <span className='presentation-guidelines' dangerouslySetInnerHTML={{ __html: pageData.presentationGuidelines.value }} />
                        </div>
                    </div>
                </section>

                <section className='row presentation-guidelines-cta-wrap'>
                    <div className="col-lg-8 mb-3 mb-lg-0"> <h2 className='heading'>{pageData.connectWithUsCtaHeading.value}</h2></div>
                    <div className="col-lg-4 ">
                        <div>
                            {pageData.connectWithUsButton.value.map((m: any, index: number) => {
                                var item: Buttonitem = m;
                                return (
                                    <Link href={item.link.value} key={`connect-btn-${index}`}>
                                        <button className='cta-btn fdi text-white'>{item.name.value}</button>

                                    </Link>
                                )
                            })}

                        </div>
                    </div>
                </section>

                <div className="destination-carousel-section--detail-page">
                    <div className='investment-destination-carousel-wrapper'>



                        <div className='singleCarousel mt-lg-5 mt-3 owl-carousel'>
                            {pageData.investmentPresentationItems.value.map((m: any, index: number) => {
                                var item: Serviceitem = m;
                                return (
                                    <div className='investment-destination-card' key={`investment-destination-${index}`}>

                                        <div className="row g-0">
                                            <div className="col-lg-9">
                                                <h2 className='heading-presentation-carousel'>{pageData.investmentPresentationHeading.value}</h2>
                                            </div>
                                            <div className="col-lg-3 mb-3">
                                                <div className="card-body-investment-destination">


                                                    <p className="name text-dark" >{item.name.value}</p>
                                                    <p className='content' dangerouslySetInnerHTML={{ __html: item.content.value }}></p>
                                                    {/* <div className='mt-4'>
                                                <button className='cta-btn fdi text-white'>Learn More</button>
                                            </div> */}
                                                </div>
                                            </div>


                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-12">
                                                <img src={item.image.value[0]?.url} alt={item.name.value}
                                                    className="investment-destination-image" />
                                            </div>
                                        </div>




                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>

                <div>

                    <div className="bookspot-cta-wrap mb-5">

                        <div className="row booksport-cta p-4 justify-content-center align-items-center h-100">
                            <div className="col-lg-10">
                                <h3>{pageData.bookYourSpotCtaHeading.value}</h3>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    {pageData.bookYourSpotButton.value.map((m: any, index: number) => {
                                        var item: Buttonitem = m;
                                        return (
                                            <Link href={item.link.value} key={`bookspot-${index}`}>

                                                <button className='cta-btn fdi text-white'>{item.name.value}</button>
                                            </Link>
                                        )
                                    })}


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </motion.div>
    )
}
