import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Portfoliopage } from '@/models/portfoliopage';

export default function FDIAgenda() {
    const [pageData, setPageData] = useState<Portfoliopage | null>(null);


    useEffect(() => {
        Globals.KontentClient.item("future_finance_portfolio")
            .toObservable()
            .subscribe((response: any) => {

                setPageData(response.item);
            });


    }, []);

    if (!pageData) {
        return <SpinnerComponent />;
    }
    return (
        <div className='portfolio-agenda-wrapper'>
            <div className="inner-banner-section-wrapper"
            >
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/Gradient.jpg" alt="" className='banner-image' />

                <div className="inner-text-container container">
                    <h1 className='banner-heading'>FDI Agenda</h1>
                </div>
            </div>


            <section className='portfolio-agenda-content-wrapper'>
                <div className="container">

                </div>
            </section>
        </div>
    )
}
