import Globals from '@/modules/Globals';
import JsLoader from '@/modules/JsLoader';
import React from 'react';
import VerticalCarousel from './VerticalCarousel';

export default function ParticipateCarousel() {
    const items = [
        "Ministries of Finance & Central Banks",
        "Digital Assets, Blockchain & Brokerage Firms",
        "Cybersecurity & Blockchain technology companies",
        "Ministries of Finance & Central Banks",
        "Digital Assets, Blockchain & Brokerage Firms",
        "Cybersecurity & Blockchain technology companies",
        "Ministries of Finance & Central Banks",
        "Digital Assets, Blockchain & Brokerage Firms",
        "Cybersecurity & Blockchain technology companies",
        // Add more items as needed
    ];

    return (
        <div className='participate-carousel-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-lg-center">

                        <div>

                            <h2 className='mb-4 heading'>Who can <br />
                                participate?</h2>

                            <div className="mt-5 d-none d-lg-block">
                                <button className='future-finance-cta-btn'>Participate Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <VerticalCarousel items={items} />

                        <div className="mt-5 d-block d-lg-none">
                            <button className='future-finance-cta-btn'>Participate Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
