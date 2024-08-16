import React from 'react'
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';

export default function About() {
    const sentence1 = "AIM Congress is an initiative of the AIM Global Foundation, an independent international organization fully committed to empower the world’s economy by boosting effective promotion strategies and facilitating opportunities for economic productivity and expansion."
    const sentence2 = "AIM Congress has established itself as a leading investment platform in the Middle East, which aspires to ignite positive transformation by creating investment opportunities, upholding solidarity and developing economic relations among nations, as well as addressing the global ordeals that made a profound impact on economic growth."
    const sentence3 = "AIM Congress continues to gather corporate leaders, policy-makers, businessmen, regional and international investors, entrepreneurs, leading academics, and experts showcasing up-to-date information, strategies and knowledge on attracting investments. Which brings together visitors from both the public and private sectors in Abu Dhabi and from all around of the world."

    return (

        <>
            <div className="about-banner-wrapper">


                <motion.img
                    src="/assets/imgs/Gradient.png"
                    alt=""
                    className="banner-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />

                <div className="text-container container">
                    <h1 className='banner-heading'>
                        Empowering
                        Tomorrow,
                        Today!
                    </h1>
                    <h2 className='banner-heading-2'>Overcoming Challenges, Seizing New Global Opportunities</h2>

                </div>
            </div>

            <div className='about-us-section-wrapper'
                style={{
                    backgroundImage: "url('/assets/imgs/about-section-bg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
               

                <div className="container text-content">
                    <div className="row">

                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <p className='' > {sentence1}</p>
                            <p className='' > {sentence2}</p>
                            <p className='' > {sentence3}</p>


                        </div>
                    </div>
                </div>
            </div>



            <div className='column-section-1'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className='section-head'>To create and enhance collaborative partnerships across various sectors for positive social, environmental, and economic impacts.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='column-section-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <p className='section-head'>To establish a global community addressing challenges collaboratively and inclusively.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="stats-container-wrapper section-container mt-5">
                <div className="grid-container d-none d-lg-grid">
                    <div className="item1">
                        <img src="/assets/imgs/b2bmembers.png" alt="aim 2025 b2b members count" />
                    </div>
                    <div className="item2">
                        <img src="/assets/imgs/speakers.png" alt="aim 2025 speakers count" />
                    </div>
                    <div className="item3">
                        <img src="/assets/imgs/sessions.png" alt="aim 2025 sessions count" />
                    </div>
                    <div className="item4">
                        <img src="/assets/imgs/exhibitors.png" alt="aim 2025 exhibitors count" />
                    </div>
                    <div className="item5">
                        <img src="/assets/imgs/totalattendence.png" alt="aim 2025 attendence count" />
                    </div>

                    <div className="item6">
                        <img src="/assets/imgs/high-level-dignitades.png" alt="aim 2025" />
                    </div>
                    <div className="item7">

                        <img src="/assets/imgs/total-countries.png" alt="aim 2025" />
                    </div>
                    <div className="item8">
                        <img src="/assets/imgs/highlevelRoundtables.png" alt="aim 2025" />
                    </div>
                    <div className="item9">
                        <img src="/assets/imgs/startups.png" alt="aim 2025" />
                    </div>

                </div>
                ?

                <div className="d-lg-none">
                    <Marquee gradient={false}>
                        <div className="marquee-item">
                            <img src="/assets/imgs/b2bmembers.png" alt="aim 2025 b2b members count" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/speakers.png" alt="aim 2025 speakers count" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/sessions.png" alt="aim 2025 sessions count" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/exhibitors.png" alt="aim 2025 exhibitors count" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/totalattendence.png" alt="aim 2025 attendence count" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/high-level-dignitades.png" alt="aim 2025" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/total-countries.png" alt="aim 2025" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/highlevelRoundtables.png" alt="aim 2025" />
                        </div>
                        <div className="marquee-item">
                            <img src="/assets/imgs/startups.png" alt="aim 2025" />
                        </div>
                    </Marquee>
                </div>

            </section>

            <div className='about-last-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <p className='text-center mainhead'>Evolving Since 2011</p>
                            <p className='text-center subHead'>World’s Leading Investment Platform</p>
                        </div>
                    </div>
                </div>
                <img src="/assets/imgs/about last image 1.png" alt="" className='about-last-img' />
            </div>

        </>


    )
}
