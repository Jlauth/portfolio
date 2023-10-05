import React from 'react'
import CV from '../../assets/CV_Jean_Lauth.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' target='_blank' rel="noreferrer">Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
