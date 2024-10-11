import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Fdiawardpage } from '@/models/fdiawardpage'
import Globals from '@/modules/Globals';
import Services from '@/modules/Services';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Buttonitem } from '@/models/buttonitem';
import { Serviceitem } from '@/models/serviceitem';
import Link from 'next/link';

export default function AwardPage() {
    const [pageData, setPageData] = useState<Fdiawardpage | null>(null)
    useEffect(() => {
        Globals.KontentClient.item("award_page_fdi")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);

            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='fdi-award-page'
        >
            <div className="black-replacer-nav">

            </div>

            <div className="fdi-award-banner" >
                <video className='fdi-award-image' width="100%" autoPlay loop playsInline muted controls={false} preload="auto">
                    <source src={pageData.bannerBackgroundUrl.value} />
                </video>

                <div className="container">
                    <div className='fdi-award-banner'>
                        <div className="fdi-award-banner-content">
                            <h2 className='banner-headingMain'>Celebrating <br /> Global <br /> Investment <br /> Excellence</h2>
                            <p className='banner-content' dangerouslySetInnerHTML={{ __html: pageData.bannerContent.value }}></p>
                        </div>

                    </div>


                </div>

            </div>


            <div className="award-ceremony-section">
                <div className="container">
                    <div className="col-12">
                        <h2 className='section-heading text-white'>{pageData.awardCeremonyHeading.value}</h2>
                        <p className='content' dangerouslySetInnerHTML={{ __html: pageData.awardCeremonyContent.value }}></p>
                        <div className='d-flex justify-content-lg-center mt-3'>
                            {pageData.awardCeremonyCtaButton.value.map((m: any, index: number) => {
                                var item: Buttonitem = m;
                                return (
                                    <Link href={item.link.value} target={item.target.value === 1 ? "_blank" : "_self"} key={`btn-${index}`}>
                                        <button className='cta-btn fdi text-white' >{item.name.value}</button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <section className='guide-lines-section'>
                <div className="container">
                    <h5 className='title'>Guidelines</h5>
                    <h2 className='heading'>AIM Investment Award 2025</h2>

                    <div className="guide-line-wrap row">

                        {pageData.guidelinesitems.value.map((m: any, index: number) => {
                            var item: Serviceitem = m;
                            return (
                                <div className="guidelineitem col-lg-4 pb-3" key={`guidelines-${index}`}>
                                    <p className='count'>0{index + 1}</p>
                                    <h4 className='name'>{item.name.value}</h4>
                                    <p className='content' dangerouslySetInnerHTML={{ __html: item.content.value }}></p>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>

            <div className='award-categories-section'>
                <div className="container">
                    <h2 className='section-heading text-start'>{pageData.awardCategoriesHeading.value}</h2>
                </div>

                <div className='categories-grid mt-4'>
                    {pageData.awardCategoriesItems.value.map((m: any, index: number) => {
                        var item: Serviceitem = m;
                        return (

                            <div className={`categories-card ${index % 2 === 0 ? 'card-black' : 'card-gradient'}`} key={`categories-card-${index}`}>
                                <h4 className='heading'>{item.name.value}</h4>

                            </div>

                        )
                    })}

                </div>
            </div>

            <div className="award-winnners-section"
            >
                <img src={pageData.awardWinnerImage.value[0].url} alt={pageData.awardWinnerHeading.value} className='award-winner-image' />
                <div className="container">
                    <h2 className='winner-heading'>World <br /> Free Zones <br /> Organizations</h2>
                    <h4 className='winner-title'>{pageData.awardWinnerTitle.value}</h4>
                </div>
            </div>

            <div className="bookspot-cta-section">
                <div className="container">
                    <h2 className="section-heading text-white">{pageData.bookspotctaHeading.value}</h2>

                    <div className='d-flex justify-content-lg-center mt-4'>
                        {pageData.bookspotcta.value.map((m: any, index: number) => {
                            var item: Buttonitem = m;
                            return (
                                <Link href={item.link.value} target={item.target.value === 1 ? "_blank" : "_self"} key={`bookspot-${index}`}>
                                    <button className='cta-btn fdi text-white' >{item.name.value}</button>

                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>


        </motion.div>
    )
}
