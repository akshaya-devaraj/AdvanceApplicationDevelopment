import React, { useState } from 'react'; // Added import for useState
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import '../assets/css/Contact.css'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const [firstname, setFirstname] = useState(''); 
    const [lastname, setLastname] = useState(''); // Corrected the function name
    const [mobile, setMobile] = useState(''); 
    const [query, setQuery] = useState(''); 
    const [isRegistered, setIsRegistered] = useState(false);
    
    const nav=useNavigate();
    const home=()=>{
      nav("/")
    }
    const submitquery = (e) => {
      e.preventDefault();
      setIsRegistered(true);
      const formData = {
        firstname,
        lastname,
        mobile,
        query,
      };
    };
     
    return (
    <>
    <div className='contactbody'>
    <div className='containercu'>
    <div className='ic'>
    <h1>CONTACT US ON:</h1>
    <li>
    <a className="generic-anchor footer-list-anchor" href='https://www.facebook.com/'><FacebookIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor" href='https://www.instagram.com/'><InstagramIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor" href='https://www.linkedin.com/'><LinkedInIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor" href='https://www.pinterest.com/pinterest/' ><PinterestIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor" href='https://www.youtube.com/'><YouTubeIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor" href='https://telegram.org/'><TelegramIcon fontSize='medium'/></a>
    <a className="generic-anchor footer-list-anchor" href='https://twitter.com/i/flow/login'><TwitterIcon fontSize='medium'/></a>
    </li>
    <br/>
    <li>
    <a className="generic-anchor footer-list-anchor"><CallIcon fontSize='medium' className='icon'/>   +91 7895461230  </a>
    </li>
    <br/>
    <li>
    <a className="generic-anchor footer-list-anchor"><MapIcon fontSize='medium' className='icon'/>  SKCT, Kovaipudur, <br/>&nbsp; Coimbatore, TN 641042</a>
    </li>
    </div>
    <div className='line2'>
    <p></p>
    
    </div>
   
    <div className='cu'>
    <form className='submitqueryform' onSubmit={submitquery}>
    <center><h1>Message Us</h1></center>
    <br/>
    <br/>
    <label htmlFor="uname">Firstname</label>
      <div className="uname">
        <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}  required/>
      </div><br/>
     
      <label htmlFor="uname">Lastname</label>
      <div className="uname">
        <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} required/> {/* Changed setlastname to setLastname */}
      </div><br/>
      <label htmlFor="uname">Mobile</label>
      <div className="uname">
        <input type="tel" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
      </div><br/>
      <label htmlFor="query">Query</label>
      <div className="query">
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} required/>
      </div><br/>
      <button type='submit' onClick={home}>Submit</button>
      {isRegistered && (
        <div className="success-popup">
          <div className="success-popup-content">
            <h3>Submitted Successfully</h3>
            <Link to='/home'><button className='btn1'>Done</button></Link>
          </div>
        </div>
      )}
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact;
