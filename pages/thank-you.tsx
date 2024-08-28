import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'

export default function ThankYouPage() {
    const text1 = "We have successfully received your information. Our team is currently reviewing your details and will take the necessary actions promptly."
    const text2 = "Should you have any questions or require further clarification, please don't hesitate to reach out to us through our contact page. "
    const text3 = "We appreciate your interest and engagement with AIM Congress 2025. "

    const lowerText = "Stay tuned for more updates and information here on our website and social media."

    const description = text1 + text2 + text3

    return (
        <>
            <Head>

                <title>Thank You for Your Submission | AIM Congress 2025</title>
                <meta name="description" content="Thank you for your submission to AIM Congress 2025. We have successfully received your details. Our team will review your information and get back to you shortly. Stay updated with the latest news and updates from AIM Congress on our website and social media." />
                <meta name="keywords" content="AIM Congress 2025, Thank You, Submission Received, Event, Conference, International, Business, Investment, Updates" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.aimcongress.com/thank-you" />
            </Head>

            <div className='thankyou-page-wrapper'>
                <div className="content-container">
                    <h1>Thank You</h1>
                    <p className='mt-2'>{description}</p>
                    <p className='mt-3'>{lowerText}</p>

                    <div className='d-flex gap-3 justify-content-lg-start justify-content-center'>
                        <Link href="https://www.facebook.com/AIMCongress" target='_blank'>
                            <FaFacebook color='white' size={20} />
                        </Link>

                        <Link href="https://whatsapp.com/channel/0029VaArQjN0VycN7W0HdG1Q" target='_blank'>
                            <FaWhatsapp color='white' size={20} />
                        </Link>

                        <Link href="https://www.linkedin.com/company/aim-congress/?viewAsMember=true" target='_blank'>
                            <FaLinkedin color='white' size={20} />
                        </Link>

                        <Link href="https://www.instagram.com/aimcongress/?hl=en" target='_blank'>
                            <FaInstagram color='white' size={20} />
                        </Link>

                        <Link href="https://www.threads.net/@aimcongress" target='_blank'>
                            <FaThreads color='white' size={20} />
                        </Link>

                        <Link href="https://www.youtube.com/@AnnualInvestmentMeeting" target='_blank'>
                            <FaYoutube color='white' size={20} />
                        </Link>

                        <Link href="https://x.com/AIM_Congress" target='_blank'>
                            <FaXTwitter color='white' size={20} />
                        </Link>

                        <Link href="https://www.tiktok.com/@aimcongress?_t=8p4nMoWxZJ3&_r=1" target='_blank'>
                            <FaTiktok color='white' size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
