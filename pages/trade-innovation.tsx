
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
        >
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} dateVenu={pageData.dateandvenu.value} portfolioColorName="trade-innovation" />

            <AboutComponent aboutHeading={pageData.aboutheading.value} aboutParagraph={pageData.aboutparagraph.value} />

            <CardGrid pageData={pageData} />




            <section className='frequently-asked-questions-wrapper'>


                <AccordionComponent pageData={pageData} />

            </section>
        </motion.div>
    )
}
