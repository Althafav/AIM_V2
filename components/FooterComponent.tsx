import Globals from '@/modules/Globals'
import JsLoader from '@/modules/JsLoader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'

export default function FooterComponent() {
  try {
    JsLoader.loadFile(`${Globals.BASE_URL}assets/js/newsLetter.js`);
  } catch (e) {
  }
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
                <form method="POST" action="//ac.strategic.ae/proc.php" id="_form_110_" className="_form _form_110 _inline-form  _dark" noValidate data-styles-version="3">
                  <input type="hidden" name="u" value="110" />
                  <input type="hidden" name="f" value="110" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <input type="hidden" name="or" value="bff160ec8a6ac2667a9c338328779bd6" />
                  <div className="_form-content">

                    <div className='row'>
                      <div className='col-12'>
                        <input type="text" id="email" name="email" className='form-control w-50 rounded' style={{ width: "302px !important", marginBottom: "10px" }} placeholder='Enter email here' required />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12'>
                        <div className="g-recaptcha newsletter-captcha m-b-5" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                        </div>

                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-12'>
                        <button className='newslettercta-btn' type='submit' id="_form_110_submit" style={{ display: "block", marginTop: "10px" }}>Subscribe</button>
                      </div>
                    </div>

                  </div>
                  <div
                    className="_form-newsletter-thank-you subscribe-message text-success"
                    style={{ display: "none" }}
                  ></div>
                </form>
              </div>

            </div>
          </div>
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className='row g-1'>
              <div className="col-lg-3 col-md-6 col-12">
                <p className='footer-nav-head'>About</p>
                <div className='footer-nav'>
                  <Link href="https://www.aimglobalfoundation.com/" target='_blank'>
                    <p>AIM Foundation</p>

                  </Link>

                  <Link href="/about">

                    <p>AIM Congress</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mb-4 mb-lg-0">
                <p className='footer-nav-head'>Portfolios</p>
                <div className='footer-nav'>
                  <Link href="https://fdi.aimcongress.com/foriegn-direct-investment">

                    <p>Foreign Direct Investment</p>
                  </Link>
                  <Link href="https://trade.aimcongress.com/global-trade">
                    <p>Global Trade</p>

                  </Link>

                  <Link href="https://manufacturing.aimcongress.com/global-manufacturing">

                    <p>Global Manufacturing</p>
                  </Link>

                  <Link href="https://futurecities.aimcongress.com/future-cities">

                    <p>Future Cities</p>
                  </Link>

                  <Link href="https://digitaleconomy.aimcongress.com/digital-economy">
                    <p>Digital Economy</p>

                  </Link>

                  <Link href="https://futurefinance.aimcongress.com/future-finance">
                    <p>Future Finance</p>

                  </Link>

                  <Link href="https://startup.aimcongress.com/" target='_blank'>

                    <p>Startups & Unicorns</p>
                  </Link>

                  <Link href="https://entrepreneurs.aimcongress.com/entrepreneurs">
                    <p>Entrepreneurship</p>

                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mb-4 mb-lg-0">
                <p className='footer-nav-head'>Resources</p>
                <div className="footer-nav">
                  <Link href="/brochure">
                    <p>Brochure</p>

                  </Link>
                  <Link href="/press-release">
                    <p>Press Release</p>

                  </Link>
                  
                  <Link href="/articles">
                    <p>Blogs</p>

                  </Link>

                  <Link href="/media-partners">

                    <p>Media Partners</p>
                  </Link>

                  <Link href="/our-partners">
                    <p>Our Partners</p>

                  </Link>
               
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
