import React from 'react'
import './footer.css'
import { BsLinkedin, BsSlack } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jean Lauth</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com/in/jean-lauth-8b3579171/" target='__blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/Jlauth" target='__blank' rel='noreferrer'><FiGithub /></a>
        <a href="https://join.slack.com/t/jeanlauthprivate/shared_invite/zt-24p5uphr5-2eB3GIYGXk29LiturSSWxA" target='__blank' rel='noreferrer'><BsSlack /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jean Lauth. All rights reserved.</small>
      </div>
    </footer>
  )
}
