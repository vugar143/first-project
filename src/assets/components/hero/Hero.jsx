import React from 'react'
import "./Hero.css"
import "../../../App.css"
import Button from '../button/Button'
function Hero() {
  return (
    <div className='hero-container'>
        <video src="/video/video-1.mp4" autoPlay muted loop></video>
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--otline" buttonSize="btn--large">
                GET STARTED 
            </Button>
            <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </div>
    </div>
  )
}

export default Hero