import React from 'react'
import PickMeals from '../Assests/pick-meals-image.png'
import ChooseMeals from '../Assests/choose-image.png'
import deliveryMeals from '../Assests/delivery-image.png'


const Work = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Browse our menu and select your favorite dishes. We offer a wide variety of options to satisfy every craving.',
        },
        {
            image: ChooseMeals,
            title: 'Choose How To Pay',
            text: 'We offer multiple payment options for your convenience. Choose the one that works best for you during checkout.',
        },
        {
            image: deliveryMeals,   
            title: 'Fast Delivery',
            text: 'Enjoy quick and reliable delivery straight to your doorstep. Our team is dedicated to getting your food to you hot and fresh.',
        },
    ];

        

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
                Experience the convenience of our food delivery service in just a few simple steps. From browsing our menu to enjoying your meal, we've got you covered.
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt='' />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Work