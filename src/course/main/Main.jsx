import React from 'react'
import { BsFillPlayCircleFill} from 'react-icons/bs';
import {IconContext} from "react-icons";
import LearnAnything from './secondPage/LearnAnything';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


import "./main.css"
export default function Main() {
  return (

    <>
    <div className='main'>

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
<div className='avatar-container'>

<AvatarGroup total={24}>
  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QI9SMmsJ-spISijcgGAjClqfAlrZs9y-nV0hMFlE-4KnjwuuWdzzOTQfwlFVQnSsa1E&usqp=CAU" />
  <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlnYvbq5Kx-XcQ7nAmKe12T6sCBTz3-JNM8fwEfb-3z9eCLgUKfeWWV9q9BbJCJWCmRQ&usqp=CAU" />
  <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudCUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnQlMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" />
</AvatarGroup>
</div>
            </div>

            
        </div>


        <div className='image-container flex'>
            <div className='img'>

            </div>
        </div>
    </div>
              </div>



        <LearnAnything/>
    </>
  )
}
