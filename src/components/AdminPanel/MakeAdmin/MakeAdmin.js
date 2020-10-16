import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
const MakeAdmin = () => {
    const [info,setInfo] = useState({});
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
const handleSubmit = () =>{
    fetch('https://shielded-earth-58023.herokuapp.com/addAdmin',{
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(info)
    })
}
    return (
        <section>
        <div className="container">
        <Link to="/"><img className="py-3" style={{height:'70px'}} src={logo} alt=""/></Link>
          <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-brand">
               
               <form onSubmit={handleSubmit}>
               <div className="form-group">
                            <label htmlFor="email" className="font-weight-bold">Email :</label>
                            <input type="email" onBlur={handleBlur} className="form-control w-50" name="email" placeholder="Enter Email"/>
                        </div>
                        <button type="submit" className="btn-brand px-5">Submit</button>
               </form>
               
            </div>
            </div>
        </div>
    </section>
    );
};

export default MakeAdmin;