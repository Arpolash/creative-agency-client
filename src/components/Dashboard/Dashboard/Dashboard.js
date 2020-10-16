import React from 'react';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container">
            <Link to="/"><img className="py-3" style={{height:'70px'}} src={logo} alt=""/></Link>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <Order></Order>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;