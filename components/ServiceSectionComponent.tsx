import React, { useEffect, useState } from 'react'
import { Serviceitem } from '@/models/serviceitem';
import { Servicepagerevamp } from '@/models/servicepagerevamp';
import Globals from '@/modules/Globals'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeInAnimationVariants } from '@/utils/customAnimation';



export default function ServiceSectionComponent() {
    const [pageData, setPageData] = useState<Servicepagerevamp | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Globals.KontentClient.item("servicepagerevamp")
            .toObservable()
            .subscribe((response: any) => {
                setPageData(response.item);
                setIsLoaded(true);


            });

    }, []);

    if (!isLoaded || pageData === null) {
        return <></>;
    }
    return (
        <section className="services-section-wrapper" id='Our-Services'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-column gap-5">
                        <div className="heading-wrapper">
                            <h2 className="section-heading">{pageData?.heading.value}</h2>
                            <div className="underline" />

                        </div>

                        <p className='text-secondary'
                            dangerouslySetInnerHTML={{
                                __html: pageData.content.value,
                            }}
                        />
                    </div>
                </div>

                <div className="row mt-3 no-gutters justify-content-center">
                    {pageData?.serviceitems.value.map((m: any, index: number) => {
                        var item: Serviceitem = m;
                        return (
                            <motion.div className="col-lg-4 mb-4" key={`service${index}`}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <div className="service-card">
                                    <div className="service-head">
                                        <p>{item.name.value}</p>
                                    </div>
                                    <Image width={300} height={400} src={item.image.value[0].url} alt="service" className="service-img" quality={90}/>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}
