import React from 'react'
import "./hero.css"


export default function Hero() {
  return (
    <div>
        <header>
            <nav className='container' >
                <div>Logo</div>
                <div>Navigation</div>
            </nav>

            <div className='header-container'>
            <div className='hearder-inner'>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam unde ad nostrum autem iusto inventore nisi sequi necessitatibus perferendis nemo, eos exercitationem eveniet quam deserunt alias corrupti, iure eaque deleniti!</p>
                
            <a href='#' className='btn'> click me </a>
            </div>
            </div>

        </header>
        <section>
            <div className='container'>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ut fugiat nihil, veritatis velit accusantium qui non earum magnam eius rem totam similique praesentium alias, magni consectetur a omnis eum?</p>
            </div>
        </section>
    </div>
  )
}
