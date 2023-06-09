import React from 'react'
import "./hero.css"

export default function Hero() {
 return  (
    <section className='section-hero'>
        <div className='hero'>

        <div className='hero-text-box'>
            <h1 className='heading-primary'>A healthy meal delivered to your door, every single day</h1>
            <p className='hero-description'>he smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
            <p href='#' className='btn btn-full margin-right-sm'>Start eating well </p>
            <p href='#' className='btn btn-outline'>Learn more </p>
            <div className='delivered-meals'>
                <div className='delivered-faces'>
                    <img src='./customers/customer-1.jpg'/>
                    <img src='./customers/customer-2.jpg'/>
                    <img src='./customers/customer-3.jpg'/>
                    <img src='./customers/customer-4.jpg'/>
                    <img src='./customers/customer-5.jpg'/>
                    <img src='./customers/customer-6.jpg'/>
                </div>
                <p className='delivered-text'>250,000+ meals delivered last year!</p>
            </div>
        </div>

        <div className='hero-img-box'>
            <img src='./omnifoodimg/hero.png' alt='img' className='hero-img'/>
        </div>
        </div>
    </section>
  )
}
