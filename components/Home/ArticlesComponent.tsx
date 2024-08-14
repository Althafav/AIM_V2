import { ArticlesCard, UpcommingEvent } from '@/contants/data'
import React from 'react'

export default function ArticlesComponent() {
    return (
        <>
            <section className='articles-component-wrapper'>
                <div className="container">
                    <div className="row">
                        {ArticlesCard.map((item: any, index: number) => {
                            let colClass = "col-lg-4"; //default

                            if (index === 3) {
                                colClass = "col-lg-8";
                            } else if (index === 4) {
                                colClass = "col-lg-4";
                            }
                            return (
                                <div className={colClass + " mb-3"} key={`article-card-${index}`}>
                                    <div className="article-card">
                                        <div className="article-badge">
                                            News Article
                                        </div>
                                        <img src={item.image} alt="" />
                                        <div className="content">

                                            <p className='heading'>WHO strengthens local production focus at AIM Congress 2024..</p>
                                            <div className='timestamp'>
                                                <span>12 May 2024 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </div>
                </div>

            </section>

            <section className='articles-component-wrapper'>
                <div className="container">
                    <div className="row">
                        {UpcommingEvent.map((item: any, index: number) => {

                            return (
                                <div className="col-lg-6" key={`trending-card-${index}`}>
                                    <div className="upcomming-card">
                                        <div className="upcomming-badge">
                                            Trending
                                        </div>
                                        <hr className='text-dark' />

                                        <div className="content">

                                            <p className='heading'>WHO strengthens local production focus at AIM Congress 2024..</p>
                                            <div className='timestamp'>
                                                <span>24 July 2025, ADNEC Abu Dhabi</span>
                                            </div>
                                        </div>
                                        <img src={item.image} alt="" />

                                    </div>
                                </div>
                            )
                        })}



                    </div>
                </div>

            </section>
        </>

    )
}
