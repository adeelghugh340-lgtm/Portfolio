
import './App.css';
import Navber from './component/Navber';
import Home from "./component/Home"
import Experience from './component/Experience';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Responsive from './component/Responsive';
import About from './component/About';
function App() {
  useEffect(()=>{

    Aos.init();
  },[])
  return (
    <div>
     
    <div className="App">
       <Navber/>
      <div className='container'>
        <Home/>
        <Experience/>
        <Skills/>
        <Project/>
         <Responsive/>
           <About/>
        <Contact/>
      
       
      </div>
      
    </div>
    </div>
  );
}

export default App;
