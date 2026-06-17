import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/CV Resume.pdf';
import hero from '../data/hero.json'
import { Typed } from 'react-typed';

const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const option = {
      strings:["Welecom to my portfolio","My Name Muhammad Adeel","I am Front End Developer (React.Js)"],
      typeSpeed:50,
      backSpeed:50,
      loop:true

    }
    const typed = new Typed(typedRef.current,option)
    return () =>{
typed.destroy()

    }
  },[])
  return (
    <div>
<div className="container home"
id='Home'
>
<div className="left"
data-aos="fade-up-right"
data-aos-duration="1000"
>
    <h1 ref={typedRef}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <a href={pdf} download="CV Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
         
</div>
<div className="righ">
  <div className="img"  
  
  data-aos="fade-up-left"
data-aos-duration="1000"
>
    <img src={`/assets/${hero.imgSrc}`} alt="" className='hero' />
  </div>


</div>


</div>
    </div>
  )
}

export default Home