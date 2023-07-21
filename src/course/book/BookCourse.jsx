import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {IconContext} from "react-icons";

export default function BookCourse() {
  return (
    <div className='main-container  '>
        <div className='book-container grid grid-4-cols '>

            <div className='book-img-container '>
                 <img src='./course/book.png' alt='book' className='offset' />
            </div>

    <div className='book-topics-container flex'> 

          <div className='book-topic flex gap'>
                  <div className='icon-cont'>
                  <IconContext.Provider value={{className:"book-learn-icon"}}>
                    <BsFillCheckCircleFill/> 
                    </IconContext.Provider>
                    </div>
                  <div className='book-topic-name'>
                    <h1>Coaching Expertise</h1>
                  
                  </div>
            </div>

            <div className='book-topic flex gap'>
                  <div className='icon-cont'>
                  <IconContext.Provider value={{className:"book-learn-icon"}}>
                    <BsFillCheckCircleFill/> 
                    </IconContext.Provider>
                    </div>
                  <div className='book-topic-name'>
                    <h1>Personalized Guidance</h1>
                  
                  </div>
            </div>

            <div className='book-topic flex gap'>
                  <div className='icon-cont'>
                  <IconContext.Provider value={{className:"book-learn-icon"}}>
                    <BsFillCheckCircleFill/> 
                    </IconContext.Provider>
                    </div>
                  <div className='book-topic-name'>
                    <h1>Continuous Support</h1>
                  
                  </div>
            </div>
   </div>



   <div className='book-topics-container flex'> 

<div className='book-topic flex gap'>
        <div className='icon-cont'>
        <IconContext.Provider value={{className:"book-learn-icon"}}>
          <BsFillCheckCircleFill/> 
          </IconContext.Provider>
          </div>
        <div className='book-topic-name'>
          <h1>Flexible Scheduling</h1>
        
        </div>
  </div>

  <div className='book-topic flex gap'>
        <div className='icon-cont'>
        <IconContext.Provider value={{className:"book-learn-icon"}}>
          <BsFillCheckCircleFill/> 
          </IconContext.Provider>
          </div>
        <div className='book-topic-name'>
          <h1>Premium Membership</h1>
        
        </div>
  </div>

  <div className='book-topic flex gap'>
        <div className='icon-cont'>
        <IconContext.Provider value={{className:"book-learn-icon"}}>
          <BsFillCheckCircleFill/> 
          </IconContext.Provider>
          </div>
        <div className='book-topic-name'>
          <h1>Community Access</h1>
        
        </div>
  </div>
</div>


<div className='book-price-container flex'> 
<div className='book-price flex '>

  <div className='book-price-heading'>
    <h1> Pro Plan</h1>
  </div>

  <div className='book-price'> 
    <h2>$25</h2>
    </div>

    <div className='book-button'>
      <p>buy now</p>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}
