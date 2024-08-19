import React from 'react'

export default function EventHighlights() {
    return (
        <div className='event-highlights-page-wrapper'>
            <div className="banner-section-wrapper">

                <video width="100%" autoPlay loop muted controls={false} preload="auto">
                    <source src="https://d2g6bqkf4g3jqe.cloudfront.net/videos/aim-bg.mp4" type="video/mp4" className='banner-video' width="100%" />
                </video>
            </div>
        </div>
    )
}
