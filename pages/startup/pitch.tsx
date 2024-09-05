import React from 'react'

export default function pitch() {
    const paragrah = `AIM Congress's Pitch Competition is a dynamic platform that helps innovative entrepreneurs and companies take their ideas to the next level. This high-stakes competition offers up-and-coming businesses a one-of-a-kind chance to showcase their creative ideas to a renowned panel of judges made up of mentors, top investors, and business executives. After a rigorous selection process, participants will present their ideas live to the audience, showcasing their originality, marketability, and strategic vision. Along with significant cash prizes and investment prospects, the tournament provides tremendous visibility and opportunities to network with important players. You can accelerate your growth trajectory, create lasting connections, and receive insightful feedback by taking part. Take advantage of this opportunity to bring your concept to life and leave a lasting impression at AIM Congress `
    return (
        <div className='pitch-page-wrapper'>
            <div className="inner-banner-section-wrapper">
                <div className="video-wrapper">
                    <video autoPlay loop muted controls={false} preload="auto" className='pitch-banner-video'>
                        <source src='https://d2g6bqkf4g3jqe.cloudfront.net/videos/startup-bg.mp4' />
                    </video>
                </div>
            </div>

            <div className='about-pitch-section'>
                <img src="/assets/imgs/startup-pitch.jpg" alt="" className='about-pitch-bg-image' />

                <div className="container inner-text-container">
                    <div className="row ">
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-6">
                            <h2 className='heading'>AIM Startup Dynamic <br /> Activity-Pitch Competition</h2>
                            <p className='paragraph'>{paragrah}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='unicorn-cta-wrapper'>
                <h2 className='big-heading'>In Search of <br />Billion Dollar Idea!</h2>
                <img src="/assets/imgs/Unicorn Back.jpg" alt="" className='back-unicorn' />

                <img src="/assets/imgs/Unicorn Front.png" alt="" />

                <div className="text-container-wrapper">
                    <h3>Get Your Pass to Meet the Unicorns</h3>
                    <button className='cta-btn'>Participate</button>
                </div>

            </div >

            <div className='startup-convey-cta-wrapper'
                style={{
                    backgroundImage: "url('/assets/imgs/startup-convey.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100%",
                    position: "relative",
                }}
            >



                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h2>Concept to
                                Market</h2>
                        </div>

                        <div className="col-12">
                            <p className=''>Get Your Pass to Meet the Unicorns</p>

                        </div>

                        <div>
                            <button className='cta-btn'>Participate</button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
