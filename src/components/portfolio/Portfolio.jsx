import React, { useRef } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ap1.png'
import IMG2 from '../../assets/ap3.png'
import IMG3 from '../../assets/stage.png'

export const Portfolio = ({ onAp1Click, onAp3Click, onStageClick }) => {
  const ap1Ref = useRef(null)
  const ap3Ref = useRef(null)
  const stageRef = useRef(null)

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item' ref={ap1Ref}>
          <h3>PHP Symfony study project</h3>
          <img src={IMG1} className='portfolio__img' alt="Illustration projet d'études PHP Symfony" />
          <div className="portfolio__item-img">
            <div className="portfolio__item-cta">
              <button className='btn btn-primary' onClick={() => onAp1Click(ap1Ref)}>Details</button>
            </div>
          </div>
        </article>
        <article className='portfolio__item' ref={ap3Ref}>
          <h3>C#/API REST study project</h3>
          <img src={IMG2} alt="Illustration projet d'études C#/API REST" />
          <div className="portfolio__item-img">
            <div className="portfolio__item-cta">
              <button className='btn btn-primary' onClick={() => onAp3Click(ap3Ref)}>Details</button>
            </div>
          </div>
        </article>
        <article className='portfolio__item' ref={stageRef}>
          <h3>Java internship work</h3>
          <img src={IMG3} alt="Illustration travail de stage" />
          <div className="portfolio__item-img">
            <div className="portfolio__item-cta">
              <button className='btn btn-primary' onClick={() => onStageClick(stageRef)}>Details</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
