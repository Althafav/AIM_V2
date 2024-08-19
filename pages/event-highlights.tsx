import React from 'react'

export default function EventHighlights() {
    return (
        <div className='event-highlights-page-wrapper'>
            <div className="banner-section-wrapper">

                <video width="100%" autoPlay loop muted controls={false} preload="auto">
                    <source src="/assets/videos/AIM 2025 Bigger Video 1.mp4" type="video/mp4" className='banner-video' width="100%" />
                </video>
            </div>




            <div className='column-section-1'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className='section-head'>THEME OF THE YEAR 2025</p>

                        </div>

                        <div className="col-6">
                            <p className='theme-subHead'>MAPPING THE FUTURE OF GLOBAL INVESTMENT </p>
                            <p className='theme-mainHead'>THE NEW WAVE OF A GLOBALIZED INVESTMENT LANDSCAPE: TOWARDS A NEW BALANCED WORLD STRUCTURE </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">

                <p>The Annual Investments Meeting (AIM) 2025 is dedicated to advancing the future of globalized investment and its industrial impact by charting the course for emerging investment trends. AIM 2025 aims to create a more balanced global framework, identify opportunities within a dynamic economic environment, and unlock the potential of every business, country, and region. By fostering economic diversification and providing actionable insights into emerging trends, AIM 2025 will empower investors to make strategic, informed decisions that align with their goals and requirements as well as equip participants to navigate a rapidly evolving landscape, ensuring that their investment choices are both prudent and aligned with long-term objectives. </p>
            </div>

        </div>
    )
}
