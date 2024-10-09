
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

import Globals from '@/modules/Globals';
import { Portfoliopage } from '@/models/portfoliopage';
import SpinnerComponent from '@/components/UI/SpinnerComponent';



import Services from '@/modules/Services';

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
                <div className='map-section-wrapper  '>
                    <img src="/assets/imgs/fdi/World Map.png" alt="investmentdestinations" className='map-image' />

                    <h2 className='map-heading'>Explore Global Investment Opportunities</h2>
                </div>
            </div>

        </motion.div>
    )
}
