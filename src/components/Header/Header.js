import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from './logo.png'


class Header extends Component {
    render() {

        return (
            <>
            <div className="nav-bar">
                <Link id="home" to="/">
            <img src={Logo} className="logo"></img>
                    </Link>
            <div className="header-wrapper">
                <Link id="portfolio" to="/Portfolio"></Link>
                <Link id="contact" to="/Contact"></Link>
            </div>
            </div>
            </>
        )
    }
}

export default Header;