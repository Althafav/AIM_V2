import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Conferencepage } from '@/models/conferencepage';
import { Conferencedates } from '@/models/conferencedates';
import { Sessionspeaker } from '@/models/sessionspeaker';
import { Speaker } from '@/models/speaker';

export default function FDIAgenda() {
    const [pageData, setPageData] = useState<Conferencepage | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null); // Store the selected date

    useEffect(() => {
        Globals.KontentClient.item('conference_test')
            .withParameter('depth', '4')
            .toObservable()
            .subscribe((response: any) => {
                setPageData(response.item);

                // Set the first date as the default selected date
                if (response.item?.items?.value.length > 0) {
                    setSelectedDate(response.item.items.value[0].dateString.value);
                }
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />;
    }

    return (
        <div className="portfolio-agenda-wrapper">
            <div className="inner-banner-section-wrapper">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="/assets/imgs/Gradient.jpg"
                    alt=""
                    className="banner-image"
                />

                <div className="inner-text-container container">
                    <h1 className="banner-heading">FDI Agenda</h1>
                </div>
            </div>

            <section className="portfolio-agenda-content-wrapper">
                <div className="container">
                    <div className="row ">
                        <ul className="date-items">
                            {pageData.items.value.map((m: any, index: number) => {
                                const item: Conferencedates = m;
                                const isActive = item.dateString.value === selectedDate;

                                return (
                                    <li
                                        key={index}
                                        className={`date-item ${isActive ? 'active' : ''}`}
                                        onClick={() => setSelectedDate(item.dateString.value)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.dateString.value}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                </div>

                <div className="row mt-5">
                    {pageData.items.value.map((m: any, index: number) => {
                        const item: Conferencedates = m;

                        if (item.dateString.value !== selectedDate) {
                            return null;
                        }

                        return (
                            <div key={index}>
                                {item.sessions.value.map((session: any, sessionIndex: number) => {
                                    const sessionItem: Sessionspeaker = session;
                                    return (
                                        <div>
                                            <div key={sessionIndex} className="session-item-card mb-3">
                                                <h3 className='name'> {sessionItem.name.value}</h3>
                                                <p className='time'>{sessionItem.time.value}</p>
                                                <div className='mt-3'>
                                                    <button className='view-btn' >See Details</button>
                                                </div>

                                                <div className="speakers-wrapper">
                                                    {sessionItem.speakers.value.map((m: any, index: number) => {
                                                        var item: Speaker = m;
                                                        return (
                                                            <div className="speaker-card">
                                                                <img src={item.image.value[0]?.url} alt="" />
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                            <hr className='text-dark' />
                                        </div>

                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
