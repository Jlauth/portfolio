import React from 'react'
import { BsLinkedin, BsSlack } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="linkedin.com/in/jean-lauth-8b3579171/" target='__blank' rel='noreferrer'><BsLinkedin /></a>
      <a href="github.com/Jlauth" target='__blank' rel='noreferrer'><FiGithub /></a>
      <a href="https://join.slack.com/t/jeanlauthprivate/shared_invite/zt-24p5uphr5-2eB3GIYGXk29LiturSSWxA" target='__blank' rel='noreferrer'><BsSlack /></a>
    </div>
  )
}