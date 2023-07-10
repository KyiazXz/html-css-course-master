import React from 'react'
import { ImBooks} from 'react-icons/im';
import {IconContext} from "react-icons";
import { TbCertificate} from 'react-icons/tb';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {MdPeopleAlt} from 'react-icons/md';

export default function LearnAnything() {
  return (
    <div className='learn'>

    <div className=' main-container grid grid-2-cols'>
        <div className='learn-img-container margin-left '> 
        <div className='activate-students-container flex gap '>
                  <div className='icon-cont'>
                  <IconContext.Provider value={{className:"activate-student-icon"}}>
                    <MdPeopleAlt/> 
                    </IconContext.Provider>
                    </div>
                  <div className='topic-name'>
                    <h1>1250+</h1>
                    <p>Activate Stundents</p>
                  </div>
            </div>
        <img src='./course/boy.png' alt='boy reading book' />
        </div>
        <div className='learn-topics-container'>
          <div>
            <p className='learn-topics-title'>learn anything</p>
            <h1 className='learn-topics-header'> Benefits About Online</h1> <h1 className='learn-topics-header-2'>Learning Expertise</h1>
          </div>

          <div className='topics flex gap'>
            <div className='topic flex gap'>
                  <div className='icon-cont'>
                  <IconContext.Provider value={{className:"learn-icon"}}>
                    <ImBooks/> 
                    </IconContext.Provider>
                    </div>
                  <div className='topic-name'>
                    <h1>Online Courses</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalla and Consonatia, there live the blind texts.</p>
                  </div>
            </div>
      
            <div className='topic flex gap'>
                  <div className='icon-cont'>
                  <IconContext.Provider value={{className:"learn-icon"}}>
                    <TbCertificate/> 
                    </IconContext.Provider>
                    </div>
                  <div className='topic-name'>
                    <h1>Earn A Certificates</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalla and Consonatia, there live the blind texts.</p>
                  </div>
            </div>

            <div className='topic flex gap'>
                  <div className='icon-cont'>
                  <IconContext.Provider value={{className:"learn-icon"}}>
                    <FaChalkboardTeacher/> 
                    </IconContext.Provider>
                    </div>
                  <div className='topic-name'>
                    <h1>Learn with Expert</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalla and Consonatia, there live the blind texts.</p>
                  </div>
            </div>

          </div>

        </div>
    </div>
    </div>
  )
}
