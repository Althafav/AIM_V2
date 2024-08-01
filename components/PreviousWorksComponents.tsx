import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import Globals from '@/modules/Globals';
import { Previousprojectsection } from '@/models/previousprojectsection';
import { Previousprojectsitem } from '@/models/previousprojectsitem';


export default function PreviousWorksComponents() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const [pageData, setPageData] = useState<Previousprojectsection | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {


        Globals.KontentClient.item("previous_project_section")
            .toObservable()
            .subscribe((response: any) => {
                setPageData(response.item);
                setIsLoaded(true);


            });

    }, []);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    if (!pageData) {
        return <></>;
    }



    return (
        <section className="previous-work-wrapper" id='Portfolio'>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-wrapper mb-4">
                            <h2 className="section-heading">{pageData.title.value}</h2>
                            <div className="underline" />
                        </div>
                        <p className='text-secondary mb-3'
                            dangerouslySetInnerHTML={{
                                __html: pageData.content.value,
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">

                                {pageData.items.value.map((m: any, index: number) => {
                                    var item: Previousprojectsitem = m;
                                    return (
                                        <div className="embla__slide" key={`previous-${index}`}>
                                            <div className="previous-work-card">
                                                <Image width={520} height={450} src={item.cardImage.value[0].url} alt="Adx" loading="lazy" />
                                                <div className="text-content-box">
                                                    <div className="legend mb-3">
                                                        <span>{item.sectionTitle.value}</span>
                                                    </div>
                                                    <div className="heading-wrap mb-2">
                                                        <h3>{item.name.value}</h3>
                                                    </div>
                                                    <p className='description' dangerouslySetInnerHTML={{
                                                        __html: pageData.content.value,
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                    <div className="col-2 d-flex justify-content-center align-items-center">
                        {pageData.items.value.length > 2 && (

                            <button className="embla__next glow-on-hover" onClick={scrollNext}>
                                <svg className="glow-svg" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.96 23.4745L17.0067 14.1453C16.5983 13.7987 16 14.1112 16 14.6708V33.3292C16 33.8888 16.5983 34.2013 17.0067 33.8547L27.96 24.5255C28.2735 24.2585 28.2735 23.7415 27.96 23.4745Z" fill="#7BD0E0" />
                                    <path d="M35.7649 23.4745L24.8117 14.1453C24.4032 13.7987 23.8049 14.1112 23.8049 14.6708V33.3292C23.8049 33.8888 24.4032 34.2013 24.8117 33.8547L35.7649 24.5255C36.0784 24.2585 36.0784 23.7415 35.7649 23.4745Z" fill="#7BD0E0" />
                                    <circle cx="24" cy="24" r="22.5" stroke="#8BE2C6" strokeWidth="3" />
                                </svg>
                            </button>
                        )}
                    </div>


                </div>


            </div>
        </section>
    )
}
