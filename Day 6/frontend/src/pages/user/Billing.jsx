import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../assets/css/Billing.css'
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

function Billing() {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const nav=useNavigate();
  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      errors.state = 'State is required';
    }
    if (!formData.zip.trim()) {
      errors.zip = 'ZIP code is required';
    }
    setFormErrors(errors);
    
    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic here, such as sending data to backend
      console.log(formData); // For demonstration, log the form data
      setShowPopup(true);
    }
  };
  const home=()=>{
    nav("/");
  }

  

  return (
    <>
    <Navbar/>
    <div className='bill'>
    <br/>
    <div className='billback' onClick={home}>BACK</div>
    <div className='billing-container'>
      <h2>Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
          {formErrors.fullName && <span className="error">{formErrors.fullName}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label><br/>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
          {formErrors.address && <span className="error">{formErrors.address}</span>}
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
          {formErrors.city && <span className="error">{formErrors.city}</span>}
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />
          {formErrors.state && <span className="error">{formErrors.state}</span>}
        </div>
        <div>
          <label htmlFor="zip">ZIP Code:</label>
          <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} />
          {formErrors.zip && <span className="error">{formErrors.zip}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div></div>
    {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Order Placed Successfully!</h3>
            <p>Thank you for your order.</p>
            <button className="popup-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    <Footer/>
    </>
  );
}

export default Billing;
