import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Buttonitem } from '@/models/buttonitem';
import { Startuppitchpage } from '@/models/startuppitchpage';
import Globals from '@/modules/Globals';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function PitchPage() {
    const [pageData, setPageData] = useState<Startuppitchpage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("startuppitchpage")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);



    if (!pageData) {
        return <SpinnerComponent />;
    }

    const paragrah = `AIM Congress's Pitch Competition is a dynamic platform that helps innovative entrepreneurs and companies take their ideas to the next level. This high-stakes competition offers up-and-coming businesses a one-of-a-kind chance to showcase their creative ideas to a renowned panel of judges made up of mentors, top investors, and business executives. After a rigorous selection process, participants will present their ideas live to the audience, showcasing their originality, marketability, and strategic vision. Along with significant cash prizes and investment prospects, the tournament provides tremendous visibility and opportunities to network with important players. You can accelerate your growth trajectory, create lasting connections, and receive insightful feedback by taking part. Take advantage of this opportunity to bring your concept to life and leave a lasting impression at AIM Congress `
    return (
        <div className='pitch-page-wrapper'>
            <div className="inner-banner-section-wrapper">
                <div className="video-wrapper">
                    <video autoPlay loop muted controls={false} preload="auto" className='pitch-banner-video'>
                        <source src={pageData.videolink.value} />
                    </video>
                </div>
            </div>

            <div className='criteria-pitch-section'>

                <div className=" inner-text-container">
                    <div className="row gx-5">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img src={pageData.aboutimage.value[0].url} alt="" className='about-pitch-bg-image ' />
                        </div>
                        <div className="col-lg-6">
                            <div className="criteria-wrapper">
                                <h2 className='heading'>Ready to Shine? <br />Here’s What You Need!</h2>
                                <p className='paragraph' dangerouslySetInnerHTML={{ __html: pageData.criteriacontent.value }} />

                                <div className='d-flex justify-content-end'><Link href="/startup/startup-register">
                                    <button className='startup-btn'>REGISTER NOW</button>
                                </Link></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div className='startup-conveyor-cta-wrapper'

            >




                <div className="row gx-5">
                    <div className="col-lg-6">
                        <div className='converyor-content-wrapper'>
                            <h2 className='heading'>Pitch to 5 Investors in 50 Minutes <br /> Exclusive for Exhibitors!</h2>
                            <p className='' dangerouslySetInnerHTML={{ __html: pageData.genericsectionctacontent.value }} />
                            <div>

                                {pageData.genericsectionctabutton.value.map((m: any, index: number) => {
                                    var item: Buttonitem = m;
                                    return (
                                        <Link href={item.link.value} key={`unicorn-cta-${index}`}>

                                            <button className='cta-btn'>{item.name.value}</button>
                                        </Link>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src={pageData.genericsectionctabackgroundimage.value[0].url} alt="" className='startup-conveyor-bg-image ' />
                    </div>




                </div>


            </div>

            <div className='unicorn-cta-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='big-heading'>In Search of <br />Billion Dollar Idea!</h2>

                        </div>

                    </div>
                </div>
                <img src="/assets/imgs/Unicorn Back.jpg" alt="" className='back-unicorn' />

                <img src="/assets/imgs/Unicorn Front.png" alt="" />

                <div className="container d-flex justify-content-lg-end">
                    <div className="text-container-wrapper">
                        <h3>{pageData.unicornsectionctasubheading.value}</h3>

                        {pageData.unicornsectionctabutton.value.map((m: any, index: number) => {
                            var item: Buttonitem = m;
                            return (
                                <Link href={item.link.value} key={`unicorn-section-cta-${index}`}>

                                    <button className='cta-btn'>{item.name.value}</button>
                                </Link>
                            )
                        })}

                    </div>

                </div>

            </div >




            <div className='tailend-wrapper'
                style={{
                    backgroundImage: `url('${pageData.tailendbackgroundimage.value[0]?.url}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "120vh",
                    width: "100%",
                    position: "relative",
                }}
            >



                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">

                            <h2 className='tailend-heading'>{pageData.tailendheading.value}</h2>
                        </div>



                    </div>

                </div>

            </div>
        </div>
    )
}
