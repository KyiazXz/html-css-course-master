import React from 'react'

export default function Action() {
  return (
    <section className='section-cta'>
        <div className='container'>
            <div className='cta'>
                    <div className='cta-text-box'>
                        <h2 className='heading-secondary'>
                        We offer a free sample meal
                        </h2>
                        <p className='cta-text'>
                        Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
                        </p>
                        

                        <form className='cta-form' action='#'>
                     <div>
                            <label for="full-name">Full Name</label>
        	                <input id="full name"type='text' placeholder='John ' required />
                      </div>

                        <div>
                            <label for=""email>Email addres</label>
                            <input  id="email" type='email' required/>
                            
                        </div>

                        <div>
                            <label> Where did you hear from us?</label>
                            <select required>
                                <option value="instagram">Instagram</option>
                                <option value="facebook">Facebook</option>
                                <option value="friends">Friends</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                            <button className='btn'>sign up now</button>
                        </form>
                    </div>

                    <div className='cta-img-box' role='img' aria-label='woman enjoying'>
                        
                    </div>
            </div>
        </div>
    </section>
  )
}
