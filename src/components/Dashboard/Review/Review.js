import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('title', info.title);
        formData.append('text', info.text);

        fetch('https://shielded-earth-58023.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="container">
       <Link to="/"> <img className="py-3" style={{height:'70px'}} src={logo} alt=""/></Link>
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-brand ">
                <div className="col-md-6 my-5">
                <form onSubmit={handleSubmit}>
                         <div className="form-group">
                            <input type="text" onBlur={handleBlur} className="form-control" name="name" placeholder="Your name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" onBlur={handleBlur} className="form-control" name="title" placeholder="Your title"/>
                        </div>
                        <div className="form-group">
                             <textarea class="form-control" onBlur={handleBlur} rows="3" name="text" placeholder="Description"></textarea>
                         </div>
                         <div className="form-group">
                            <input onChange={handleFileChange} type="file" className="form-control" placeholder="Upload your picture"/>
                        </div>
                         <button type="submit" className="btn-brand px-5">Submit</button>
                    </form>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    </div>
    );
};

export default Review;