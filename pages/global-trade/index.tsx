
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import { fdiFAQ, tradeInnovationFAQ } from '@/contants/data';
import { Portfoliopage } from '@/models/portfoliopage';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { FeaturesActivities } from '@/components/Portfolio/FeaturesActivities';
import { Serviceitem } from '@/models/serviceitem';
import Head from 'next/head';

export default function TradeInnovation() {

    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("global_trade_portfolio")
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
            className='global-trade-page'
        >
            <Head>
                <title>{pageData.pagetitle.value}</title>
                <meta name="title" content={pageData.pagetitle.value} />
                <meta name="description" content={pageData.metadescription.value} />
            </Head>
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} dateVenu={pageData.dateandvenu.value} registerLink={'/register-interest/global-trade'} portfolioColorName="global-trade" />

            {/* <AboutComponent aboutHeading={pageData.aboutheading.value} aboutParagraph={pageData.aboutparagraph.value} /> */}

            <div className="about-component-wrapper" style={{
                backgroundImage: `url(${pageData.aboutbackgroundimage.value[0].url})`,
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

            <div className='categories-section'>
                <div className="container">
                    <h2 className='section-heading  text-start'>Key Benefits of Global Trade Portfolio</h2>
                    <p>The Global Trade Portfolio at AIM Congress 2025 plays a crucial role in fostering international commerce and economic cooperation. Here are some of the key points highlighting its importance: </p>
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

                    {/* <div className="categories-card">
                        <h4 className="heading">
                            Facilitating Global Business Opportunities
                        </h4>

                        <div className="overlay-content">

                            <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere hic, quis amet neque voluptas enim optio placeat dolorum non ducimus quaerat earum cupiditate voluptatum accusamus praesentium fugiat autem vitae similique?</p>
                        </div>



                    </div> */}



                </div>
            </div>



            <section className='frequently-asked-questions-wrapper'>


                <AccordionComponent pageData={pageData} />

            </section>
        </motion.div>
    )
}
