import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import HorizontalScroll from '../components/HorizontalScroll';
import images from '../assets/others/images';
import images1 from '../assets/others/images1';
import gift from'../assets/images/gift.webp';
import { useNavigate } from 'react-router-dom';


function Home() {
   const nav=useNavigate();
   const personalized=()=>{
    nav("/personalized");
   }
   const cake=()=>{
    nav("/cake");
   }
  return (
    <>
    <Navbar/>
    <div className='gift1'> 
    <center>
     <div className='gift-text'>
     <h1>Personalized Gifts Online</h1>
     <h3>Thoughtfully selected to turn every occasion into a celebration</h3>
     </div>
     </center>  
     </div>
    <Carousel images={images}/>
    <div className='home-container'>
    <div className='gift'> 
    <center>
     <img src={gift} className='giftimg'/>
     <div className='gift-text'>
     <h1>Personalized Gifts Online</h1>
     <h3>Thoughtfully selected to turn every occasion into a celebration</h3>
     </div>
     </center>  
     </div>
     <br/>
    <HorizontalScroll images1={images1}/>
    <h2 className='categories-topic'>Categories</h2>
    <h3 className='categories-topic1'>Wide range of gifts for your celebration</h3>
  <div class="grid-container">
  <div class="grid-item">
  <img src='https://i.etsystatic.com/23506531/r/il/71c051/4903500387/il_340x270.4903500387_95ff.jpg'/>

  <div className='things-enclosure' onClick={personalized}>
  <h3>Personalized</h3>
 <div className='things'>Home & Living</div>
 <div className='things'>Collectibles</div>
 <div className='things'>Cushions</div>
 <div className='things'>Caricatures</div>
 <div className='things'>Mugs</div>
  </div>
  </div>
  <div class="grid-item">
  <div className='things-enclosure-left' onClick={cake}>
  <h3>Cakes</h3>
  <div className='things-left'>Chocolate</div>
 <div className='things-left'>Blackforest</div>
 <div className='things-left'>Butterscotch</div>
 <div className='things-left'>Photo</div>
 <div className='things-left'>Designer</div>
  </div>
  <img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/banners/igp_Cakes_d_categories_20220203.jpg'/>
  </div>
</div>
 
    </div>
    </>
  )
}

export default Home