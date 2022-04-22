import React from 'react'
import './Projects.css'

export const Projects = () => {
  return (
      
    <div className='projects' id='projects'>
        <div className='divider'></div>
        <h1>Projects</h1>
        
                
        <div className='project'>
            <div className='real-estate'></div>

            <div className='project-text'>
                <h2>Real Estate site for browsing properties</h2>
                <h3>Stack</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Material UI</li>
                    <li>Rapid API</li>
                </ul>
                    
                <div className='btns'>
                    <button className='btn'><a href='https://real-estate-app-nu-eight.vercel.app/' target='_blank'>LIVE DEMO</a></button>
                    <button className='btn'><a href="https://github.com/Tolu-Creates134/Real-Estate-App" target="_blank">SOURCE CODE</a></button>
                </div>


            </div>

        </div>



        <div className='project'>

            <div className='car-rental'></div>
            <div className='project-text'>
                <h2>Car Rental Site with Checkout</h2>
                <h3>Stack</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Material UI</li>
                    <li>Commerce.js</li>
                    <li>Stripe Payment</li>
                </ul>
                    
                <div className='btns'>
                    <button className='btn'><a href='https://car-rental-site.vercel.app/' target='_blank'>LIVE DEMO</a></button>
                    <button className='btn'><a href="https://github.com/Tolu-Creates134/Car-Rental-Site" target="_blank">SOURCE CODE</a></button>
                </div>

            </div>

        </div>


        <div className='project'>

            <div className='netflix-clone'></div>

            <div className='project-text'>
                <h2>Netflix Clone</h2>
                <h3>Stack</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Styled Components</li>
                    <li>IMDB API</li>
                </ul>

                <div className='btns'>
                    <button className='btn'><a href='https://vercel.com/tolu-creates134/netflix-clone' target='_blank'>LIVE DEMO</a></button>
                    <button className='btn'><a href='https://github.com/Tolu-Creates134/Netflix-Clone' target="_blank">SOURCE CODE</a></button>
                </div>


            </div>
                
        </div>
            
                
                
                


                


      
        
      
      
    </div>
      

  )
}
