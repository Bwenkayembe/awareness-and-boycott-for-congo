import React from 'react';
import './Awareness.css';

const Awareness = () => {
  return (
    <div className="awareness-page">
      <header className="header">
        <img src="LogoNameWStar.png" alt="ABC_logo" className="logo" />
        <nav className="navigation">
          <ul>
            <li><a href="#">AWARENESS</a></li>
            <li><a href="#">BOYCOTT</a></li>
            <li><a href="#">DONATIONS</a></li>
            <li><a href="#">MORE</a></li>
          </ul>
        </nav>
      </header>

      <section className="awareness-section">
        <h1>AWARNESS</h1>
        <p>Why it's important to understand</p>
      </section>

      <section className="info-section">
        <div className="info-box">
          <h2>MINERALS</h2>
          <p>Cobalt</p>
        </div>
        <div className="info-box">
          <h2>STATISTIQUE</h2>
          <img src="/path-to-statistique-image.png" alt="Statistique" />
        </div>
        <div className="info-box">
          <h2>FOREIGN INFLUENCE</h2>
          <p>Insert Country Name</p>
        </div>
        <div className="info-box">
          <h2>LOCALS</h2>
          <p>Their reality</p>
        </div>
      </section>

      <footer className="footer">
        <img src="/path-to-your-logo.png" alt="ABC Logo" className="footer-logo" />
        <p>There's no liberation without community: Stand with the country that powers the world</p>
        <div className="subscribe-section">
          <h4>STAY INFORMED!</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        <div className="social-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="#"><i className="bi bi-tiktok"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-threads"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Awareness and Boycott for Congo. Ontario, Canada. All rights reserved</p>
          <div className="footer-links">
            <a href="#"><b>PRIVACY POLICY</b></a>
            <a href="#"><b>TERMS AND CONDITIONS</b></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Awareness;
