import { featureSet, Packages } from '@/contants/packagesData';
import { useState, ChangeEvent } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';


// Define types for the packages data
interface Portfolio {
    id: number;
    portfolioName: string;
    price: string;
    colorCode: string;
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


                                    <th className='pass-head'>
                                        <div style={{ height: "100%" }} className='d-flex align-items-end'>
                                            <div className="package-name mb-2" style={{ color: "#202c4c", textTransform: "uppercase", fontWeight: "normal" }}>#</div>
                                        </div>

                                      
                                    </th>

                                    <th className='pass-head'>
                                        <div style={{ height: "100%" }} className='d-flex align-items-end'>
                                            <div className="package-name mb-2" style={{ color: "#202c4c", textTransform: "uppercase", fontWeight: "normal" }}>Features</div>
                                        </div>

                                      
                                    </th>
                                    <th className='pass-head'>
                                        <div className="standard-pass-price-wrapper">
                                            {/* <div className="package-price">{selectedPortfolio.price}</div> */}
                                            {/* <span className='label-portfolio-select' style={{fontSize: "10px"}}>Select your preferred portfolio</span> */}
                                            <select className="form-select" value={selectedPortfolio.id} onChange={handlePortfolioChange}>
                                                {Packages[0].portfolio.map((portfolio: any) => (
                                                    <option key={portfolio.id} value={portfolio.id}>
                                                        {portfolio.portfolioName}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="package-name" style={{ color: "#324476", textTransform: "uppercase", fontWeight: "normal" }}>{Packages[0].name}</div>
                                        </div>

                                    </th>
                                    <th className='pass-head'>
                                        <div style={{ height: "100%" }} className='d-flex align-items-end'>
                                            <div className="package-name mb-2" style={{ color: "#202c4c", textTransform: "uppercase", fontWeight: "normal" }}>{Packages[1].name}</div>
                                        </div>

                                      
                                    </th>
                                    <th className='pass-head'>
                                        <div style={{ height: "100%" }} className='d-flex align-items-end'>

                                            <div className="package-name mb-2" style={{ color: "#D4AF37", textTransform: "uppercase", fontWeight: "normal" }}>{Packages[2].name}</div>
                                        </div>
                                        {/* <div className="package-price">{Packages[2].price}</div> */}
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                {featureSet.map((feature: string, index: number) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className='feature-item'>{feature}</td>
                                        <td style={{ textAlign: "center" }}>{selectedPortfolio.features.includes(feature) ? (<TiTick size={24} color={selectedPortfolio.colorCode} />) : (<IoClose size={24} color='#595959' />)}</td>
                                        <td style={{ textAlign: "center" }}>{Packages[1].features.includes(feature) ? (<TiTick size={24} />) : (<IoClose size={24} color='#595959' />)}</td>
                                        <td style={{ textAlign: "center" }}>{Packages[2].features.includes(feature) ? (<TiTick size={24} color='#D4AF37' />) : (<IoClose size={24} color='#595959' />)}</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className='text-center'>
                                        <button className='aim-package-btn' style={{ background: selectedPortfolio.colorCode, borderRadius: "50px", color: "white" }}

                                        >
                                            <span className="">{selectedPortfolio.price}</span>
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <button className='aim-package-btn' style={{ background: "#202c4c", borderRadius: "50px", color: "white" }}

                                        >
                                            <span>{Packages[1].price}</span>
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <button className='aim-package-btn' style={{ background: "#D4AF37", borderRadius: "50px", color: "white" }}

                                        >
                                            <span>{Packages[2].price}</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PackageTable;
