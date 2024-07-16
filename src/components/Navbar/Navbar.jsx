import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/Group3.png';
import menu_icon from '../../assets/images/menuIcon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

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
                return '#fff';
        }
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`} style={{ backgroundColor: getBackgroundColor() }}>
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
