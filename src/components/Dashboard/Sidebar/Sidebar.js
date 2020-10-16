import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faComment,faUserCog,faUserGraduate,faTools,faUser} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {

    const [isAdmin,setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://shielded-earth-58023.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: sessionStorage.getItem('token')})
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex  flex-column justify-content-start py-5 px-4" style={{height:"100%"}}>
        <ul className="list-unstyled">
             <li>
            <Link to="/dashboard"><FontAwesomeIcon icon={faCartPlus} /> <span> Order</span></Link>
            </li>
            <li>
            <Link to="/dashboard/service"><FontAwesomeIcon icon={faUserCog} /> <span>Service List</span></Link>
            </li>
            <li>
            <Link to="/dashboard/review"><FontAwesomeIcon icon={faComment} /> <span>Review</span></Link>
            </li>
         {isAdmin && <div>
            <li>
                <Link to="/admin/studentList"><FontAwesomeIcon icon={faUserGraduate} /> <span>Student List</span></Link>
                </li>
                <li>
                <Link to="/admin/addService"> <FontAwesomeIcon icon={faTools} /> <span>Add Service</span></Link>
                </li>
                <li>
                <Link to="/admin/makeAdmin"><FontAwesomeIcon icon={faUser} /> <span>Make Admin</span></Link>
                </li>
          </div>}
        </ul>
    </div>
    );
};

export default Sidebar;