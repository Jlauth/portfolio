import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser, BiSolidContact, BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidContact/></a>
      </nav>
    </div>
  )
}
