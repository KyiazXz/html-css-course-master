import React from 'react'
import "./carousel.css"
export default function Carousel() {
  return (
    <>
    <div className='carousel'>
      <img src='https://storage.googleapis.com/pai-images/28bacecfd51d4d38bbc887ac874490d4.jpeg' alt='image' />
      <blockquote className='testimonial'>
        <p className='testimonial-text'>
         " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius nisi ea quisquam. Reiciendis illum explicabo asperiores quam voluptatibus repudiandae nulla tempora quaerat saepe, aut mollitia neque, itaque totam ea?"
          </p>
          <p className='testimonial-author'>
            Kyiazbek Zholdoshev
          </p>
          <p className='testimonial-job'>
          "Frontend developer"
          </p>
      </blockquote>
      <button className='btn-left'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
      </button>
      <button className='btn-right'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

      </button>
    </div>
    </>
    
  
  )
}
