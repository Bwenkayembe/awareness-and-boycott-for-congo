import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/Group3.png';

const Footer = () => {
  const location = useLocation();

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case '/awareness':
        return '#f8f9fa';
      case '/boycott':
        return '#e9ecef';
      case '/donations':
        return '#dee2e6';
      case '/more':
        return '#ced4da';
      case '/action':
        return '#2D2081'; // Action page color
      default:
        return '#2D2081'; // Default color
    }
  };

  return (
    <footer className='footer' style={{ backgroundColor: getBackgroundColor() }}>
      <div className='footer-content'>
        <div className='logo-section'>
          <img src={logo} alt="ABC Logo" className='footer-logo' />
          <p className='tagline'>There's no liberation without community: Stand with the country that powers the world</p>
        </div>
        <div className='stay-informed-section'>
          <h4>STAY INFORMED!</h4>
          <form className='subscribe-form'>
            <input type='email' placeholder='Enter your email' className='emailInput' required />
            <button type='submit' className='submit-button'>SUBMIT</button>
          </form>
        </div>
        <div className='social-section'>
          <h4>FOLLOW US</h4>
          <div className='social-icons'>
            <a href="#"><i className="bi bi-tiktok"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-threads"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© 2024 Awareness and Boycott for Congo. Ontario, Canada. All rights reserved</p>
        <div className='footer-links'>
          <a href="#"><b>PRIVACY POLICY</b></a>
          <a href="#"><b>TERMS AND CONDITIONS</b></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
