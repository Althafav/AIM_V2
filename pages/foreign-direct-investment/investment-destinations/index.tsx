
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

import Globals from '@/modules/Globals';
import { Portfoliopage } from '@/models/portfoliopage';
import SpinnerComponent from '@/components/UI/SpinnerComponent';



import Services from '@/modules/Services';
import InvestmentDestinationCarousel from '@/components/Portfolio/FDI/InvestmentDestinationCarousel';
import Image from 'next/image';
import { Serviceitem } from '@/models/serviceitem';

export default function InvestmentDestinations() {



    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("fdi_portfolio")
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
            <div className="black-replacer-nav">

            </div>
            <div className="container">
                <div className='map-section-wrapper mt-3 '>
                    <img src="/assets/imgs/fdi/World Map.png" alt="investmentdestinations" className='map-image' />

                    <h2 className='map-heading'>Explore Global Investment Opportunities</h2>
                </div>

                <section className="about-investment-destination">
                    <div className="banner-wrap">
                        <img src="/assets/imgs/fdi/fdi-hero-top.png" alt="" />

                        <span className='heading'>Investment Destinations</span>
                    </div>

                    <div className="row presentation-guidelines-contents  mt-3">
                        <div className="col-lg-4">
                            <p className='light-text'>The AIM Investment Destination Presentation is a highly anticipated and prominent feature of the event, serving as a dedicated platform for countries, cities, and local government units from around the globe to showcase their unique investment opportunities and key projects to a diverse audience of potential investors and business partners. This integral component of the event allows participants to effectively communicate their strategic advantages, fostering international collaboration and investment</p>
                        </div>
                        <div className="col-lg-4">
                            <p className='light-text'>During these presentations, representatives from the participating entities have the invaluable opportunity to highlight essential economic features and compelling details about their investment environment. They showcase the unique advantages of investing in their regions, presenting them as attractive and lucrative destinations for trade and investment</p>
                        </div>
                        <div className="col-lg-4">
                            <p className='guide-head'>Presentation Guidelines</p>
                            <ul className='presentation-guidelines'>
                                <li>Each presentation will run for a duration of 60 minutes.  </li>
                                <li>Presenters have the flexibility to create their own program topics, speakers, format, etc.  </li>
                                <li>Promotion and Invitations will be done based on the target audience (to be agreed with the presenter).  </li>
                                <li>A recorded video of the presentation will be available on the AIM website throughout the year. </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='row presentation-guidelines-cta-wrap'>
                    <div className="col-lg-8 mb-3 mb-lg-0"> <h2 className='heading'>Showcase Global Investment Opportunities, Drive Partnerships</h2></div>
                    <div className="col-lg-4 ">
                        <div>
                            <button className='cta-btn fdi text-white'>Connect with Us</button>
                        </div>
                    </div>
                </section>

                <div className="destination-carousel-section--detail-page">
                    <div className='investment-destination-carousel-wrapper'>



                        <div className='singleCarousel mt-lg-5 mt-3 owl-carousel'>
                            {pageData.fdiInvestmentDestinationItems.value.map((m: any, index: number) => {
                                var item: Serviceitem = m;
                                return (
                                    <div className='investment-destination-card' key={`investment-destination-${index}`}>

                                        <div className="row g-0">
                                            <div className="col-lg-9">
                                                <h2 className='heading-presentation-carousel'>AIM 2024
                                                    Investment presentations</h2>
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

                <section>
                    <div className="container">
                        <div className="bookspot-cta">

                        </div>
                    </div>
                </section>
            </div>

        </motion.div>
    )
}
