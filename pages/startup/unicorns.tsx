import PortfolioBanner from '@/components/Portfolio/PortfolioBanner'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { UnicornBenefits } from '@/contants/startupData'
import Link from 'next/link'
import Globals from '@/modules/Globals'
import SpinnerComponent from '@/components/UI/SpinnerComponent'
import { Startupunicornpage } from '@/models/startupunicornpage'

export default function UnicornsPage() {

    const [pageData, setPageData] = useState<Startupunicornpage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("startupunicornpage")
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
            className='unicorns-page-wrapper'

        >
            <PortfolioBanner bannerImageSrc={pageData.herosectionimage.value[0].url} Heading={pageData.herosectionheading.value} subHeading={pageData.herosectionheading.value} registerLink={'/register-interest/startup'} portfolioColorName="startup" />

            <section className='about-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <div className="img-container-wrapper">
                                <img src={pageData.aboutimage.value[0]?.url} alt="aim unicorn" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div>
                                <h2 className='section-heading text-start'>{pageData.aboutheading.value}</h2>
                                <p className='description' style={{ maxWidth: "1000px" }} dangerouslySetInnerHTML={{ __html: pageData.aboutcontent.value }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='container unicorn-benefits-wrapper'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            {UnicornBenefits.map((item: any, index: number) => {
                                return (
                                    <div className='col-lg-4 col-md-6 mb-3' key={`unicorn-benefits-${index}`}>
                                        <div className='benefits-card-item h-100'>
                                            <p className='name'>{item.name}</p>
                                            <p className='content'>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={pageData.keybenefitimage.value[0]?.url} alt="Aim unicorn" className='growth-icon' />
                    </div>


                </div>
            </section>

            <section className='sustainable_unicorn'>
                <div className="row g-0">
                    <div className="col-lg-6 left-seciton">

                        <div className="container">
                            <div className="row ">
                                <div className="col-12 ">

                                    <h2 className='heading'>{pageData.forecastinfoheading.value}</h2>

                                    <p className='content' dangerouslySetInnerHTML={{ __html: pageData.forecastinfocontent.value }} />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-6">
                        <img src={pageData.forecastimage.value[0]?.url} alt="unicorn" className='h-100 cover' />
                    </div>
                </div>
            </section>


            <section className='cta-card-wrapper'>
                <div className="container cta-card-container">
                    <div className="row cta-card-row">
                        <div className="col-12">
                            <h2 className='heading'>Elevate your Success with <br />AIM 2025 Pitch Competition</h2>
                        </div>
                        <div className="col-12 mt-3">
                            <Link href="/startup/startup-register">
                                <button className='startup-btn'>Participate</button>

                            </Link>
                        </div>
                    </div>
                </div>
                <img src="/assets/imgs/speaking-lady.png" alt="" className='speaking-lady-image d-none d-lg-block' />
            </section>
        </motion.div>
    )
}
