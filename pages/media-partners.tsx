import React from 'react'
import { motion, useInView } from "framer-motion";
import { Partnerspage } from '@/models/partnerspage';
import Globals from '@/modules/Globals';
import MediaPartnerComponent from '@/components/MediaPartners';
import Head from 'next/head';
import SpinnerComponent from '@/components/UI/SpinnerComponent';


function ListPage({ data }: { data: Partnerspage }) {

    if (!data) {
        return <SpinnerComponent />;
    }
    return (
        <div className='media-partners-page'>
            <Head>
                <title>AIM Congress | Media Partners</title>
                <meta name="title" content="AIM Congress | Media Partners" />
                <meta name="description" content="AIM Congress | Media Partners" />
            </Head>
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/media-partners-banner-bg.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Media Partners</h1>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <MediaPartnerComponent />
                    </div>
                </div>
            </section>
        </div>
    )
}



export async function getStaticProps() {
    const datasourceStr: string = await Globals.KontentClient.item("partners_page_2024")
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

