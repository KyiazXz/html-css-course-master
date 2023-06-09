import React from 'react'

export default function Pricing() {
  return (
    <section className='section-pricing' >
 <div className="container">
      <span className="subheading">Pricing</span>
      <h2 className="heading-secondary">
        Eating well without breaking the bank
      </h2>
    </div>

    <div className='container grid grid--2--cols'>
    <div className='pricing-plan pricing-plan-starter'>
        <header className='plan-header'>
            <p className='plan-name'> Starter </p>
            <p className='plan-price'>$399</p>
                <p className='plan-text'>per month. That's just $13 per meal</p>
            </header>

            <ul className="list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span> 1 meal per day</span>
          </li>

          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Order from 11am and 9pm</span>
          </li>
    
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span> Delivery is freen</span>
          </li>

          <li c="list-item">
            <ion-icon class="list-icon" name="close-outline"></ion-icon>
          </li>

          </ul>
          <p href='#' className='btn btn-full plan-signUp'>Start eating well </p>

          
    </div>
    <div  className='pricing-plan pricing-plan-complete'> 

    <header className='plan-header'>
    <p className='plan-name'> Complete </p>
          <p className='plan-price'>$649</p>
            <p className='plan-text'>per month. That's just $11 per meal</p>
            </header>

            <ul className="list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span> 2 meal per day</span>
          </li>

          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Order 24/7</span>
          </li>
    
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span> Delivery is free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span> Get access to latest recipes</span>
          </li>

          </ul>
          <div className='plan-signUp'></div>
          <p href='#' className='btn btn-full '>Start eating well </p>

    </div>
    </div>
    

{/* features */}
      <div className='container grid'>
        <aside className='plan-details'>Prices include all applicable taxes. Users can cancel at any time.</aside>
      </div>

    <div className='container grid grid-4-cols' >

        <div className="feature">
        <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>
          <p className='feature-title'> Never cook again! </p>
   
          <p className='feature-text'>
           Our subscriptions cover 365 days per year, even including major holidays. </p>
        </div>  

        <div className="feature"> <ion-icon class="feature-icon" name="nutrition-outline"></ion-icon>
          <p className='feature-title'> Local and organic! </p>
           
          <p className='feature-text'>Our cooks only use local, fresh, and organic products to prepare your meals. </p>
          </div>

          <div className="feature"> <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
          <p className='feature-title'> No waste </p>
         
          <p className='feature-text'>  All our partners only use reusable containers to package all your meals.</p>
          </div>

           <div className="feature"> <ion-icon class="feature-icon" name="pause-outline"></ion-icon>
          <p className='feature-title'> Pause anytime</p>
          
          <p className='feature-text'> Going on vacation? Just pause your subscription, and we refund unused days.</p>
          </div>

    </div>
    </section>
  )
}
