import { TestimonialCard } from '@/contants/data';
import React, { useRef, useState } from 'react';

export default function TestimonialsComponent() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); 
    const [isMuted, setIsMuted] = useState<boolean[]>(new Array(TestimonialCard.length).fill(true));
    const [isHovered, setIsHovered] = useState<boolean[]>(new Array(TestimonialCard.length).fill(false));

    const handleMouseEnter = (index: number) => {
        setIsHovered((prevState) => prevState.map((hovered, i) => i === index ? true : hovered));
        if (videoRefs.current[index]) {
            videoRefs.current[index]?.play().catch((error) => {
                console.error("Error playing video:", error);
            });
        }
    };

    const handleMouseLeave = (index: number) => {
        setIsHovered((prevState) => prevState.map((hovered, i) => i === index ? false : hovered));
        if (videoRefs.current[index]) {
            videoRefs.current[index]?.pause();
            videoRefs.current[index]!.currentTime = 0;
        }
    };

    const toggleMute = (index: number) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index]!.muted = !videoRefs.current[index]!.muted;
            setIsMuted((prevState) => prevState.map((muted, i) => i === index ? !muted : muted));
        }
    };

    return (
        <section className='testimonails-component-wrapper'>
            <div className="container">
                <div className="row">
                    {TestimonialCard.map((item: any, index: number) => (
                        <div key={index} className="col-lg-3 mb-3">
                            <div className="testimonial-card"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}>
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
                                <video
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                    }}  // No return value
                                    className="video"
                                    muted={isMuted[index]}
                                >
                                    <source src={item.testimonialVideoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {isHovered[index] && (
                                    <button className="mute-button" onClick={() => toggleMute(index)}>
                                        {isMuted[index] ? "Unmute" : "Mute"}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
