import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
const OurWorks = () => {
    return (
        <section className="my-5 carousel-container d-flex align-items-center">
            <div className="container my-5">
                <h2 className="text-center text-white font-weight-bold mb-5">Here are some of <span className="text-success ">our works</span></h2>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                             
                <div class="carousel-inner carousel-main">
                    <div class="carousel-item active row">
                        <div className="d-flex justify-content-center ">
                            <div className="col-md-4">
                                <img src={carousel1} class="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <img src={carousel2} class="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <img src={carousel5} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item row">
                        <div className="d-flex justify-content-center ">
                            <div className="col-md-4">
                                <img src={carousel4} class="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <img src={carousel5} class="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <img src={carousel1} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item row">
                        <div className="d-flex justify-content-center ">
                            <div className="col-md-4">
                                <img src={carousel5} class="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <img src={carousel2} class="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <img src={carousel4} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                </div>
                
                </div>
        </section>
    );
};

export default OurWorks;