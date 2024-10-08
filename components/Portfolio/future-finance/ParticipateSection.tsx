
import React from 'react';

import { FaCheck } from 'react-icons/fa';
import { Serviceitem } from '@/models/serviceitem';
import { Portfoliopage } from '@/models/portfoliopage';



interface PageDataProps {
    pageData: Portfoliopage | null;
}

const ParticipateSection: React.FC<PageDataProps> = ({ pageData }) => {


    if (!pageData) {
        return <></>;
    }


    return (
        <>
            <div className='participate-section-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-lg-center justify-content-md-start justify-content-center">

                            <div>

                                <h2 className='mb-4 heading'>{pageData.whoparticipateheading.value}</h2>

                            </div>

                        </div>

                    </div>

                    <div className="whocanparticipate-item-wrapper mt-4">

                        <div className='row g-3'>
                            {pageData.whoparticipateitems.value.map((m: any, index: number) => {
                                var item: Serviceitem = m;
                                return (
                                    <div className="col-lg-6" key={`whocan-${index}`}>
                                        <div className='whocanparticipate-card '>
                                            <h5 className='name d-flex gap-4 '><FaCheck />{item.name.value}</h5>
                                        </div>
                                    </div>

                                )

                            })}
                        </div>


                        {/* <div className="d-flex justify-content-lg-center mt-5">
                            <Link href="/register-interest/future-finance">
                                <button className='cta-btn text-white' >Participate Now</button>

                            </Link>
                        </div> */}


                    </div>
                </div>
            </div>

            <section>
                <div className="why-participate-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className='section-heading'>
                                    {pageData.whyparticipateheading.value}
                                </h2>
                            </div>

                        </div>

                        <div className="row mt-4 g-3">
                            {pageData.whyparticipateitems.value.map((m: any, index: number) => {
                                var item: Serviceitem = m;
                                return (
                                    <div className='col-lg-3 col-md-6' key={`whyparticipate-${index}`}>
                                        <div className="why-participate-card">
                                            <img src={item.image.value[0].url} alt={item.name.value} className='why-participate-img' />
                                            <div className="name mt-3">{item.name.value}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>



        </>

    );
}


export default ParticipateSection;
