import { Portfoliopage } from '@/models/portfoliopage';
import { Serviceitem } from '@/models/serviceitem';
import { Speaker } from '@/models/speaker';
import Globals from '@/modules/Globals';
import JsLoader from '@/modules/JsLoader';
import Image from 'next/image';
import React, { useEffect } from 'react'


interface PageDataProps {
    pageData: Portfoliopage | null;
}

const InvestmentDestinationCarousel: React.FC<PageDataProps> = ({ pageData }) => {
  

    if (!pageData) {
        return <></>;
    }

    console.log("investor des", pageData)

    return (
        <div className='investment-destination-carousel-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='section-heading text-center'> {pageData.fdiInvestmentDestinationHeading.value}</h2>
                    </div>
                </div>

                <div className='singleCarousel mt-lg-5 mt-3 owl-carousel'>
                    {pageData.fdiInvestmentDestinationItems.value.map((m: any, index: number) => {
                        var item: Serviceitem = m;
                        return (
                            <div className='investment-destination-card' key={`investment-destination-${index}`}>

                                <div className="row">
                                    <div className="col-4">
                                        <div className="card-body-investment-destination">
                                            <p className="name text-dark" >{item.name.value}</p>
                                            <p className='content' dangerouslySetInnerHTML={{ __html: item.content.value }}></p>
                                            <div className='mt-4'>
                                                <button className='cta-btn fdi text-white'>Learn More</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-8">
                                        <Image width={858} height={483} src={item.image.value[0]?.url} alt={item.name.value}
                                            className="investment-destination-image" />
                                    </div>
                                </div>




                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default InvestmentDestinationCarousel;
