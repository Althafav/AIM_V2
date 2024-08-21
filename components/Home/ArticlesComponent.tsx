import { ArticlesCard, UpcommingEvent } from '@/contants/data'
import { Blogitems } from '@/models/blogitems';
import { Blogs } from '@/models/blogs';
import Globals from '@/modules/Globals';
import React, { useEffect, useState } from 'react'

export default function ArticlesComponent() {
    const [pageData, setPageData] = useState<Blogs | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("blog_page")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);

    if (!pageData) {
        return <></>
    }

    const limitedArticles = pageData.articlesItems.value.slice(0, 5);

    return (
        <>
            <section className='articles-component-wrapper'>
                <div className="section-container">
                    <div className="row">
                        {limitedArticles.map((m: any, index: number) => {

                            var item: Blogitems = m;
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
                                        <img src={item.image.value[0].url} alt="" />
                                        <div className="content">

                                            <p className='heading'>{item.heading.value}</p>
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
                <div className="section-container">
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
