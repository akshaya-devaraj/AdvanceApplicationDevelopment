import React from 'react'
import '../assets/css/About.css'
import abtbg from '../assets/images/abtbg.png'
import logo1 from '../assets/images/logo1.jpg'
import { useNavigate } from 'react-router-dom'
function About() {
  const nav=useNavigate();
  const back=()=>
  {
    nav("/");
  }
  return (
    <div><div className='abtpage'>
    <div classname='abtbody'>
    <div className='containerbg'>
    <div className='containerabt'>
    <div className='abtus'>ABOUT US</div><div className='back' onClick={back}>BACK</div>
    <br/>   
    <img src={abtbg} width={1000} height={500} className='abtlogo'/></div>
    </div>
    <div className='abt'>
    <h4>Team up with sellers near you, sellers like you, or just sellers you really like. Converse, collaborate, and create great things together,
     in the industry<br/>global marketplace for unique and creative goods.  We connect creative entrepreneurs from nearly every country around the world with buyers shopping for something special.
     Tackle unique problems alongside talented coworkers and teams. We're large enough that you'll focus on meaningful, complex challenges, but small enough that you can make a rewarding impact. See your work make a true difference in people's lives.</h4> 
     <div className='imgs'>
     </div>
     <br/>
     <div className='teamname'>Our Team</div>
     <div className='team'>
     <div>
     <img src={logo1} width={80} />
     <br/>
     Hemaharshini K J<br/>IT<br/>3 Yr
     </div>
     <div>
     <img src={logo1} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Akshaya D<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     <div>
     <img src={logo1} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abhishek P<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     </div>
     </div>
     </div>
     </div></div>
  )
}

export default About