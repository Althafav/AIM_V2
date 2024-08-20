import AccordionComponent from '@/components/UI/AccordinComponent'
import { BenefitsOfParticipatingInAim2025 } from '@/contants/aimbenefits'

import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function EventHighlights() {
    const aboutAim1 = "The Annual Investments Meeting (AIM) 2025 is dedicated to advancing the future of globalized investment and its industrial impact by charting the course for emerging investment trends. "
    const aboutAim2 = "AIM 2025 aims to create a more balanced global framework, identify opportunities within a dynamic economic environment, and unlock the potential of every business, country, and region. "
    const aboutAim3 = "By fostering economic diversification and providing actionable insights into emerging trends, AIM 2025 will empower investors to make strategic, informed decisions that align with their goals and requirements as well as equip participants to navigate a rapidly evolving landscape, ensuring that their investment choices are both prudent and aligned with long-term objectives."

    const aboutAbuDhabi = "Where the allure of tradition meets the pulse of innovation. As we prepare to host AIM 2025, immerse yourself in a city where ancient culture seamlessly intertwines with cutting-edge advancements. Envision yourself exploring vibrant souks and contemporary marvels, where every corner unveils a new experience. From the serene beauty of the Corniche to the dynamic energy of cutting-edge developments, Abu Dhabi transcends being merely a destination—it's an odyssey of discovery and inspiration. Join us in experiencing a city that embodies both timeless elegance and forward-thinking vision, setting the stage for an unforgettable AIM 2025. "
    return (
        <div className='event-highlights-page-wrapper'>
            <div className="banner-section-wrapper">

                <video width="100%" autoPlay loop muted controls={false} preload="auto">
                    <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/AIM 2025 Bigger Video 1.mp4" type="video/mp4" className='banner-video-event-highlights' width="100%" />
                </video>
            </div>




            <div className='column-section-1' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className='section-head'>THEME OF THE YEAR 2025</p>

                        </div>

                        <div className="col-lg-6">
                            <p className='theme-subHead'>MAPPING THE FUTURE OF GLOBAL INVESTMENT </p>
                            <p className='theme-mainHead'>THE NEW WAVE OF A GLOBALIZED INVESTMENT LANDSCAPE: TOWARDS A NEW BALANCED WORLD STRUCTURE </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mb-5">

                <div className="row">
                    <div className="col-lg-4"><p>{aboutAim1}</p></div>
                    <div className="col-lg-4"><p>{aboutAim2}</p></div>
                    <div className="col-lg-4"><p>{aboutAim3}</p></div>
                </div>
            </div>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='section-heading'>Hosting AIM 2025 in Abu Dhabi </h2>


                        </div>

                        <div className="col-12">
                            <p>{aboutAbuDhabi}</p>
                        </div>

                        <div className="col-12 mt-3">
                            <Link href="https://visitabudhabi.ae/en">
                                <button className='text-primary'>Experience Abu Dhabi | Travel and Tourism | Visit Abu Dhabi </button>

                            </Link>

                            <div className="date-venue mt-3">
                                <p>7 – 9 April 2025

                                </p>
                                <p> ADNEC, Abu Dhabi, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='section-heading'>Key Benefits of Participating in AIM Congress 2025 </h2>
                        </div>




                        {BenefitsOfParticipatingInAim2025.map((benefit, benefitIndex) => (
                            <div className="row" key={`benefit-${benefitIndex}`}>
                                <div className="col-12 mt-4">
                                    <p className='benefit-title'>{benefit.heading}</p>
                                </div>

                                {benefit.items.map((item, itemIndex) => (
                                    <div className="col-lg-3 mb-4" key={`item-${itemIndex}`}>
                                        <div className="card benefits-card shadow h-100">
                                            <p className='name'>{item.name}</p>
                                            <p className='description'>{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section >
                <Marquee>

                    <p className='stay-tuned'>Stay tuned—our AGENDA is coming, packed with fresh perspectives and groundbreaking ideas! </p>

                </Marquee>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-lg-center flex-column gap-2 align-items-lg-center">
                            <p className='join-us-caption'>Join us at AIM Congress 2025</p>
                            <p className='join-us-caption-2'>Empowering tomorrow, today!</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}
