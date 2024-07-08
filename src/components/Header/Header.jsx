import React from 'react';
import './Header.css';
import arrow from '../../assets/images/arrow2use.png'; // Adjust the path to the arrow file

const Header = () => {
  return (
    <div className="header container">
      <div className="header-text">
        <h1>Stand With Congo: Alert, Boycott, Change</h1>
        <p>Join the movement to end the exploitation of the Congolese people and their resources.</p>
        <button className='btnbtn'>Explore More <img src={arrow} alt="arrow" /></button>
      </div>
      {/* Header content */}
    </div>
  );
}

export default Header;

