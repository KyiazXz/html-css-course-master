import React from 'react'
import { BsFillPlayCircleFill} from 'react-icons/bs';
import {IconContext} from "react-icons";

import "./main.css"
export default function Main() {
  return (

    <>
    <div className='main-container grid grid-2-cols'>
        <div className='title-container flex '>
            <div>
            <div className='main-headin-container'>
            <h1>Learn New </h1>
            <h1>Languages and Move</h1> 
            <h1>Forward</h1>
            </div>
            <div className='subheading-container'>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, cumque! Ipsam harum eum accusamus! Corporis asperiores neque ea ab natus rem, dolor cupiditate a quasi, laboriosam officiis cum suscipit id!</p>
            </div>

            <div className='button-container flex '>
                <a href='#' >Get Started</a>
                <div className='icon-container flex'>
                <IconContext.Provider value={{className:"myReact-icons"}}>
                <BsFillPlayCircleFill/>
  </IconContext.Provider>
                </div>
                <p> Watch Into</p>
            </div>
            </div>

            
        </div>


        <div className='image-container flex'>
            <div className='img'>

            </div>
        </div>
    </div>

    </>
  )
}
