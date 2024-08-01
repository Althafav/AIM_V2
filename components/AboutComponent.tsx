import { Aboutpage } from '@/models/aboutpage';
import Globals from '@/modules/Globals';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function AboutComponent() {

    const [pageData, setPageData] = useState<Aboutpage | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {


        Globals.KontentClient.item("about_page")
            .toObservable()
            .subscribe((response: any) => {
                setPageData(response.item);
                setIsLoaded(true);


            });

    }, []);

    const truncateText = (text: string, wordLimit: number) => {
        return text.split(" ").slice(0, wordLimit).join(" ") + (text.split(" ").length > wordLimit ? "..." : "");
    }


    if (!pageData) {
        return <></>;
    }
    return (
        <section className="about-us-section-wrapper">
            <div className="container-xl">
                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="left-container">
                            <p className="section-heading">
                                Meet the <strong>Skilled Team</strong> of Creation House, Your <strong>Stand Builder</strong> for <strong>Events</strong> and <strong>Exhibitions</strong>
                            </p>

                            <p
                                className="description"
                                dangerouslySetInnerHTML={{ __html: truncateText(pageData.aboutContent.value, 40) }}
                            />
                            <Link href="/about-us" className="read-more">Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="masonry-container">

                            {pageData.aboutImages?.value.map((m: any, index: number) => {

                                let className = "masonry-item";
                                if (index === 0) {
                                    className += " large-item";
                                } else if (index === 1) {
                                    className += " small-item ";
                                } else if (index === 2) {
                                    className += " medium-item";
                                }
                                return (
                                    <div className={className} key={`about-img-${index}`}>
                                        <Image width={400} height={400} src={m.url} alt="" loading="lazy" />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
