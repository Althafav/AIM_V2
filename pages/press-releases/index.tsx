import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Pressrelaseitem } from '@/models/pressrelaseitem';
import { Pressrelease } from '@/models/pressrelease';
import Globals from '@/modules/Globals';
import React, { useEffect, useState } from 'react'
import Helper from "@/modules/Helper";

export default function PressRelease() {
    const [pageData, setPageData] = useState<Pressrelease | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("press_release_page")
            .toObservable()
            .toPromise()
            .then((r: any) => {
                setPageData(r.item)
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />;
    }

    return (
        <div>
            <div className="inner-banner-section-wrapper">
                <img

                    src="/assets/imgs/postshow-banner-bg.jpg" alt="" className='banner-image' />

                <div className="inner-text-container">
                    <h1 className='banner-heading'>Press Release</h1>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="col-12">
                        <div className="row">
                            {
                                pageData.pressreleaseitem.value.map((r: any, index: number) => {
                                    var report: Pressrelaseitem = r;
                                    return (

                                        <div className="col-12 col-md-6 col-lg-4 m-b-30 report-wrapper" key={`press-release-${index}`}>
                                            <a href={`/press-releases/press-release/${Helper.formatUrlParameter(
                                                report.name.value
                                            )}`} target="_blank">
                                                <div className="report-image" style={{ background: "url(" + report.image.value[0].url + ")" }}>

                                                </div>
                                                <p className="text-center p-t-10 f-600" style={{ color: "black" }}>{report.name.value}</p>
                                            </a>
                                        </div>


                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
