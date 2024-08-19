import React from 'react'

export default function YoutubeSectionComponent() {
    const subHead = "Don't miss out—subscribe to our channel and stay updated "
    return (
        <section className='youtube-section-component'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                        <p className='mainHead'>AIM Congress on Youtube </p>
                        <p className='subHead'>{subHead}</p>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                        <img src="/assets/imgs/yt-1.png" alt="" style={{width: "100%", maxWidth: "660px"}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
