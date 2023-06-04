import React from 'react'
import "./pagination.css"



export default function Paginaiton() {
  return (
    <div className='pagination'>
      <div className='btn'> 
     
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
 </div>

        <h3><p>1</p></h3>
        <h3><p>2</p></h3> 
         <h3><p>3</p></h3>
        <h3 className='open'><p>4</p></h3> 
         <h3><p>5</p></h3>
         <h3><p>6</p></h3>
          <h2 className='dots'><span>...</span></h2>
         <h3><p>23</p></h3>
         <div className='btn'>

        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

        
         </div>
    </div>
  )
}
