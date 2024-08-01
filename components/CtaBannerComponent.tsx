import Link from 'next/link'
import React from 'react'

export default function CtaBannerComponent() {
  return (
    <section className='cta-banner-wrapper'>
      <div className="container cta-banner">


        <div className='caption'>Let&apos;s Create <strong>Amazing</strong> Together!</div>

        <Link href="/contact-us">
          <button className='cta-banner-btn mt-3 mt-md-0'>Make an inquiry</button>

        </Link>
      </div>



    </section >
  )
}
