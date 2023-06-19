import React from 'react'
import "./hero.css"
import SectionHow from '../sectionHow/SectionHow'
import SectionFeatured from '../sectionFeatured/SectionFeatured'
import Meals from '../meals/Meals'
import SectionTestimonial from '../sectionTestimonials/SectionTestimonial'
import Pricing from '../pricing/Pricing'
import Action from '../action/Action'


export default function Hero() {
 return  (
<>
    <header className='header'>
        <img src='./omnifoodimg/omnifood-logo.png'  alt='logo' className='logo'/>
        <nav className='main-nav'>
        <ul className='main-nav-list'>
            <li>Section 1</li>
            <li>Section 2</li>
            <li>Section 3</li>
            <li>Section 4</li>
        </ul>
        </nav>
    </header>
    <main>

    <section className='section-hero'>
        <div className='hero'>

        <div className='hero-text-box'>
            <h1 className='heading-primary'>A healthy meal delivered to your door, every single day</h1>
            <p className='hero-description'>The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
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
  <SectionFeatured />
   <SectionHow />
    <Meals/>
    <SectionTestimonial/>
    <Pricing/>
    <Action/>
    </main>
    </>
  )
}
