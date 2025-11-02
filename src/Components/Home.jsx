import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assests/home-banner-background.png'
import BannerImage from '../Assests/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt='banner-background' />
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Deliciousness jumping into the mouth
                        </h1>
                    <p className='primary-text'>
                        Experience the best culinary delights from around the world, right at your doorstep. Savor the flavors of our expertly crafted dishes, made with fresh ingredients and a passion for perfection.</p>
                    <button className='secondary-button'>
                        Order Now <FiArrowRight />
                    </button>
                
                </div>
                <div className='home-banner-image-container'>
                    <img src={BannerImage} alt='banner' />
                </div>
        </div>
    </div>
  )
}

export default Home