import React, { useEffect, useState } from 'react';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { useRouter } from 'next/router';
import { Sessionspeaker } from '@/models/sessionspeaker';
import { Speaker } from '@/models/speaker';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';

export default function SessionDetail() {
    const [sessionData, setSessionData] = useState<Sessionspeaker | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            Globals.KontentClient.items()
                .equalsFilter('system.id', id)
                .toObservable()
                .subscribe((response: any) => {
                    setSessionData(response.items[0]);
                    setIsLoaded(true);
                });
        }
    }, [id]);

    if (!isLoaded) {
        return <SpinnerComponent />;
    }

    if (!sessionData) {
        return <div>No session data found.</div>;
    }

    return (
        <div className="portfolio-session-detail-page">

            <div className="black-replacer-nav">

            </div>

            <div className="session-head-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className='d-flex gap-2 align-items-center'>
                                <FaArrowLeftLong color='white' />
                                <Link href="/foreign-direct-investment/agenda">
                                    <span className='text-white'>ALL SESSIONS</span>

                                </Link>
                            </div>

                            <div className='mt-4'>
                                <p className='time'> {sessionData.time.value}</p>
                                <p className='room'>{sessionData.room.value}</p>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="content-wrap">
                                <h2>{sessionData.name.value}</h2>
                                <p className='description' dangerouslySetInnerHTML={{ __html: sessionData.content.value }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="speakers-wrapper mt-5">
                <div className="container">

                    <div className="row g-3">
                        {sessionData.speakers.value.map((speaker: any, index: number) => {
                            const speakerItem: Speaker = speaker;
                            return (
                                <div key={index} className="col-12">
                                    <div className="speaker-card">
                                        <img src={speakerItem.image.value[0]?.url} alt={speakerItem.name.value} className="speaker-image" />
                                        <div>
                                            <p className="speaker-name mt-2">{speakerItem.name.value}</p>
                                            <p className='speaker-designation'>{speakerItem.designation.value}</p>
                                        </div>

                                        <div>
                                            <p className='description' dangerouslySetInnerHTML={{ __html: speakerItem.profile.value }}></p>
                                        </div>
                                    </div>
                                    <hr className='text-dark mt-5 mb-5' />
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </div>
    );
}
