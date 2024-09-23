import { featureSet, Packages } from '@/contants/packagesData';
import { useState, ChangeEvent } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { IoMdCheckboxOutline } from 'react-icons/io';
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
                <img src="/assets/imgs/Gradient.png" alt="" className="banner-image" />

                <div className="inner-text-container">
                    <h1 className="banner-heading">Delegate Pass</h1>
                </div>
            </div>

            <div className="container">
                <section className='packages'>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className="features-heading">Features</th>
                                    <th>
                                        <div className="package-name mb-2">Standard Pass</div>
                                        <div className="standard-pass-price-wrapper">
                                            <div className="package-price">{selectedPortfolio.price}</div>

                                            <select className="form-select" value={selectedPortfolio.id} onChange={handlePortfolioChange}>
                                                {Packages[0].portfolio.map((portfolio: any) => (
                                                    <option key={portfolio.id} value={portfolio.id}>
                                                        {portfolio.portfolioName} ({portfolio.price})
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="package-name mb-2">{Packages[1].name}</div>
                                        <div className="package-price">{Packages[1].price}</div>
                                    </th>
                                    <th>
                                        <div className="package-name mb-2">{Packages[2].name}</div>
                                        <div className="package-price">{Packages[2].price}</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {featureSet.map((feature: string, index: number) => (
                                    <tr key={index}>
                                        <td className='feature-item'>{feature}</td>
                                        <td style={{ textAlign: "center" }}>{selectedPortfolio.features.includes(feature) ? (<FiCheckCircle size={32} color='green' />) : (<IoClose size={32} color='red' />)}</td>
                                        <td style={{ textAlign: "center" }}>{Packages[1].features.includes(feature) ? (<FiCheckCircle size={32} color='green' />) : (<IoClose size={32} color='red'/>)}</td>
                                        <td style={{ textAlign: "center" }}>{Packages[2].features.includes(feature) ? (<FiCheckCircle size={32} color='green' />) : (<IoClose size={32} color='red'/>)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PackageTable;
