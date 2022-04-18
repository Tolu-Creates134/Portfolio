import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>

      <div className='hero-text'>
        <h1>Hi, I'm <span>Tolu</span> Abbass </h1>
        <h3>Junior Software Developer and content creator</h3>

        <div className='buttons'>
          <button className='btn-cv'><a href="CV.PDF" download>DOWNLOAD CV</a></button>
          <button className='btn-insta'><a href="https://www.instagram.com/everything.webdev/" target="_blank">INSTAGRAM BLOG</a></button>
        </div>

      </div>

     <div className='hero-image'></div>

    </div>












  )
}
