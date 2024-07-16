import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
            default:
                return '#fff';
        }
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`} style={{ backgroundColor: getBackgroundColor() }}>
            <img src={logo} alt="logo with star and name" className='logo' />
            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/awareness">Awareness</Link></li>
                <li><Link to="/boycott">Boycott</Link></li>
                <li><Link to="/donations">Donations</Link></li>
                <li><Link to="/more">More</Link></li>
                <li><button className='btn'><Link to="/action">ACTION</Link></button></li>
            </ul>
            <img src={menu_icon} alt='menu icon sandwich' className='menu_icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
