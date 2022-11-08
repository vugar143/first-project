import React from 'react'
import Button from '../button/Button'
import "./Footer.css"
import {Link} from "react-router-dom"
function Footer() {
  return (
    <>
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
Join the adventure newsletter to get to update.
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email"
                    name='email'
                    placeholder='email'
                    className='footer-input'
                    />
                    
                </form>
                <Button buttonStyle="btn--outline">Subscribe</Button>

            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
<div className="footer-link-items">
    <h2>About us</h2>
    <Link to="/sign-up">How it works</Link>
    <Link to="/">Testimonials</Link>
    <Link to="/">Careers</Link>
    <Link to="/">Investors</Link>
    <Link to="/">Term of services</Link>
</div>
<div className="footer-link-items">
    <h2>Videos</h2>
    <Link to="/sign-up">How it works</Link>
    <Link to="/">Testimonials</Link>
    <Link to="/">Careers</Link>
    <Link to="/">Investors</Link>
    <Link to="/">Term of services</Link>
</div>
<div className="footer-link-wrapper">
<div className="footer-link-items">
    <h2>Contact us</h2>
    <Link to="/sign-up">How it works</Link>
    <Link to="/">Testimonials</Link>
    <Link to="/">Careers</Link>
    <Link to="/">Investors</Link>
    <Link to="/">Term of services</Link>
</div>
<div className="footer-link-items">
    <h2>Social Media</h2>
    <Link to="/sign-up">How it works</Link>
    <Link to="/">Testimonials</Link>
    <Link to="/">Careers</Link>
    <Link to="/">Investors</Link>
    <Link to="/">Term of services</Link>
</div>
</div>
            </div>
        </div>
        <div className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className='social-logo'> 
                    TRVL <i className='fab fa-typo3' />
                    </Link>
                </div>
                <small className='website-rights'>
                    TRVL 2022
                </small>
                <div className="social-icons">
                    <Link to="/"
                    className='social-icon-link facebook'
                    target="_blank"
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'/>
                       
                        </Link>
                    <Link to="/"
                    className='social-icon-link instagram'
                    target="_blank"
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'/>
                    </Link>
                   
                    <Link to="/"
                    className='social-icon-link youtube'
                    target="_blank"
                    aria-label='Youtube'
                    >
                        <i className='fab fa-youtube'/>
                    </Link>
                    <Link to="/"
                    className='social-icon-link twitter'
                    target="_blank"
                    aria-label='Twitter'
                    >
                        <i className='fab fa-twitter'/>
                    </Link>
                    <Link to="/"
                    className='social-icon-link linkedin'
                    target="_blank"
                    aria-label='Linkedin'
                    >
                        <i className='fab fa-linkedin'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer