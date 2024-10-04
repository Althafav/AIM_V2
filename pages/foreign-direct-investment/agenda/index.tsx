import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Conferencepage } from '@/models/conferencepage';
import { Conferencedates } from '@/models/conferencedates';
import { Sessionspeaker } from '@/models/sessionspeaker';
import { Speaker } from '@/models/speaker';
import { FaSearch } from 'react-icons/fa';

export default function FDIAgenda() {
    const [pageData, setPageData] = useState<Conferencepage | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null); // Store the selected date
    const [searchQuery, setSearchQuery] = useState<string>('');

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



    const filterSessions = (sessionItem: Sessionspeaker) => {
        const query = searchQuery.toLowerCase();


        const sessionNameMatches = sessionItem.name.value.toLowerCase().includes(query);
        const sessionContentMatches = sessionItem.content?.value?.toLowerCase().includes(query) ?? false;


        const speakerMatches = sessionItem.speakers.value.some((speaker: any) => {
            const speakerItem: Speaker = speaker as Speaker;
            return speakerItem.name.value.toLowerCase().includes(query);
        });

        return sessionNameMatches || sessionContentMatches || speakerMatches;
    };

    const allSessions = pageData.items.value.flatMap((m: any) => {
        const dateItem: Conferencedates = m;
        return dateItem.sessions.value;
    });

    const filteredSessions = searchQuery
        ? allSessions.filter((session: any) => filterSessions(session))
        : pageData.items.value.find((item: any) => item.dateString.value === selectedDate)?.sessions.value ?? [];

    return (
        <div className="portfolio-agenda-wrapper">
            <div className="black-replacer-nav">

            </div>

            <div className="container">
                <h2 className='section-heading mt-5'>AIM Congress 2025 FDI Agenda</h2>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center">
                        <div className='search-form-wrapper'>
                            <FaSearch color='#868686' size={24} />
                            <input
                                type="text"
                                className="form-control search-form"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>


                </div>
                {!searchQuery && (
                    <div className="row mt-3">
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
                )}


            </div>

            <div className="portfolio-agenda-content-wrapper">


                <div className="row mt-5">
                    {filteredSessions.length > 0 ? (
                        filteredSessions.map((session: any, sessionIndex: number) => {
                            const sessionItem: Sessionspeaker = session;
                            return (
                                <div key={sessionIndex}>
                                    <div className="session-item-card mb-3">
                                        <h3 className='name line-clamp-3'>{sessionItem.name.value}</h3>
                                        <p className='time'>{sessionItem.time.value}</p>
                                        <div className='mt-3'>
                                            <button className='view-btn'>See Details</button>
                                        </div>
                                        <div className="speakers-wrapper mt-4">
                                            {sessionItem.speakers.value.map((m: any, index: number) => {
                                                var item: Speaker = m;
                                                if (item.image.value[0]) {
                                                    return (
                                                        <div key={index} className="speaker-card">
                                                            <img src={item.image.value[0]?.url} alt="" className='speaker-image' />
                                                            <p className='speaker-name mt-2'>{item.name.value}</p>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>
                                    <hr className='text-dark' />
                                </div>
                            );
                        })
                    ) : (
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-12 d-flex justify-content-center">
                                    <p>No sessions found.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
