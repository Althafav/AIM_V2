import StartupMenuComponent from '@/components/Portfolio/startup/StartupMenuComponent'
import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import axios from 'axios';
import Globals from '@/modules/Globals';

interface Props {
    firstName: string;
    lastName: string;
    email: string;
}

export default function PackagesComponent() {

    const [loading, setLoading] = useState({
        standard: false,
        deluxe: false,
        premium: false,
    });

    const handleBuyNow = async (price: number, source: string, packageType: 'standard' | 'deluxe' | 'premium') => {

        setLoading((prev) => ({ ...prev, [packageType]: true }));

        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();



        const payload = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            aed_amount: price,
            source: source,
            source_link: Globals.BASE_URL + window.location.pathname,
        };

        try {
            

            const response = await axios.post('https://payment.aimcongress.com/api/Order/Generate', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Payment response:', response.data);

            const paymentLink = response.data.payment_link;


            if (paymentLink) {
                window.location.href = paymentLink;
            }


        } catch (error) {
            console.error('Payment error:', error);

        } finally {

            setLoading((prev) => ({ ...prev, [packageType]: false }));
        }
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
                                    <div className='startup-package-btn' style={{ background: "#6B6B6B", borderRadius: "50px", color: "white" }}
                                        onClick={() => handleBuyNow(1500, 'AIM Startup 2025 Deluxe-Standard', 'standard')}
                                    >
                                        {loading.standard ? (
                                            <span className="spinner">Loading...</span>
                                        ) : (
                                            <>
                                                <span className='price' id='standardPrice'>$1,500</span>
                                                <span className='action-tag'>Buy Now</span>
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <div className='startup-package-btn' style={{ background: "#000000", borderRadius: "50px", color: "white" }}
                                        onClick={() => handleBuyNow(3750, 'AIM Startup 2025 Deluxe-Package', 'deluxe')}
                                    >
                                        {loading.deluxe ? (
                                            <span className="spinner">Loading...</span>
                                        ) : (
                                            <>
                                                <span className='price' id='deluxePrice'>$3,750</span>
                                                <span className='action-tag'>Buy Now</span>
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <div className='startup-package-btn' style={{ background: "#F28E3E", borderRadius: "50px", color: "white" }}
                                        onClick={() => handleBuyNow(6499, 'AIM Startup 2025 Deluxe-Premium', 'premium')}
                                    >
                                        {loading.premium ? (
                                            <span className="spinner">Loading...</span>
                                        ) : (
                                            <>
                                                <span className='price' id='premiumPrice'>$6,499</span>
                                                <span className='action-tag'>Buy Now</span>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


        </div>
    )
}
