import React from 'react'
import story from './img/restaurant-logo-design.jpg'

function About() {
  return (
    <>
    
    <div className='about'>
        <div className='about-story'>
            <h2>About Us</h2>
            <p>
            Tom Sellers tells his story and the story of British food 
            through an ever-evolving tasting menu of seasonal dishes. The restaurant
            gained its first Michelin star 
            after five months of opening in 2013 and its second Michelin star in 2021.
            </p>
        </div>
        
        <img src={story} alt='story' />


    </div>
    
    </>
  )
}

export default About