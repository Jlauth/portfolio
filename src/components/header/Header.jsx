import React from 'react'
import './header.css'
import { CTA } from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Jean Lauth</h5>
        <h1 className='text-light'>Développeur d'applications</h1>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
