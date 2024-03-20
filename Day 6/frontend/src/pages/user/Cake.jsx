import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import ColorizeIcon from '@mui/icons-material/Colorize';
import { Link, useNavigate } from 'react-router-dom';
import cakee from '../../assets/others/cake';
import Navbar from '../../components/Navbar';
function Cake() {
    const nav=useNavigate('');
    const customize = (id) => {
      console.log(id);
      nav(`/cake/${id}`);
    };
    
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar/>
    <div className='personalized-container'>
    <h1>Cake Gifts</h1>
    <div className='filters'>
    <h3>Other Categories:</h3>
   <Link to="/personalized"> <div className='filter-items'>Personalization</div></Link>
    </div>
    <div className='personalized-enclosure'>
    <div className='personalized-items'>
    {cakee.map((item, index) => (
      <div key={index} className='personalized-items1' onClick={()=>customize(item.id)} style={{cursor:'pointer'}} >
        <img src={item.img} className='p-image' />
        <div className='p-items1'>
        <h3>{item.name}</h3>
        <p className='price'>&#x20B9; {item.price}</p>
        <div className='bottom'>
        <p>{item.rating}<span style={{ color: 'gold' }}>&#9733;</span> ({item.persons})</p>
        <p ><ColorizeIcon style={{fontSize:'15px',marginTop:'3px'}}/> Personalizable</p>
        </div>
        </div>
      </div>
    ))}
  </div>
    
    </div>
    </div>


    <Footer/>
    </>
  )
}

export default Cake