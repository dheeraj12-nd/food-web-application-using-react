import React from 'react'
import aboutImg from '../assets/images/about-img.jpeg'

const About = () => {
  return (
    <>
        <section className='about' id='about'>
            <h2 className='heading'>
                <span>About</span> us
            </h2>
            <div className='row'>
                <div className='image'>
                    <img src={aboutImg} alt=''/>
                </div>
                <div className='content'>
                    <h3>Diverse Cultures Blend, Creating Unique Culinary Tapestry of Global Delights</h3>
                    <p>Our food's exceptional nature lies in the intricate blend of diverse cultures, creating a unique culinary 
                    tapestry that spans the globe. From the rich heritage of traditional recipes passed down through generations 
                    to the endless variety of ingredients shaped by distinct climates and ecosystems, each dish tells a story of cultural identity.</p>
                    <a href='#' className='btn'>Learn more</a>
                </div>
            </div>
        </section>    
    </>
  )
}

export default About