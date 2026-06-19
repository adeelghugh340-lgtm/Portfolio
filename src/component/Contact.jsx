import React from 'react'
import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
// import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div>
        <div className="container-contact" id='Contact'>
            <h1 className='me' style={{color:"block"}}>CONTACT ME</h1>
            <div className="contact-icon"
            // data-aos="zoom-in"
            // data-aos-duration="1000"
            
            >
               

<a href="https://www.linkedin.com/in/muhammad-adeel-b9a141396/" target='_blank'   rel="noopener noreferrer" className="item">
    <CiLinkedin className='icon'/>

</a>
<a href="tel:+923348143375" target='_blank'   rel="noopener noreferrer" className="item">
   <IoLogoWhatsapp  className='icon'/>
  

</a>
<a href="https://github.com/adeelghugh340-lgtm" target='_blank' className="item"   rel="noopener noreferrer">
    <FaSquareGithub className='icon'/>

</a>
<a href="mailto:adeelghugh340@gmail.com" target='_blank' className="item"   rel="noopener noreferrer">
    <CgMail className='icon'/>
</a>
            </div>
           
        </div>
        
        
        
        </div>
  )
}

export default Contact