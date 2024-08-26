import Globals from '@/modules/Globals'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'

export default function FooterComponent() {
  return (
    <div className='footer-component-wrapper '>
      <img src="/assets/imgs/Gradient.jpg" alt="" className='footer-bg' />

      <div className="container">
        <div className="row footer-content">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className=''>
              <div className="logos">
                <Link href="https://www.facebook.com/AIMCongress" target='_blank'>

                  <FaFacebook color='white' />
                </Link>

                <Link href="https://whatsapp.com/channel/0029VaArQjN0VycN7W0HdG1Q" target='_blank'>
                  <FaWhatsapp color='white' />

                </Link>

                <Link href="https://www.linkedin.com/company/aim-congress/?viewAsMember=true" target='_blank'>
                  <FaLinkedin color='white' />

                </Link>

                <Link href="https://www.instagram.com/aimcongress/?hl=en" target='_blank'>

                  <FaInstagram color='white' />
                </Link>

                <Link href="https://www.threads.net/@aimcongress" target='_blank'>

                  <FaThreads color='white' />
                </Link>

                <Link href="https://www.youtube.com/@AnnualInvestmentMeeting" target='_blank'>

                  <FaYoutube color='white' />
                </Link>

                <Link href="https://x.com/AIM_Congress" target='_blank'>
                  <FaXTwitter color='white' />

                </Link>


                <Link href="https://www.tiktok.com/@aimcongress?_t=8p4nMoWxZJ3&_r=1" target='_blank'>
                  <FaTiktok color='white' />

                </Link>

              </div>

              <div className='mt-5 mb-4 mb-lg-0'>
                <label htmlFor="newsletter" className='text-white mb-2'>Signup for Newsletter</label>
                <form action="" className='d-flex align-items-center gap-3'>
                  <input type="text" className='form-control w-50 rounded' placeholder='Enter email here' />
                  <div>
                    <button className='newslettercta-btn'>Join for free</button>
                  </div>
                </form>
              </div>



            </div>
          </div>
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className='row g-1'>
              <div className="col-lg-3 col-md-6 col-12">
                <p className='footer-nav-head'>About</p>
                <div className='footer-nav'>
                  <p>AIM Foundation</p>
                  <p>AIM Congress</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mb-4 mb-lg-0">
                <p className='footer-nav-head'>Portfolios</p>
                <div className='footer-nav'>
                  <Link href="/foriegn-direct-investment">

                    <p>Foreign Direct Investment</p>
                  </Link>
                  <Link href="/trade-innovation">
                    <p>Global Trade</p>

                  </Link>

                  <Link href="/advanced-manufacturing">

                    <p>Advanced Manufacturing</p>
                  </Link>

                  <Link href="/future-cities">

                    <p>Future Cities</p>
                  </Link>

                  <Link href="/digital-economy">
                    <p>Digital Economy</p>

                  </Link>

                  <Link href="/future-finance">
                    <p>Future Finance</p>

                  </Link>

                  <Link href="/startup">

                    <p>Startups & Unicorn</p>
                  </Link>

                  <Link href="/entrepreneurs">
                    <p>Entrepreneurship</p>

                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mb-4 mb-lg-0">
                <p className='footer-nav-head'>Resources</p>
                <div className="footer-nav">
                  <p>Press</p>
                  <p>Media</p>
                  <p>Downloads</p>
                  <Link href="/articles">
                    <p>Blogs</p>

                  </Link>
                  <p>Partnership Media</p>
                  <p>Our Partners</p>
                  <p>Career</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mb-4 mb-lg-0">
                <p className='footer-nav-head'>Get In Touch</p>
                <div className="footer-nav">
                  <p>+971 4 328 2000</p>
                  <p>United Arab Emirates</p>
                  <p>info@aimcongress.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="/assets/imgs/aim-white-horizontal.png" alt="" className='aim-logo-white' />
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
            <p className='copy-right'>© Copyright AIM Global Foundation</p>
          </div>


        </div>

      </div>
    </div>
  )
}
