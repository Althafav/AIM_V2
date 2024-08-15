import Banner from '@/components/FDI/Banner'
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React from 'react'

export default function foriegnDirectInvestment() {

    return (
        <div>
            <Banner />
            <section className='about-portfolio-section-wrapper'>
                <div className="container">
                    <div className="row about-content">
                        <div className="col-12">
                            <h1 className='section-heading'>Mapping the Future of</h1>
                        </div>
                        <div className="col-12">
                            <p className='paragraph'>Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant. </p>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                            <button className='read-more-btn'>Read More</button>
                        </div>
                    </div>
                </div>
            </section>


           <CardGrid/>


            <section className='frequently-asked-questions-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>frequently asked questions (FAQ)</h1>
                        </div>
                    </div>

                    <AccordionComponent />
                </div>
            </section>
        </div>
    )
}
