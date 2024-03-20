import React from 'react'
import Footer from '../../components/Footer'
import personalized from '../../assets/others/personalizedData'
import '../../assets/css/PersonalizedStyle.css'
import ColorizeIcon from '@mui/icons-material/Colorize';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
function Personalized() {
  const nav=useNavigate('');
  const customize = (id) => {
    console.log(id);
    nav(`/personalized/${id}`);
  };
  const cake=()=>{
    nav("/cake");
  }
  
  return (
    <>
    <Navbar/>
    <div className='personalized-container'>
    <h1>Personalized Gifts</h1>
    <div className='filters'>
    <h3>Other Categories:</h3>
    <div className='filter-items' onClick={cake}>Cakes</div>
    </div>
    <div className='personalized-enclosure'>
    <div className='personalized-items'>
    {personalized.map((item, index) => (
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

export default Personalized