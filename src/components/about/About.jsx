import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Diploma</h5>
              <h6>BTS SIO option SLAM</h6>
              <small>Services Informatiques aux Organisations option Solutions Logicielles et Applications Métier</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Pro</h5>
              <h6>Professional retraining</h6>
              <small>Former cook, telephone advisor, mechanic worker, delivery man</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Private</h5>
              <h6>36 ans, Bayeux sector (Calvados)</h6>
              <small>Vehicle-equipped (car and bike)</small>
            </article>
          </div>

          <p></p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}