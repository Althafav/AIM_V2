import Globals from '@/modules/Globals';
import JsLoader from '@/modules/JsLoader';
import React, { useEffect } from 'react'

export default function ParticipateCarousel() {
    useEffect(() => {
        // Load external JS scripts only once

        JsLoader.loadFile(`${Globals.BASE_URL}assets/js/owl.carousel.min.js`, () => {
            JsLoader.loadFile(`${Globals.BASE_URL}assets/js/verticalCarousel.js`, () => {


            });
        });



        return () => {
            $('.ParticipateCarouselFF').trigger('destroy.owl.carousel');
        };
    }, []);
    return (
        <div className='participate-carousel-wrapper'>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6">
                        <h2>Who can <br />
                            participate?</h2>

                        <div>
                            <button className='future-finance-cta-btn'>Participate Now</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <div className="ParticipateCarouselFF owl-carousel">
                                    <div className="card text-dark h-50 bg-secondary w-50">Text</div>
                                    <div className="card h-50 bg-secondary w-50">Text</div>
                                    <div className="card h-50 bg-secondary w-50">Text2</div>
                                    <div className="card h-50 bg-secondary w-50">Text3</div>
                                    <div className="card h-50 bg-secondary w-50">Tex4</div>
                                    <div className="card h-50 bg-secondary w-50">Tex5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
