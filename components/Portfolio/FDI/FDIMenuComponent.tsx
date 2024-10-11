import Link from 'next/link'
import React from 'react'

export default function FDIMenuComponent() {
    return (
        <div className='FDI-menu-component-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <ul className='menu-items'>

                            <Link href="/foreign-direct-investment">

                                <li>Home</li>
                            </Link>

                            <Link href="/foreign-direct-investment/investment-destinations">

                                <li>Investment Destinations</li>
                            </Link>

                            {/* <Link href="/foreign-direct-investment/agenda">

                                <li>Agenda</li>
                            </Link> */}

                            <Link href="/foreign-direct-investment/awards">

                                <li>Awards</li>
                            </Link>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
