import { featureSet, Packages } from '@/contants/packagesData';
import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

// Define types for the packages data
interface Portfolio {
    id: number;
    portfolioName: string;
    price: string;
    features: string[];
}

const PackageTable = () => {
    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio>(Packages[0].portfolio[0]);

    const handlePortfolioChange = (e: any) => {
        const selectedId = parseInt(e.target.value, 10);
        const portfolio = Packages[0].portfolio.find((p) => p.id === selectedId);
        if (portfolio) setSelectedPortfolio(portfolio);
    };

    return (
        <div className="packagesPage-wrapper">
            <div className="inner-banner-section-wrapper">
                <img src="/assets/imgs/Gradient.png" alt="" className="banner-image" style={{ width: "100%" }} />

                <div className="inner-text-container">
                    <h1 className="banner-heading">Delegate Pass</h1>
                </div>
            </div>

            <div className="container">
                <section className="packages">
                    <div className="package-card-wrapper">
                        {/* Selected Portfolio (Card 1) */}
                        <div className="package-card standard-card">
                            <div className="package-name mb-1">Standard Pass</div>
                            <div className="d-flex align-items-center gap-4">
                                <div className="package-price">{selectedPortfolio.price}</div>

                                <select className="form-select" value={selectedPortfolio.id} onChange={handlePortfolioChange}>
                                    {Packages[0].portfolio.map((portfolio: any) => (
                                        <option key={portfolio.id} value={portfolio.id}>
                                            {portfolio.portfolioName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <ul className="feature-list">
                                {featureSet.map((feature, index) => (
                                    <li key={index} className="feature-item">

                                        <span className='feature-name'> {feature}</span>

                                        {selectedPortfolio.features.includes(feature) ? (
                                            <FiCheckCircle size={28} className='icon' />
                                        ) : (
                                            <IoClose size={28} color="red" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Other Packages (Cards 2 and 3) */}
                        {Packages.slice(1).map((pkg, index) => (
                            <div key={index} className={`package-card card-${index + 1}`}>


                                <div className='d-flex flex-column justify-content-start align-items-start'>
                                    <span className="package-name">{pkg.name}</span>
                                    <span className="package-price">{pkg.price}</span>
                                </div>


                                <ul className="feature-list">
                                    {featureSet.map((feature, index) => (
                                        <li key={index} className="feature-item">

                                            <span className='feature-name'> {feature}</span>

                                            {pkg.features.includes(feature) ? (
                                                <FiCheckCircle size={28} className={`icon`} />
                                            ) : (
                                                <IoClose size={28} color="red" />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PackageTable;
