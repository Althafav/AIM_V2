import StartupMenuComponent from '@/components/Portfolio/startup/StartupMenuComponent'
import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import axios from 'axios';
import Globals from '@/modules/Globals';

import AddOnModal from './UI/AddOnModal';


type AddOn = {
    name: string;
    price: number;
};

type LoadingState = {
    standard: boolean;
    deluxe: boolean;
    premium: boolean;
};

type PackageType = 'standard' | 'deluxe' | 'premium';

type Payload = {
    first_name: string | undefined;
    last_name: string | undefined;
    email: string | undefined;
    aed_amount: number;
    source: string;
    order_description: string;
    source_link: string;
};


const addonsList: AddOn[] = [
    { name: 'Dessert Safari', price: 150 },
    { name: 'Gala Dinner', price: 499 },
    { name: 'Startup Conveyor', price: 499 },
    { name: 'Pitch Demo', price: 799 },
];



export default function PackagesComponent() {

    const [loading, setLoading] = useState({
        standard: false,
        deluxe: false,
        premium: false,
    });

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedAddons, setSelectedAddons] = useState<AddOn[]>([]);
    const [currentPrice, setCurrentPrice] = useState<number>(0);

    const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);

    const toggleAddon = (addon: AddOn) => {
        const isSelected = selectedAddons.some(item => item.name === addon.name);
        const updatedAddons = isSelected
            ? selectedAddons.filter(item => item.name !== addon.name)
            : [...selectedAddons, addon];

        setSelectedAddons(updatedAddons);

        const totalAddonPrice = updatedAddons.reduce((acc, item) => acc + item.price, 0);
        setCurrentPrice((basePrice) => basePrice + totalAddonPrice);


    };


    function convertUsdToAed(usdAmount: number): number {
        const exchangeRate = 3.68;
        const aedAmount = usdAmount * exchangeRate;
        return parseFloat(aedAmount.toFixed(0));
    }

    const handleBuyNow = (priceUSD: number, packageType: PackageType) => {
        setSelectedPackage(packageType);
        setCurrentPrice(priceUSD);
        setIsModalOpen(true);
    };

    const handleConfirmAddons = async () => {

        if (!selectedPackage) return;

        setLoading((prev) => ({ ...prev, [selectedPackage]: true }));


        const firstname = (document.getElementById('firstname') as HTMLInputElement)?.value;
        const lastname = (document.getElementById('lastname') as HTMLInputElement)?.value;
        const email = (document.getElementById('email') as HTMLInputElement)?.value;

        const priceAED = convertUsdToAed(currentPrice);
        const orderDescription = selectedAddons.length > 0
            ? selectedAddons.map(addon => addon.name).join(', ')
            : '';

        const payload: Payload = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            aed_amount: priceAED,
            source: selectedPackage,
            order_description: orderDescription,
            source_link: Globals.BASE_URL + window.location.pathname,
        };

        try {
            const response = await axios.post('https://payment.aimcongress.com/api/Order/Generate', payload, {
                headers: { 'Content-Type': 'application/json' },
            });

            const paymentLink = response.data.payment_link;
            if (paymentLink) {
                window.location.href = paymentLink;
            }
        } catch (error) {
            console.error('Payment error:', error);
        } finally {
            setLoading((prev) => ({ ...prev, [selectedPackage]: false }));
            setIsModalOpen(false);
        }
    };

    const handleSkipAddons = () => {
        setSelectedAddons([]);
        handleConfirmAddons();
    };
    return (
        <div className='packages-page-wrapper '>
            <section className=" packages-table-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h2 className='heading'>Packages Designed for Your Need</h2>
                    </div>
                    <div className="col-12 mt-2">
                        <h2 className='subHeading'>Dynamic features and activities fueling startup evolution and success</h2>
                    </div>
                </div>

                <div className="row p-lg-5">
                    <div className="table-responsive">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='table-heading'>Features</th>
                                    <th>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span className='table-heading' style={{ color: "#949494", textTransform: "uppercase", fontWeight: "normal" }}>Standard</span>
                                            <span>2 sqm booth</span>

                                        </div>
                                    </th>
                                    <th>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span className='table-heading' style={{ color: "#6B6B6B", textTransform: "uppercase", fontWeight: "normal" }}>Deluxe</span>
                                            <span>6 Sqm Booth</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span className='table-heading' style={{ color: "#F28E3E", textTransform: "uppercase", fontWeight: "bold" }}>Premium</span>
                                            <span>9 Sqm Booth</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Branded Booth
                                    </td>

                                    <td className='text-center'><TiTick /></td>
                                    <td className='text-center'><TiTick /></td>
                                    <td className='text-center'><TiTick /></td>

                                </tr>

                                <tr>
                                    <td>LED Screen + USB</td>
                                    <td className='text-center'><TiTick /></td>
                                    <td className='text-center'><TiTick /></td>
                                    <td className='text-center'><TiTick /></td>
                                </tr>

                                <tr>
                                    <td>Startup Passes with Access to:
                                        <ul>
                                            <li>Opening Ceremony</li>
                                            <li>Startup Conferences</li>
                                            <li>Exhibition Hall</li>
                                            <li>Workshops</li>
                                            <li>Investor Hub</li>
                                            <li>Official Networking App</li>
                                        </ul>
                                    </td>
                                    <td className='text-center'>2</td>
                                    <td className='text-center'>2</td>
                                    <td className='text-center'>3</td>

                                </tr>


                                <tr>
                                    <td>Ticket for Desert Safari Experience</td>
                                    <td className='text-center'>1</td>
                                    <td className='text-center'>2</td>
                                    <td className='text-center'>3</td>
                                </tr>

                                <tr>
                                    <td>3-Mins Pitch Competition
                                        <ul>
                                            <li>Round 1: Online Pitch</li>
                                            <li>Final Round: At AIM Congress 2025 (if the startup meets the eligibility criteria)</li>
                                        </ul>
                                    </td>
                                    <td className='text-center'>2</td>
                                    <td className='text-center'>2</td>
                                    <td className='text-center'>3</td>
                                </tr>

                                <tr>
                                    <td>Gala Dinner</td>
                                    <td className='text-center'>-</td>
                                    <td className='text-center'>-</td>
                                    <td className='text-center'>2</td>
                                </tr>

                                <tr>
                                    <td>UAE Visa (if required)</td>
                                    <td className='text-center'><TiTick /></td>
                                    <td className='text-center'><TiTick /></td>
                                    <td className='text-center'><TiTick /></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td className='text-center'>
                                        <button className='startup-package-btn' style={{ background: "#6B6B6B", borderRadius: "50px", color: "white" }}
                                            onClick={() => handleBuyNow(1599, 'standard')}
                                            disabled={loading.standard}
                                        >
                                            {loading.standard ? (
                                                <span className="spinner">processing...</span>
                                            ) : (
                                                <>
                                                    <span className='price' id='standardPrice'>$1,599</span>
                                                    <span className='action-tag'>Buy Now</span>
                                                </>
                                            )}
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <button className='startup-package-btn' style={{ background: "#000000", borderRadius: "50px", color: "white" }}
                                            onClick={() => handleBuyNow(5999, 'deluxe')}
                                            disabled={loading.deluxe}
                                        >
                                            {loading.deluxe ? (
                                                <span className="spinner">processing...</span>
                                            ) : (
                                                <>
                                                    <span className='price' id='deluxePrice'>$5,999</span>
                                                    <span className='action-tag'>Buy Now</span>
                                                </>
                                            )}
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <button className='startup-package-btn' style={{ background: "#F28E3E", borderRadius: "50px", color: "white" }}
                                            onClick={() => handleBuyNow(8999, 'premium')}
                                            disabled={loading.premium}
                                        >
                                            {loading.premium ? (
                                                <span className="spinner">processing...</span>
                                            ) : (
                                                <>
                                                    <span className='price' id='premiumPrice'>$6,499</span>
                                                    <span className='action-tag'>Buy Now</span>
                                                </>
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
            <AddOnModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmAddons}
                onSkip={handleSkipAddons}
                addons={addonsList}
                selectedAddons={selectedAddons}
                onAddonToggle={toggleAddon}
                totalPrice={currentPrice}

            />

        </div>
    )
}
