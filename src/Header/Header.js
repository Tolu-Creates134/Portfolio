import React from 'react'
import './Header.css'
import { FaGithubAlt } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

export const Header = () => {
  return (
    <div className='header'>
        <h1 className='title'>TOLU</h1>

        <nav className='nav'>
          <ul>
            <li><a href='#about'>ABOUT</a></li>
            <li><a href='#tech'>TECHNOLOGIES</a></li>
            <li><a href='#projects'>PROJECTS</a></li>
            <li><a href='#contact'>CONTACT</a></li>
          </ul>
        </nav>

        <div className='socials'>
          <a href="https://github.com/Tolu-Creates134" target="_blank"><FaGithubAlt/></a>
          <a href='https://www.linkedin.com/in/tolu-abbass-713114217/' target="_blank"><FaLinkedinIn/></a>
            
        </div>






    </div>
  )
}
