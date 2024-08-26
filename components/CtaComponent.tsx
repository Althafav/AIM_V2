import React from 'react'

export default function CtaComponent() {
    const para1 = "Discover how the UAE is driving economic transformation with innovation and sustainability. With a growing GDP, significant diversification, and ambitious renewable energy goals, AIM Congress is shaping a prosperous and responsible future."

    const para2 = " Be part of this exciting journey, join us at AIM Congress 2025 and witness how we're shaping tomorrow today!"
    return (
        <section className='cta-banner-component-wrapper'>
            <div className="section-container">
                <div className="row">
                    <div className="col-12">
                        <div className='banner-content' >

                            <p className='cta-banner-heading'>Empowering Tomorrow,<br /> Today!</p>



                            <div className='d-flex flex-column flex-lg-row  align-items-lg-center gap-5 justify-content-between'>
                                <p className="d-flex flex-column gap-2">
                                    <span className=''>{para1}</span>



                                    <span className=''>{para2} </span>
                                </p>

                                <div className=''>
                                    <button className='registernow-cta'>Register Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
