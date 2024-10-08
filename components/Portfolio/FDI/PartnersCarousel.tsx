import { Portfoliopage } from '@/models/portfoliopage';
import { Serviceitem } from '@/models/serviceitem';
import React from 'react'


interface PageDataProps {
    pageData: Portfoliopage | null;
}

const PartnersCarousel: React.FC<PageDataProps> = ({ pageData }) => {

    if (!pageData) {
        return <></>;
    }

    return (
        <div className='partner-carousel-wrapper'>
            <div className='portfolio-speaker-carousel owl-carousel'>
                {pageData.keyagendaitems.value.map((m: any, index: number) => {
                    var item: Serviceitem = m;
                    return (
                        <div className='key-players-card'>
                            <div className="card-speaker-item" key={`keyplayers-${index}`}>


                                <img width={175} height={175} src={item.image.value[0].url} alt={item.name.value}
                                    className="speaker-image" />

                                <div className="card-body-speaker">
                                    <p className="name text-dark" >{item.name.value}</p>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PartnersCarousel
