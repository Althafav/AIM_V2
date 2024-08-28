import React from 'react'
import { motion, useInView } from "framer-motion";
import { Partnerspage } from '@/models/partnerspage';
import Globals from '@/modules/Globals';
import Head from 'next/head';
import PartnersComponent from '@/components/PartnersComponent';
import SpinnerComponent from '@/components/UI/SpinnerComponent';

function ListPage({ data }: { data: Partnerspage }) {

    if (!data) {
        return <SpinnerComponent />;
    }
    return (

        <React.Fragment>

            <div className='our-partners-page'>

                <div className="inner-banner-section-wrapper">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        src="/assets/imgs/fdi-banner-bg.png" alt="" className='banner-image' />

                    <div className="inner-text-container">
                        <h1 className='banner-heading'>AIM Congress 2024 Partners</h1>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <PartnersComponent codename={codename} />
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>

    )
}



var codename = "partners_page_2024";

export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item(codename)
        .languageParameter(Globals.CURRENT_LANG_CODENAME)
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.item);
        });

    const data: Partnerspage = JSON.parse(datasourceStr);

    return {
        props: {
            data,
        },
        revalidate: 120,
    };
}


export default ListPage;

