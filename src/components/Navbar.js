import React from 'react'
import './Navbar.css'
import { FaHome, FaBriefcase, FaFolderOpen, FaCamera } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className="navbar-links">
                <a href="#jaden" aria-label="Home"><FaHome/></a>
                <a href="#experience" aria-label="Experience"><FaBriefcase/></a>
                <a href="#projects" aria-label="Projects"><FaFolderOpen/></a>
                <a href="#photos" aria-label="Photos"><FaCamera/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
