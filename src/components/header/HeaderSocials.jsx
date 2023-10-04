import React from 'react'
import { BsLinkedin, BsSlack } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='__blank'><BsLinkedin /></a>
      <a href="https://github.com" target='__blank'><FiGithub /></a>
      <a href="https://slack.com" target='__blank'><BsSlack /></a>
    </div>
  )
}
