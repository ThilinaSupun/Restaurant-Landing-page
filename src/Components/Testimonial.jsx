import React from 'react'
import ProfilePic from '../Assests/Thilina Adikari .png'
import  { AiFillStar } from 'react-icons/ai'


const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
                Hear from our satisfied customers and discover why they love our food delivery service. From delicious meals to exceptional service, our testimonials speak for themselves.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <div className='profilePic'>
           <img src={ProfilePic} alt="profile" /></div>
           <p>
            "The food was absolutely delicious and arrived hot and fresh. The delivery was quick and the driver was friendly. I will definitely be ordering from here again!"
           </p>
              <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2> Thilina Adikari </h2>
        </div>

        



    </div>
  )
}

export default Testimonial