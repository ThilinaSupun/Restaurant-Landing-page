import React from 'react'
import Logo from '../Assests/Logo.svg';
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='footer-icons'>
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <BsPinterest />
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>Blog</span>
                <span>About Us</span>
                <span>Contact Us</span>
                <span>Terms & Services</span>
                <span>Privacy Policy</span>
            </div>
            <div className='footer-section-columns'>
                <span>Get the App</span>
                <span>View your Cart</span>
                <span>Order Help</span>
                <span>Track Your Order</span>
            </div>

        </div>


    </div>
  )
}

export default Footer