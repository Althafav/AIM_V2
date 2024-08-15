import React from 'react'

export default function YoutubeSectionComponent() {
    return (
        <section className='youtube-section-component'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                        <p className='mainHead'>AIM Youtube Videos</p>
                        <p className='subHead'>Marketing Videos in Youtube will be listed here as well</p>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                        <img src="/assets/imgs/yt-1.png" alt="" style={{width: "100%", maxWidth: "660px"}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
