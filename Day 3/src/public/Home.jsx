import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import HorizontalScroll from '../components/HorizontalScroll';
import images from '../assets/others/images';
import images1 from '../assets/others/images1';
import gift from'../assets/images/gift.webp';


function Home() {
 
  return (
    <>
    <Navbar/>
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
  <img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/banners/igp_Personalized_d_categories_20220203.jpg'/>

  <div className='things-enclosure'>
  <h3>Personalized</h3>
 <div className='things'>Home & Living</div>
 <div className='things'>Collectibles</div>
 <div className='things'>Cushions</div>
 <div className='things'>Caricatures</div>
 <div className='things'>Mugs</div>
  </div>
  </div>
  <div class="grid-item">
  <div className='things-enclosure-left'>
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
<div className='grid-3-container'>
<div className='grid-3-item'>
<img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-the-royal-garden-269339-m.jpg'/>
<div className='things-enclosure'>
<h3>Flowers</h3>
<div className='things'>Roses</div>
<div className='things'>Flower Hampers</div>
<div className='things'>Flower Arrangements</div>
<div className='things'>Flower Combos</div>
<div className='things'>Exotic Flowers</div>
</div>
</div>
<div className='grid-3-item'>
<img src='https://img.freepik.com/premium-photo/box-gourmet-chocolate-bars-arranged-beautiful-tasteful-display_226666-1609.jpg'/>
<div className='things-enclosure'>
<h3>Gourmet</h3>
<div className='things'>Sweets</div>
<div className='things'>Dry Fruits</div>
<div className='things'>Chocolates</div>
<div className='things'>Health Hampers</div>
<div className='things'>Cookies</div>
</div>
</div>
<div className='grid-3-item'>
<img src='https://images.pexels.com/photos/3012430/pexels-photo-3012430.jpeg?auto=compress&cs=tinysrgb&w=600'/>
<div className='things-enclosure'>
<h3>Plants </h3>
<div className='things'>Lucky Bamboo Plants</div>
<div className='things'>Air Purifying Plants</div>
<div className='things'>Plants with Quotes</div>
<div className='things'>Flowering Plants</div>
</div>
</div>
</div>
<div className='grid-3-container'>
<div className='grid-3-item'>
<div className='things-enclosure-left'>
<h3>Home</h3>
<div className='things-left'>Home & Decor</div>
<div className='things-left'>Kitchen</div>
<div className='things-left'>Furnishings</div>
<div className='things-left'>Photo Frames</div>
<div className='things-left'>Stationary</div>
</div>
<img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-rose-quartz-gemstone-tree-for-peace-500-chips-149367-m.jpg'/>
</div>
<div className='grid-3-item'>
<div className='things-enclosure-left'>
<h3>Jewellery</h3>
<div className='things-left'>Earrings</div>
<div className='things-left'>Pendants</div>
<div className='things-left'>Bangles & Bracelets</div>
<div className='things-left'>Accessories</div>
<div className='things-left'>Mens Jewellerry</div>
</div>
<img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-golden-pearl-and-cz-pendant-and-earrings-set-170465-m.jpg'/>
</div>
<div className='grid-3-item'>
<div className='things-enclosure-left'>
<h3>Fashion</h3>
<div className='things-left'>Accessories</div>
<div className='things-left'>Bags</div>
<div className='things-left'>Personal Care</div>
<div className='things-left'>Mens Apparel</div>
</div>
<img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-birthday-celebrations-personalized-hamper-273974-m.jpg'/>
</div>
</div>

    </div>
    </>
  )
}

export default Home