import React from 'react'
import { TiTick } from 'react-icons/ti'

export default function packages() {
    return (
        <div className='packages-page-wrapper'>
            <div className="inner-banner-wrapper ">

                <div className="container">
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
                    <div className="col-12">
                        <h2 className='subHeading'>Dynamic features and activities fueling startup evolution and success</h2>
                    </div>
                </div>

                <div className="row p-5">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Standard</th>
                                <th>Deluxe</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Branded Booth
                                </td>

                                <td><TiTick /></td>
                                <td><TiTick /></td>
                                <td><TiTick /></td>

                            </tr>

                            <tr>
                                <td>LED Screen + USB</td>
                                <td><TiTick /></td>
                                <td><TiTick /></td>
                                <td><TiTick /></td>
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
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>

                            </tr>


                            <tr>
                                <td>Ticket for Desert Safari Experience</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>3-Mins Pitch Competition
                                    <ul>
                                        <li>Round 1: Online Pitch</li>
                                        <li>Final Round: At AIM Congress 2025 (if the startup meets the eligibility criteria)</li>
                                    </ul>
                                </td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>Gala Dinner</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>

                            <tr>
                                <td>UAE Visa (if required)</td>
                                <td><TiTick /></td>
                                <td><TiTick /></td>
                                <td><TiTick /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


        </div>
    )
}
