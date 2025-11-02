import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>have question In Mind?</h1>
        <h1 className='primary-heading'>Let Us help you</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='yourmail@gmail.com' />
          
            <button className='secondary-button'> Send Message </button>
        </div>

    </div>
  )
}

export default Contact