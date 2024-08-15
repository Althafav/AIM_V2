import Globals from '@/modules/Globals'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function FooterComponent() {
  return (
    <div className='footer-component-wrapper '>
      <img src="/assets/imgs/Gradient.png" alt="" className='footer-bg' />

      <div className="section-container">
        <div className="row footer-content">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className=''>
              <div className="logos">
                <img src="/assets/imgs/facebook.png" alt="" />
                <img src="/assets/imgs/whatsapp.png" alt="" />
                <img src="/assets/imgs/linkedin.png" alt="" />

                <img src="/assets/imgs/instagram.png" alt="" />
                <img src="/assets/imgs/thread.png" alt="" />
                <img src="/assets/imgs/youtube.png" alt="" />
                <img src="/assets/imgs/twitterX.png" alt="" />
                <img src="/assets/imgs/google.png" alt="" />
                <img src="/assets/imgs/ticktok.png" alt="" />

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
              <div className="col-lg-3">
                <p className='footer-nav-head'>About</p>
                <div className='footer-nav'>
                  <p>AIM Foundation</p>
                  <p>AIM Congress</p>
                </div>
              </div>
              <div className="col-lg-3 mb-4 mb-lg-0">
                <p className='footer-nav-head'>Portfolios</p>
                <div className='footer-nav'>
                  <p>Foreign Direct Investment</p>
                  <p>Trade Innovation</p>
                  <p>Advanced Manufacturing</p>
                  <p>Future Cities</p>
                  <p>Digital Economy</p>
                  <p>Future Finance</p>
                  <p>Startups Unicorn</p>
                  <p>Entrepreneurship</p>
                </div>
              </div>
              <div className="col-lg-3 mb-4 mb-lg-0">
                <p className='footer-nav-head'>Resources</p>
                <div className="footer-nav">
                  <p>Press</p>
                  <p>Media</p>
                  <p>Downloads</p>
                  <p>Blogs</p>
                  <p>Partnership Media</p>
                  <p>Our Partners</p>
                  <p>Career</p>
                </div>
              </div>
              <div className="col-lg-3 mb-4 mb-lg-0">
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
