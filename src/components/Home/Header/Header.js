import React from 'react';
import frame from '../../../images/logos/Frame.png'
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
     <section className="header-container">
            <div className="container mb-5">
                <Navbar></Navbar>
            <div className="row d-flex align-items-center">
                <div className="col-md-5 col-12 pl-5">
                    <h2 className="font-weight-bold">Let's Grow Your Brand To The Next Level</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt veritatis nisi, animi rem recusandae!</p>
                    <button className="btn-brand">Here Us</button>
                </div>
                <div className="col-md-7 co-12 header-img">
                    <div className="pl-5" style={{marginLeft:'30px'}}>
                    <img className="w-75" src={frame} alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
  </section>
    );
};

export default Header;