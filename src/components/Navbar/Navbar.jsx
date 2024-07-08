import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/LogoNameWStar.png';  //Adjust the path to the logo file

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="logo with star and name" className='logo'/> {/*Add the className attribute*/}
      <ul>
        <li><a href="#">AWARENESS</a></li>
        <li><a href="#">BOYCOTT</a></li>
        <li><a href="#">DONATIONS</a></li>
        <li><a href="#">MORE</a></li>
        <li><button className='btn'>ACTION</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;

