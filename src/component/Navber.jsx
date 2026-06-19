import React from 'react'

const Navber = () => {
  return (
    <div>
<div className='nav_bar' 
data-aos="fade-down"
data-aos-duration="1000"
>
 
    <div className='lef nav_item' >Portfolio</div>
    <div className='rigt'>
         <a href="#Home" className=" nav_item">Home</a>
    <a href="#Experince" className="nav_item">Experince</a>
    <a href="#Skills" className="nav_item">Skills</a>
    <a href="#Project" className="nav_item">Project</a>
     <a href="#Responsive" className="nav_item">Responsive Design</a>
     <a href="#About" className="nav_item">About Me</a>
    <a href="#Contact" className="nav_item">Contact</a>
     
   
    </div>
   
   
</div>
    </div>
  )
}

export default Navber