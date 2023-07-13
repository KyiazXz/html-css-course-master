import React from 'react'

export default function CoursesWeOffer() {
  return (
    <>
    <div className='main-container'>
        <h1 className='offer-header'>courses we offer</h1>
    
    <div className='list-img-container flex gap'>

    <div className='offer-img-container'>
       <div className='flex offer-description'>
        <h1>English for Beginners</h1>
        <h3>$25</h3>
        <p>Price per lesson</p>
       </div>
       
    </div>


    <div className='offer-img-container'>
       <div className='flex offer-description'>
        <h1>Online Learning</h1>
        <h3>$35</h3>
        <p>Price per lesson</p>
       </div>
       
    </div>


    <div className='offer-img-container'>
       <div className='flex offer-description'>
        <h1>English for Business</h1>
        <h3>$40</h3>
        <p>Price per lesson</p>
       </div>
       
    </div>


    <div className='offer-img-container'>
       <div className='flex offer-description'>
        <h1>English for Kids</h1>
        <h3>$17</h3>
        <p>Price per lesson</p>
       </div>
       
    </div>

    </div>
    </div>
    </>
  )
}
