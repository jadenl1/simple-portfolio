// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

import { LuFingerprint } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";
import { PiMountainsBold } from "react-icons/pi";

const sections = ['jaden','experience','projects','photos'];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState('jaden');
  const lastScrollY = useRef(window.scrollY);

  // hide/show on mobile scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (window.innerWidth < 800) {
        const delta = currentY - lastScrollY.current;
        if (delta > 10) {
          setVisible(false);
        } else if (delta < -10) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // highlight active section
  useEffect(() => {
    const handleActive = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = 'jaden';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleActive, { passive: true });
    handleActive();
    return () => window.removeEventListener('scroll', handleActive);
  }, []);

  return (
    <div className={`navbar-container ${!visible ? 'hidden' : ''}`}>
      <div className='navbar'>
        <div className="navbar-links">
          <a href="#jaden" className={active === 'jaden' ? 'active' : ''}><LuFingerprint className="nav-icon"/></a>
          <a href="#experience" className={active === 'experience' ? 'active' : ''}><FiBriefcase className="nav-icon"/></a>
          <a href="#projects" className={active === 'projects' ? 'active' : ''}><MdOutlineFolderCopy className="nav-icon"/></a>
          <a href="#photos" className={active === 'photos' ? 'active' : ''}><PiMountainsBold className="nav-icon"/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
