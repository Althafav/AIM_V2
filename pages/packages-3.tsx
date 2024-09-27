import { Packages } from '@/contants/packagesData';
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';


interface Portfolio {
    id: number;
    portfolioName: string;
    price: string;
    colorCode: string;
    features: string[];
}

export default function PackagesPage() {
    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio>(Packages[0].portfolio[0]);

    const handlePortfolioChange = (e: any) => {
        const selectedId = parseInt(e.target.value, 10);
        const portfolio = Packages[0].portfolio.find((p) => p.id === selectedId);
        if (portfolio) setSelectedPortfolio(portfolio);
    };


    return (
        <div className='packagesPage3-wrapper'>
            <div className="inner-banner-section-wrapper">
                <img src="/assets/imgs/Gradient.png" alt="" className="banner-image" style={{ width: "100%" }} />

                <div className="inner-text-container">
                    <h1 className="banner-heading">Delegate Pass</h1>
                </div>
            </div>


            <section>
                <div className="deligate-packages">

                <div className="deligate-package-card">
                        <div className="card-head--deligate">
                            <img src="/assets/imgs/Gradient.png" alt="standard-pass" className='pass-gradient-image' />
                            <div className="content-wrap">

                                <div className='left-wrap'>
                                    <span className='price'>{Packages[2].price}</span>
                                    <span className='pass-name mt-3'>{Packages[2].name}</span>

                                </div>
                            </div>

                        </div>

                        <div className="card-body-deligate">
                            <ul className='feature-items'>
                                {Packages[2].features.map((feature: any, index: number) => {
                                    return (
                                        <li className='feature-name-wrap' key={`featuree3-${index}`}><FaCheckCircle color="#D4AF37" /><span className='feature-name'>{feature}</span></li>
                                    )
                                })}
                            </ul>

                            <div className='d-flex justify-content-center mt-5'>
                                <button className='deligate-package-btn' style={{ background: '#D4AF37' }}>Register Now</button>
                            </div>

                        </div>
                    </div>


                    






                    <div className="deligate-package-card">
                        <div className="card-head--deligate">
                            <img src="/assets/imgs/Gradient.png" alt="standard-pass" className='pass-gradient-image' />
                            <div className="content-wrap">

                                <div className='left-wrap'>
                                    <span className='price'>{Packages[1].price}</span>
                                    <span className='pass-name mt-3'>{Packages[1].name}</span>

                                </div>

                            </div>

                        </div>

                        <div className="card-body-deligate">
                            <ul className='feature-items'>
                                {Packages[1].features.map((feature: any, index: number) => {
                                    return (
                                        <li className='feature-name-wrap' key={`featurees-${index}`}><FaCheckCircle color="#202C4C" /><span className='feature-name' >{feature}</span></li>
                                    )
                                })}
                            </ul>

                            <div className='d-flex justify-content-center mt-5'>
                                <button className='deligate-package-btn' style={{ background: '#202C4C' }}>Register Now</button>
                            </div>

                        </div>
                    </div>


                    <div className="deligate-package-card">
                        <div className="card-head--deligate">
                            <img src="/assets/imgs/Gradient.png" alt="standard-pass" className='pass-gradient-image' />
                            <div className="content-wrap">

                                <div className='d-flex'>
                                    <div className='left-wrap'>
                                        <span className='price'>{selectedPortfolio.price}</span>


                                    </div>

                                    <div className="right-wrap">
                                        <span className='label'>Select your preferred portfolio</span>
                                        <select className="form-select " value={selectedPortfolio.id} onChange={handlePortfolioChange}>
                                            {Packages[0].portfolio.map((portfolio: any) => (
                                                <option key={portfolio.id} value={portfolio.id}>
                                                    {portfolio.portfolioName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <p className='pass-name mt-3'>Single Portfolio</p>



                            </div>



                        </div>

                        <div className="portfolio-name-container" style={{background: selectedPortfolio.colorCode}}>
                            <span className='portfolio-name'>{selectedPortfolio.portfolioName}</span>
                        </div>

                        <div className="card-body-deligate">
                            <ul className='feature-items'>
                                {selectedPortfolio.features.map((feature: any, index: number) => {
                                    return (
                                        <li className='feature-name-wrap' key={`feature-name-${index}`}><FaCheckCircle color={selectedPortfolio.colorCode} /><span className='feature-name'>{feature}</span></li>
                                    )
                                })}
                            </ul>

                            <div className='d-flex justify-content-center mt-5'>
                                <button className='deligate-package-btn' style={{ background: selectedPortfolio.colorCode }}>Register Now</button>
                            </div>

                        </div>
                    </div>


                   


                </div>
            </section>
        </div>
    )
}
