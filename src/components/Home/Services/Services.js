import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [course,setCourse] = useState([])
    useEffect(() =>{
        fetch('https://shielded-earth-58023.herokuapp.com/service')
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setCourse(data)
        })
    },[])
    return (
        <section className="my-5">
            <div className="container">
                <h2 className="font-weight-bold text-center">Provide Awesome <span className="text-success">Services</span></h2>
                <div className="row mt-5">
                {isLoading && <CircularProgress className='mx-auto' disableShrink>
                </CircularProgress>}
                    {
                        course.map(data => <ServiceDetails service={data}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;