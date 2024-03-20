import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import '../../assets/css/PersonalizedDetails.css';
import getPersonalizedbyId from '../user/getPersonalizedById';
import { useNavigate, useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "../../Redux/UserSlice";


import Navbar from '../../components/Navbar';
import { addToCart } from '../../Redux/cartSlice';

function PersonalizedDetails() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  const navigate = useNavigate();
  const { id } = useParams();
  const personalizeId = parseInt(id, 10);
  const personalizeDetails = getPersonalizedbyId(personalizeId);
  
  if (!personalizeDetails) {
    return <div>Vegetable not found</div>;
  }
  
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(null); // Initially set to null

  useEffect(() => {
    if (personalizeDetails.imgs && personalizeDetails.imgs.length > 0) {
      setImages(personalizeDetails.imgs);
      // Set the slide to the first image only if the current slide is null
      if (!slide) {
        setSlide(personalizeDetails.imgs[0]);
      }
    }
  }, [personalizeDetails, slide]); // Update the effect when slide changes
  
  const handleClick = (index) => {
    if (images && images.length > 0) {
      setSlide(images[index]);
    }
  };

  const [showTextArea, setShowTextArea] = useState(false);
  const [showTextArea1, setShowTextArea1] = useState(false);

  const handleButtonClick = () => {
    setShowTextArea(!showTextArea); // Toggle the state
  };
  const handleButtonClick1 = () => {
    setShowTextArea1(!showTextArea1); // Toggle the state
  };
  const dispatch=useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: personalizeDetails.id,
      name: personalizeDetails.name,
      image: personalizeDetails.imgs[0], // Assuming the first image is the main one
      price: personalizeDetails.price,
    }));
  };
  
  return (
    <>
      <Navbar/>
      <div className='containerrd'>
        <div className='desimgs'>
          <div className='flex_row'>
            {images.map((data, i) => (
              <div className='thumbnail' key={i}>
                <img
                  className={slide === data ? "clicked" : ""}
                  src={data}
                  onClick={() => handleClick(i)}
                  height="90px"
                  width="90px"
                />
              </div>
            ))}
          </div>
          <div id='main'>
            <div>
              {slide ? (
                <img src={slide} width='500' height='500' />
              ) : (
                <p>Click on an image to view</p>
              )}
            </div>
            
          
            
       
          </div>
          <div className='content'>
            <h1>{personalizeDetails.name}</h1>
            <p>{personalizeDetails.rating} <span style={{ color: 'gold' }}>&#9733;</span> {personalizeDetails.persons} <span> ratings</span></p>
            <hr/>
            <p style={{color:'red',fontSize:'25px',fontWeight:'bolder',fontFamily:'cursive'}}>&#x20B9; {personalizeDetails.price}</p>
            <h4>Color<span>&#x2A;</span></h4>
            <div className='options'>
              <select name='custom'>
                <option value='Black'>Select One</option>
                <option value='Black'>Black</option>
                <option value='Black'>Blue</option>
                <option value='Black'>White</option>
              </select>
            </div>
            <h4>Size<span>&#x2A;</span></h4>
            <div className='options'>
              <select name='custom'>
                <option value='Black'>Select</option>
                <option value='Black'>Small</option>
                <option value='Black'>Medium</option>
                <option value='Black'>Large</option>
              </select>
            </div>
            <div className='options'>
              <button className='personalization' onClick={handleButtonClick}>
                {showTextArea ? 'Add Your Personalization' : 'Add Your Personalization'}
                <span className="icon">{showTextArea ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
              </button>
              {showTextArea && (
                <div>
                  <h5 className='personalization-text'></h5>
                  <textarea placeholder="Enter your personalization..." maxLength="250"></textarea>
                </div>
              )}
            </div>
            <button className='basket' onClick={handleAddToCart}>Add to Basket</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PersonalizedDetails;