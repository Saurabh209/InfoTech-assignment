import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';

import logo from '../public/company-logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-logo-container'>
                <img src={logo} alt="" />
            </div>
            <div className='navbar-links-container'>
                <Link to="#"><div className='home-link'><p>Home</p></div></Link>
                <Link to="#"> <div className='aboutUs-link'><p>About Us</p></div></Link>
                <Link to="#"><div className='ourServices-link'><p>Our Services</p></div></Link>
                <Link to="#"> <div className='pricing-link'><p>Pricing</p></div></Link>
                <Link to="#"><div className='faq-link'><p>FAQ</p></div></Link>
            </div>
            <div className='navbar-button-container'>
                <button>
                    Get A Quote
                </button>
            </div>
        </nav>
    );
};

export default Navbar;