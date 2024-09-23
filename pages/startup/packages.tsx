import StartupMenuComponent from '@/components/Portfolio/startup/StartupMenuComponent'
import React from 'react'
import { TiTick } from 'react-icons/ti'

export default function packages() {
    return (
        <div className='packages-page-wrapper portfolio-margin-top'>
           
            <div className="inner-banner-wrapper portfolio-inner-wrapper">

                <div className="container inner-banner-component">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='banner-heading'>Unlock Your
                                Startup’s Potential</h1>
                        </div>

                        <div className="col-12">
                            <h2 className='subBannerHeading'>Register for Our Exclusive Event Today!</h2>
                        </div>
                    </div>
                </div>

            </div>

            <section className="container packages-table-wrapper">
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
                                        <span className='table-heading' style={{ color: "#949494", textTransform: "uppercase",  fontWeight: "normal" }}>Standard</span>
                                        <span>2 sqm booth</span>

                                    </div>
                                </th>
                                <th>
                                    <div className='d-flex flex-column align-items-center'>
                                        <span className='table-heading' style={{ color: "#6B6B6B", textTransform: "uppercase",  fontWeight: "normal" }}>Deluxe</span>
                                        <span>6 Sqm Booth</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='d-flex flex-column align-items-center'>
                                        <span className='table-heading' style={{ color: "#F28E3E", textTransform: "uppercase",  fontWeight: "bold" }}>Premium</span>
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
                                <td className='text-center'>2 Passes</td>
                                <td className='text-center'>2 Passes</td>
                                <td className='text-center'>3 Passes</td>

                            </tr>


                            <tr>
                                <td>Ticket for Desert Safari Experience</td>
                                <td className='text-center'>1 Ticket</td>
                                <td className='text-center'>2 Tickets</td>
                                <td className='text-center'>3 Tickets</td>
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
                                <td className='text-center'>2 Passes</td>
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
                                    <div className='startup-package-btn' style={{background: "#6B6B6B", borderRadius: "50px", color: "white" }}>
                                        <span className='price'>$1,500</span>
                                        <span className='action-tag'>Buy Now</span>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <div className='startup-package-btn' style={{background: "#000000", borderRadius: "50px", color: "white" }}>
                                        <span className='price'>$3,750</span>
                                        <span className='action-tag'>Buy Now</span>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <div className='startup-package-btn' style={{background: "#F28E3E", borderRadius: "50px", color: "white" }}>
                                        <span className='price'>$6,499</span>
                                        <span className='action-tag'>Buy Now</span>
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
