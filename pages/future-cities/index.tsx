import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import { fdiFAQ } from '@/contants/data';
import { Portfoliopage } from '@/models/portfoliopage';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import Head from 'next/head';
import { FeaturesActivities } from '@/components/Portfolio/FeaturesActivities';
import { Buttonitem } from '@/models/buttonitem';
import Link from 'next/link';
import { Serviceitem } from '@/models/serviceitem';
import { FaRegCheckCircle } from 'react-icons/fa';
import { ImageButton } from '@/models/image_button';
const FutureCities = () => {
    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("future_cities_c00560c")
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
            className='future-cities-page'
        >
            <Head>
                <title>{pageData.pagetitle.value}</title>
                <meta name="title" content={pageData.pagetitle.value} />
                <meta name="description" content={pageData.metadescription.value} />
            </Head>
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} dateVenu={pageData.dateandvenu.value} subHeading={pageData.bannersubheading.value} registerLink={'/register-interest/future-cities'} portfolioColorName="future-cities" />
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
            <FeaturesActivities pageData={pageData} />


            <div className="attributes-section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='section-heading text-start'>{pageData.attributesHeading1.value}</h2>
                        </div>
                    </div>

                    <div className="row mt-4">

                        {pageData.attributesItems1.value.map((m: any, index: number) => {
                            var item: Serviceitem = m;
                            return (
                                <div className="col-lg-6 mb-4" key={`attributes-1-${index}`}>
                                    <div className="attributes-card-1">
                                        <div>
                                            <FaRegCheckCircle color={pageData.brandcolorcode.value} size={25} />
                                        </div>
                                        <div>

                                            <div className="card-head">{item.name.value}</div>
                                            <p className='description' dangerouslySetInnerHTML={{ __html: item.content.value }} />
                                        </div>
                                    </div>

                                </div>
                            )
                        })}


                    </div>

                </div>
            </div>
            <section>

                <div className="target-cta-section ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className='section-heading text-start'>{pageData.ctacardsheading.value}</h2>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="cta-card-items">
                                {pageData.ctacarditems.value.map((m: any, index: number) => {
                                    var item: ImageButton = m;

                                    return (
                                        <div className='cta-card-item' key={`cta-${index}`}>
                                            <img src={item.image.value[0].url} alt={`AIM Congress | Global Manufacturing ${item.name.value}`} className='cta-card-image' />
                                            <div className="overlay-wrap">
                                                <h4 className='heading'>{item.name.value}</h4>
                                                <div>
                                                    <Link href={item.link.value}>

                                                        <button className='cta-btn text-white' style={{ background: pageData.brandcolorcode.value }}>Know More</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='categories-section'>
                <div className="container">
                    <h2 className='section-heading  text-start'>{pageData.attributesHeading1.value}</h2>

                </div>

                <div className='categories-grid mt-4'>
                    {pageData.attributesItems2?.value.map((m: any, index: number) => {
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


                <img src="/assets/imgs/future-cities/future-cities-element.png" alt={pageData.pagetitle.value} className='element-2' />

                <div className="container attribute-2-content">
                    <div className="row">

                        <div className="col-lg-5">

                            <div className="row">
                                <div className="col-12">
                                    <h2 className='section-heading text-white text-start'>{pageData.attributesHeading2.value}</h2>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className="row g-4">
                                    {pageData.attributesItems2.value.map((m: any, index: number) => {
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
                                <h2 className='section-heading text-white text-start'>{pageData.tailendctaheading.value}</h2>
                            </div>

                            <div className="col-12">
                                {pageData.tailendctabutton.value.map((m: any, index: number) => {
                                    var item: Buttonitem = m;
                                    return (
                                        <div className='mt-3' key={`btn-${index}`}>
                                            <Link href={item.link.value}>
                                                <button className='cta-btn text-white advancedManufacturing'>{item.name.value}</button>
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



                <AccordionComponent pageData={pageData} />

            </section>
        </motion.div>
    )
}

export default FutureCities;
