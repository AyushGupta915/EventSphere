import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
                    EventSphere is an intelligent event discovery and booking platform designed to bridge the gap between experiences and people. 
                    Whether you're a curious attendee or an ambitious event organizer, EventSphere offers a seamless, user-friendly hub to explore, create, and manage events with ease.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content center">
                <h2>
                    Events Sphere
                </h2>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Reviews</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 7027710156</li>
                    <li>ag18012005@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>© 2025 EventSphere. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy | FAQ</p>
    </div>
  )
}

export default Footer