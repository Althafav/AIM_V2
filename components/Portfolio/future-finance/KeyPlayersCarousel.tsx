import { Partnerspageitem } from '@/models/partnerspageitem';
import { Portfoliopage } from '@/models/portfoliopage';
import { Serviceitem } from '@/models/serviceitem';
import React from 'react'


interface PageDataProps {
    pageData: Portfoliopage | null;
}

const KeyPlayersCarousel: React.FC<PageDataProps> = ({ pageData }) => {

    if (!pageData) {
        return <></>;
    }

    return (
        <div className='partner-carousel-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='section-heading text-center'> {pageData.keyagendaheading.value}</h2>
                    </div>
                </div>
            </div>
            <div className='portfolio-speaker-carousel owl-carousel mt-3'>
                {pageData.keyplayersitems.value.map((m: any, index: number) => {
                    var item: Partnerspageitem = m;
                    return (
                        <div className='key-players-card' key={`keyplayers-${index}`}>
                            <div className="card-speaker-item" >
                                <img width={175} height={175} src={item.logo?.value[0]?.url} alt={item.name.value}
                                 style={{objectFit: "contain", marginRight: "10px"}}/>

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

export default KeyPlayersCarousel;
