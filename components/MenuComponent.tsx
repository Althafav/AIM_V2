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

    if (scrollTop > 300) {
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

  return (
    <nav className={`menu-wrapper ${!isVisible ? 'translate-y' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container ">
        <div className="top-items d-flex justify-content-end align-items-center mb-1">
          <div className="d-flex gap-5 align-items-center">
            <div className='top-item'><FaUser /><span>PORTAL LOGIN</span></div>
            <div className='top-item'><CiGlobe size={20} /> <span>EN</span></div>
          </div>


        </div>
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/" className="logo-wrapper">
            <img src={`/assets/imgs/AIM-logo.png`} alt="Logo"
              loading="lazy" className='menu-logo white-logo' />

            <img src={`/assets/imgs/AIMlogo-black.png`} alt="Logo"
              loading="lazy" className='menu-logo black-logo' />

          </Link>

          <ul className='menu-items'>
            <li className='menu-item'>
              <Link href="/about-us">
                ABOUT AIM
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="/about-us" className='aim-2025'>
                AIM 2025
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="/#Portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="/#Our-Services">
                OTHER SERVICES
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="/#Our-Services">
                BROUCHERS
              </Link>
            </li>


            <Link href="/contact-us" className='menu-cta-wrapper'>
              <button className='menu-cta-btn'><span>Secure Your Spot</span></button>
            </Link>
          </ul>

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

      {/* <AnimatePresence>
        {isToggle && (
          <motion.div
            className="mobile-menu-nav d-lg-none d-block"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <ul className='mobile-menu-items'>
              <li className='mobile-menu-item'>
                <Link href="/about-us" onClick={handleToggle}>
                  ABOUT AIM
                </Link>
              </li>
              <li className='mobile-menu-item'>
                <Link href="/#Our-Services" onClick={handleToggle}>
                  AIM 2025
                </Link>
              </li>
              <li className='mobile-menu-item'>
                <Link href="/#Portfolio" onClick={handleToggle}>
                  PORTFOLIO
                </Link>
              </li>
              <li className='mobile-menu-item'>
                <Link href="/#Portfolio" onClick={handleToggle}>
                  OTHER SERVICES
                </Link>
              </li>

              <li className='mobile-menu-item'>
                <Link href="/#Portfolio" onClick={handleToggle}>
                  BROUCHERS
                </Link>
              </li>
              <Link href="/contact-us" onClick={handleToggle}>
                <div className='menu-cta-wrapper'>
                  <button className='mobile-menu-cta-btn'><span>Secure Your Spot</span></button>
                </div>
              </Link>
            </ul>
            <div className="menu__overlay"></div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </nav>
  );
}
