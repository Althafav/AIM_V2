import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { CiGlobe } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Globals from '@/modules/Globals';
import { useRouter } from 'next/router';
import StartupMenuComponent from './Portfolio/startup/StartupMenuComponent';

export default function MenuComponent() {
  const [isToggle, setIsToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsToggle(prevState => !prevState);
  };  

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {

      setIsVisible(false);
    } else {

      setIsVisible(true);
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);

    if (scrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  const togglePortfolioDropdown = () => {
    setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen);
  };

  const router = useRouter();



  const RoutesData = [
    {
      id: 1,
      route: '/foreign-direct-investment',
      logo: '/assets/logos/fdi-logo.png',
    },
    {
      id: 2,
      route: '/global-trade',
      logo: '/assets/logos/global-trade-logo.png',
    },
    {
      id: 3,
      route: '/global-manufacturing',
      logo: '/assets/logos/global-manufacturing.png',
    },

    {
      id: 4,
      route: '/future-cities',
      logo: '/assets/logos/future-cities-logo.png',
    },

    {
      id: 5,
      route: '/digital-economy',
      logo: '/assets/logos/digital-economy-logo.png',
    },

    {
      id: 6,
      route: '/future-finance',
      logo: '/assets/logos/futurefinance-logo.png',
    },

    {
      id: 7,
      route: '/startup',
      logo: '/assets/logos/Startups & Unicorns.png',
    },

    {
      id: 8,
      route: '/entrepreneurs',
      logo: '/assets/logos/entrepreneurs-logo.png',
    }

  ]

  const currentRouteData = RoutesData.find((data) => router.pathname.startsWith(data.route));

  const isStartupRoute = router.pathname.startsWith('/startup');




  return (
    <nav className={`menu-wrapper  ${isStartupRoute ? 'portfolio-solid-menu' : ''}  ${!isVisible ? 'translate-y' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div className="top-items-container d-flex justify-content-end align-items-center mb-1">
              <div className="d-flex gap-5 align-items-center  top-items">
                <div className='top-item'>
                  <img src="/assets/imgs/Ministry logos .png" alt="" className='ministry-logo' />
                </div>
                {/* <div className='top-item'><span style={{ textDecoration: "underline" }}>LOGIN</span></div> */}
                {/* <div className='top-item'><CiGlobe size={20} /> <span>EN</span></div> */}

              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-end justify-content-between">
          <div className='d-flex align-items-end gap-4'>
            <Link href={`${Globals.BASE_URL}`} className="logo-wrapper">
              <img src={`/assets/imgs/AIM-logo.png`} alt="Logo"
                className='menu-logo white-logo' />

            </Link>

            {currentRouteData && (
              <Link href={currentRouteData.route} className="logo-wrapper">
                <img src={currentRouteData.logo} alt="Logo" className='nav-bar-portfoio-logo' />
              </Link>
            )}
          </div>

          <div className="d-flex flex-column gap-4">


            <ul className='menu-items'>
              <li className='menu-item'>
                <Link href="/about">
                  ABOUT AIM
                </Link>
              </li>
              <li className='menu-item'>
                <Link href="/event-highlights" className='aim-2025'>
                  AIM 2025
                </Link>
              </li>
              <li className='menu-item hover-menu-container' onMouseEnter={togglePortfolioDropdown} onMouseLeave={togglePortfolioDropdown}>
                <span>PORTFOLIOS</span>

                {isPortfolioDropdownOpen && (
                  <ul className="dropdown">

                    <li className="dropdown-item">

                      <Link href="https://fdi.aimcongress.com/foreign-direct-investment" className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/fdi-logo.png" alt="fdi" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        <span>Foreign Direct Investment</span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="https://trade.aimcongress.com/global-trade" className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/global-trade-logo.png" alt="globaltrade" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        Global Trade
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://manufacturing.aimcongress.com/global-manufacturing" className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/global-manufacturing.png" alt="" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        Global Manufacturing
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://futurecities.aimcongress.com/future-cities" className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/future-cities-logo.png" alt="futurecities" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        Future Cities
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://digitaleconomy.aimcongress.com/digital-economy" className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/digital-economy-logo.png" alt="" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        Digital Economy
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://futurefinance.aimcongress.com/future-finance" className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/futurefinance-logo.png" alt="futurefinance" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        Future Finance
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://startup.aimcongress.com/" target='_blank' className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/startup-logo.png" alt="startups-unicorns" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        Startups & Unicorns
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://entrepreneurs.aimcongress.com/entrepreneurs" className='d-flex gap-3 align-items-center'>
                        <img src="/assets/logos/entrepreneurs-logo.png" alt="entrepreneurs" style={{ width: "20px", objectFit: "contain" }} className='portfolio-menu-logo' />
                        Entrepreneurs
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className='menu-item hover-menu-container' onMouseEnter={toggleResourcesDropdown} onMouseLeave={toggleResourcesDropdown}>
                <span>RESOURCES</span>
                {isResourcesDropdownOpen && (
                  <ul className="dropdown">
                    {/* <li className="dropdown-item">
                      <Link href="/travel-partner">
                        Album
                      </Link>
                    </li> */}
                    <li className="dropdown-item">
                      <Link href="/brochure">
                        Brochure
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/press-releases">
                        Press Release
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/postshow-reports">
                        Post Show Reports
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/articles">
                        Blogs
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/media-partners">
                        Media Partners
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/our-partners">
                        AIM Congress 2024 Partners
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className='menu-item hover-menu-container' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <span>LOGISTICS</span>
                {isDropdownOpen && (
                  <ul className="dropdown">
                    <li className="dropdown-item">
                      <Link href="/travel-partner">
                        Travel Partner
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/flight">
                        Official Airline Carrier
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/stand-builder">
                        Official Contractor
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

            </ul>
          </div>

          <div className='d-lg-block d-none'>
            <Link href="/contact-us" className='menu-cta-wrapper'>

              <button className='register-interest-cta'>Contact Us</button>
            </Link>
          </div>
          <motion.div
            className="menu-icon-wrapper d-lg-none d-block"
            onClick={handleToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isToggle ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMdClose size={32} className='menu-icon' cursor="pointer" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiOutlineMenuAlt2 size={32} className='menu-icon' cursor="pointer" />
              </motion.div>
            )}
          </motion.div>

        </div>


      </div>

      {isStartupRoute && (
        <StartupMenuComponent />
      )}

      <AnimatePresence>
        {isToggle && (
          <motion.div
            className="mobile-menu-nav d-lg-none d-block"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <ul className='mobile-menu-items'>
              <div className='d-flex justify-content-between px-4 py-3'>
                <Link href="https://aimcongress.com/" className="logo-wrapper">
                  <img src={`/assets/imgs/AIM-logo.png`} alt="Logo"
                    className='menu-logo white-logo' />

                </Link>
                <IoMdClose size={32} className='menu-icon' cursor="pointer" onClick={handleToggle} />
              </div>

              <li className='mobile-menu-item'>
                <Link href="/about" onClick={handleToggle}>
                  ABOUT AIM
                </Link>
              </li>
              <li className='mobile-menu-item'>
                <Link href="/event-highlights" onClick={handleToggle}>
                  AIM 2025
                </Link>
              </li>
              <li className='mobile-menu-item' onClick={togglePortfolioDropdown}>
                <span className='d-flex align-items-center justify-content-between'>PORTFOLIOS  {!isPortfolioDropdownOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
                {isPortfolioDropdownOpen && (
                  <ul className="mobile-dropdown">
                    <li className="dropdown-item">
                      <Link href="https://fdi.aimcongress.com/foreign-direct-investment" onClick={handleToggle} className='d-flex gap-2 align-items-center'>
                        <img src="/assets/logos/fdi-logo.png" alt="fdi" style={{ width: "20px", objectFit: "contain" }} />
                        Foreign Direct Investment
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="https://trade.aimcongress.com/global-trade" onClick={handleToggle} className='d-flex gap-2 align-items-center'>
                        <img src="/assets/logos/global-trade-logo.png" alt="globaltrade" style={{ width: "20px", objectFit: "contain" }} />
                        Global Trade
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="https://manufacturing.aimcongress.com/global-manufacturing" onClick={handleToggle} className='d-flex gap-2 align-items-center'>
                        <img src="/assets/logos/global-manufacturing.png" alt="" style={{ width: "20px", objectFit: "contain" }} />
                        Global Manufacturing
                      </Link>
                    </li>



                    <li className="dropdown-item">
                      <Link href="https://futurecities.aimcongress.com/future-cities" onClick={handleToggle} className='d-flex gap-2 align-items-center'>
                        <img src="/assets/logos/future-cities-logo.png" alt="futurecities" style={{ width: "20px", objectFit: "contain" }} />
                        Future Cities
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://futurefinance.aimcongress.com/digital-economy" onClick={handleToggle} className='d-flex gap-2 align-items-center'>
                        <img src="/assets/logos/digital-economy-logo.png" alt="" style={{ width: "20px", objectFit: "contain" }} />
                        Digital Economy
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="https://futurefinance.aimcongress.com/future-finance" onClick={handleToggle} className='d-flex gap-2 align-items-center'>
                        <img src="/assets/logos/futurefinance-logo.png" alt="futurefinance" style={{ width: "20px", objectFit: "contain" }} />
                        Future Finance
                      </Link>
                    </li>

                    <li className="dropdown-item"  >
                      <Link href="https://startup.aimcongress.com/" target='_blank' className='d-flex gap-2 align-items-center' onClick={handleToggle} >
                        <img src="/assets/logos/startup-logo.png" alt="startups-unicorns" style={{ width: "20px", objectFit: "contain" }} />
                        Startups & Unicorns
                      </Link>
                    </li>

                    <li className="dropdown-item" onClick={handleToggle} >
                      <Link href="https://entrepreneurs.aimcongress.com/entrepreneurs" className='d-flex gap-2 align-items-center' onClick={handleToggle} >
                        <img src="/assets/logos/entrepreneurs-logo.png" alt="entrepreneurs" style={{ width: "20px", objectFit: "contain" }} />
                        Entrepreneurs
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className='mobile-menu-item' onClick={toggleResourcesDropdown}>
                <span className='d-flex align-items-center justify-content-between'>RESOURCES  {!isResourcesDropdownOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
                {isResourcesDropdownOpen && (
                  <ul className="mobile-dropdown">
                    <li className="dropdown-item">
                      <Link href="/brochure" onClick={handleToggle}>
                        Brochure
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/press-releases" onClick={handleToggle}>
                        Press Release
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/postshow-reports" onClick={handleToggle}>
                        Post Show Reports
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/articles" onClick={handleToggle}>
                        Blogs
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/media-partners" onClick={handleToggle}>
                        Media Partners
                      </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link href="/our-partners" onClick={handleToggle}>
                        AIM Congress 2024 Partners
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className='mobile-menu-item' onClick={toggleDropdown}>
                <span className='d-flex align-items-center justify-content-between'>LOGISTICS  {!isDropdownOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
                {isDropdownOpen && (
                  <ul className="mobile-dropdown">
                    <li className="dropdown-item">
                      <Link href="/travel-partner" onClick={handleToggle}>
                        Travel Partner
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/flight" onClick={handleToggle}>
                        Official Airline Carrier
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/stand-builder" onClick={handleToggle}>
                        Official Contractor
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className='mobile-menu-item'>

                <Link href="/contact-us" onClick={handleToggle}>
                  <div className='menu-cta-wrapper w-100'>
                    <button className='register-interest-cta'>Contact Us</button>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="menu__overlay"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
