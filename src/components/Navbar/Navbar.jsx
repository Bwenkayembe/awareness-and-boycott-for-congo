import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/Group3.png';  // Adjust the path to the logo file
import menu_icon from '../../assets/images/menuIcon.png';  // Adjust the path to the menu icon file

const Navbar = () => {
    const [sticky, setSticky] = useState(false); // Add the sticky state

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false); // Add the mobileMenu state
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo with star and name" className='logo' />
            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <li><a href="#">AWARENESS</a></li>
                <li><a href="#">BOYCOTT</a></li>
                <li><a href="#">DONATIONS</a></li>
                <li><a href="#">MORE</a></li>
                <li><button className='btn'>ACTION</button></li>
            </ul>
            <img src={menu_icon} alt='menu icon sandwich' className='menu_icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
