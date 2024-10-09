import { Portfoliopage } from '@/models/portfoliopage';
import { Speaker } from '@/models/speaker';
import Globals from '@/modules/Globals';
import JsLoader from '@/modules/JsLoader';
import Image from 'next/image';
import React, { useEffect } from 'react'


interface PageDataProps {
    pageData: Portfoliopage | null;
}

const SpeakersCarouselComponent: React.FC<PageDataProps> = ({ pageData }) => {


    if (!pageData) {
        return <></>;
    }



    return (
        <div className='partner-carousel-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='section-heading text-center'> {pageData.speakersheading.value}</h2>
                    </div>
                </div>

                <div className='portfolio-speaker-carousel mt-lg-5 mt-3 owl-carousel'>
                    {pageData.speakersitems.value.map((m: any, index: number) => {
                        var item: Speaker = m;
                        return (
                            <div className='key-players-card' key={`speaker-item-${index}`}>
                                <div className="card-speaker-item">

                                    <img width={175} height={175} src={item.image.value[0]?.url} alt={item.name.value}
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

        </div>
    )
}

export default SpeakersCarouselComponent;
