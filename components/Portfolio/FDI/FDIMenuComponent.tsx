import Link from 'next/link'
import React from 'react'

export default function FDIMenuComponent() {
    return (
        <div className='FDI-menu-component-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <ul className='menu-items'>
                            <Link href="/fdi-agenda">

                                <li>Agenda</li>
                            </Link>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
