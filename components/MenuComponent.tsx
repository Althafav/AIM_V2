import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { CiGlobe } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

export default function MenuComponent() {
  const [isToggle, setIsToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <nav className={`menu-wrapper ${!isVisible ? 'translate-y' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div className="top-items d-flex justify-content-end align-items-center mb-1">
              <div className="d-flex gap-5 align-items-center">
                <div className='top-item'><span style={{ textDecoration: "underline" }}>LOGIN</span></div>
                <div className='top-item'><CiGlobe size={20} /> <span>EN</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-end justify-content-between">
          <Link href="/" className="logo-wrapper">
            <img src={`/assets/imgs/AIM-logo.png`} alt="Logo"
              className='menu-logo white-logo' />

          </Link>

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
              <li className='menu-item'>
                <Link href="/#Portfolio">
                  PORTFOLIOS
                </Link>
              </li>
              <li className='menu-item'>
                <Link href="#">
                  RESOURCES
                </Link>
              </li>
              <li className='menu-item logistics' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <span>LOGISTICS</span>
                {isDropdownOpen && (
                  <ul className="dropdown">
                    <li className="dropdown-item">
                      <Link href="/travel-partner">
                        Travel Partner
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="#">
                        Flight
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/stand-builder">
                        Stand Builder
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

            </ul>
          </div>

          <div className='d-lg-block d-none'>
            <Link href="/contact-us" className='menu-cta-wrapper'>

              <button className='register-interest-cta'>Register your interest</button>
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
                <Link href="/" className="logo-wrapper">
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
              <li className='mobile-menu-item'>
                <Link href="/#Portfolio" onClick={handleToggle}>
                  PORTFOLIOS
                </Link>
              </li>
              <li className='mobile-menu-item'>
                <Link href="/#Portfolio" onClick={handleToggle}>
                  RESOURCES
                </Link>
              </li>

              <li className='mobile-menu-item' onClick={toggleDropdown}>
                <span>LOGISTICS</span>
                {isDropdownOpen && (
                  <ul className="dropdown">
                    <li className="dropdown-item">
                      <Link href="/travel-partner">
                        Travel Partner
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="#">
                        Flight
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/stand-builder">
                        Stand Builder
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className='mobile-menu-item'>

                <Link href="/contact-us" onClick={handleToggle}>
                  <div className='menu-cta-wrapper w-100'>
                    <button className='register-interest-cta'>Register your interest</button>
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
