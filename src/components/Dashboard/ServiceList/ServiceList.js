import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';
import ServiceListDetails from './ServiceListDetails';

const ServiceList = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [user,setUser] = useState([])
    console.log(user)
    useEffect(() =>{
        fetch('https://shielded-earth-58023.herokuapp.com/userServiceList?email='+sessionStorage.getItem('token'))
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div className="container">
        <Link to="/"><img className="py-3" style={{height:'70px'}} src={logo} alt=""/></Link>
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-brand ">
               <div className="row">
               {
                    user.map(data => <ServiceListDetails serviceList={data}></ServiceListDetails>)
                }
               </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceList;