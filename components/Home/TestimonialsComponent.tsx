import { TestimonialCard } from '@/contants/data';
import React, { useRef, useState } from 'react';

export default function TestimonialsComponent() {
    return (
        <section className='testimonails-component-wrapper'>
            <div className="container">
                <div className="row">
                    {TestimonialCard.map((item: any, index: number) => {
                        const videoRef = useRef<HTMLVideoElement>(null);
                        const [isMuted, setIsMuted] = useState(true);
                        const [isHovered, setIsHovered] = useState(false);

                        const handleMouseEnter = () => {
                            setIsHovered(true);
                            if (videoRef.current) {
                                videoRef.current.play().catch(error => {
                                    console.error("Error playing video:", error);
                                });
                            }
                        };

                        const handleMouseLeave = () => {
                            setIsHovered(false);
                            if (videoRef.current) {
                                videoRef.current.pause();
                                videoRef.current.currentTime = 0;
                            }
                        };

                        const toggleMute = () => {
                            if (videoRef.current) {
                                videoRef.current.muted = !videoRef.current.muted;
                                setIsMuted(videoRef.current.muted);
                            }
                        };

                        return (
                            <div key={index} className="col-lg-3 mb-3">
                                <div className="testimonial-card"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    <div className='preview-items'>
                                        <svg width="58" height="34" viewBox="0 0 58 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M45.384 33.576H26.696L42.184 0.167969H57.672L45.384 33.576ZM20.68 33.576H0.455999L18.504 0.167969H33.992L20.68 33.576Z" fill="#0094FB" />
                                        </svg>
                                        <p className='testimonial-words'>{item.quote}</p>

                                        <div className='profile'>
                                            <span className='name'>{item.name}</span>
                                            <span className='company'>{item.company}</span>
                                        </div>


                                    </div>

                                    <img src="/assets/imgs/person1.png" alt="" className='testimonial-img1' />
                                    <video ref={videoRef} className="video" muted={isMuted}>
                                        <source src={item.testimonialVideoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {isHovered && (
                                        <button className="mute-button" onClick={toggleMute}>
                                            {isMuted ? "Unmute" : "Mute"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
