import React from 'react'

const CardGrid = () => {
    const cardData = [
        { title: "Economic Growth",  imageUrl: "/assets/imgs/economic-growth.png" },
        { title: "Sustainability Focus",  imageUrl: "/assets/imgs/sustainability-focus.png" },
        { title: "Market Expansion",  imageUrl: "/assets/imgs/market-expansion.png" },
        { title: "Resource Acquisition",  imageUrl: "/assets/imgs/resource-acquisition.png" },
        { title: "Geopolitical Influences",  imageUrl: "/assets/imgs/resource-acquisition.png" },
        { title: "Risk Diversification",  imageUrl: "/assets/imgs/resource-acquisition.png" },
        { title: "Technology & Innovation",  imageUrl: "/assets/imgs/technology-innovation.png" },
        { title: "Digital Transformation",  imageUrl: "assets/digital-transformation.png" },
    ];
    return (
        <section className='key-benefits-section-wrapper '>

            <div className="section-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='section-heading'>Portfolio Strategically Designed for your Need </h1>
                    </div>
                    <div className="col-12">
                        <p className='sub-heading'>Kicker Line will be here ssdff asffsfsa asdasffasf sad</p>
                    </div>
                </div>


                <div className="row key-benefits mt-4">

                    <div className="masonry-container">
                        <div className="masonry-column">
                            <div className="card card-1">
                                <img src="/assets/imgs/economic-growth.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-2">
                                <img src="/assets/imgs/resources.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                        <div className="masonry-column">
                            <div className="card card-3">
                                <img src="/assets/imgs/sustainable-focus.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-4">
                                <img src="/assets/imgs/gp-influence.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-5">
                                <img src="/assets/imgs/risk-diversification.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                        <div className="masonry-column">
                            <div className="card card-6">
                                <img src="/assets/imgs/gpshift.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-7">
                                <img src="/assets/imgs/technology-innovation.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                        <div className="masonry-column">
                            <div className="card card-8">
                                <img src="/assets/imgs/market-expansion.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-9">
                                <img src="/assets/imgs/digital-transformation.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardGrid
