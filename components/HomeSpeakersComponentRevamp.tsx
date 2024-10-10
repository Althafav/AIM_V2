import { Portfoliopage } from '@/models/portfoliopage';
import { Speaker } from '@/models/speaker';
import { Speakers2024 } from '@/models/speakers2024';
import Globals from '@/modules/Globals';
import JsLoader from '@/modules/JsLoader';
import Services from '@/modules/Services';
import React, { useEffect, useState } from 'react'



export default function HomeSpeakersComponentRevamp() {
    const [speakerData, setSpeakerData] = useState<Speakers2024 | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("speakers_2024")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setSpeakerData(response.item);

                Services.loadFile(
                    `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
                    () => {

                        Services.loadFile(
                            `${Globals.BASE_URL}assets/js/speakerCarousel.js`
                        );

                    }
                );
            });
    }, []);

    if (!speakerData) {
        return <></>;
    }



    return (
        <div className='speaker-component-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h2 className='section-heading text-center' style={{maxWidth: "800px"}}> {speakerData.heading.value}</h2>
                    </div>
                </div>

                <div className='home-speaker-carousel mt-lg-5 mt-3 owl-carousel'>
                    {speakerData.items.value.map((m: any, index: number) => {
                        var item: Speaker = m;
                        return (
                            <a
                                href={`#`}
                                style={{ color: "unset" }}
                                key={`speaker-${index}`}
                            >
                                <div className="card-speaker-item">
                                    <div className="speaker-image-wrapper">

                                        <img width={290} height={280} src={item.image.value[0].url} alt={item.name.value}
                                            className="speaker-image" />
                                    </div>
                                    <div className="card-body-speaker">
                                        <p className="name">{item.name.value}</p>
                                        <p className="designation">{item.designation.value}</p>    
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

