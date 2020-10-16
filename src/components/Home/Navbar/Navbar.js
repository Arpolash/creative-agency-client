import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-light pb-5">
            <img src={logo} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto pr-3">
            <Link className="nav-item mx-2 active">
                <a className="nav-link active" to="/">Home <span className="sr-only">(current)</span></a>
            </Link>
            <Link className="nav-item mx-2">
                <a className="nav-link" to="/">Our Portfolio</a>
            </Link>
            <Link className="nav-item mx-2">
                <a className="nav-link" to="/">Our Team</a>
            </Link>
            <Link className="nav-item mx-2">
                <a className="nav-link" to="/">Contact Us</a>
            </Link>
            </ul>
           <Link to="/service"> <button className="btn-brand">Log In</button></Link>
        </div>
        </nav>
    );
};

export default Navbar;