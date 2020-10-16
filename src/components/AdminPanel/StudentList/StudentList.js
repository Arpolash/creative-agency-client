import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import StudentListDetails from './StudentListDetails';
const StudentList = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        fetch('https://shielded-earth-58023.herokuapp.com/allStudent')
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])
    return (
        <section>
            <div className="container">
            <Link to="/"><img className="py-3" style={{height:'70px'}} src={logo} alt=""/></Link>
              <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 bg-brand">
                   
                     <StudentListDetails studentInfo={student}></StudentListDetails>
                   
                </div>
                </div>
            </div>
        </section>
    );
};

export default StudentList;