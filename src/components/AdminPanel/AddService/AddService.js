import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AddService = () => {
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
        formData.append('title', info.title);
        formData.append('text', info.text);

        fetch('https://shielded-earth-58023.herokuapp.com/addService', {
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
        <Link to="/"><img className="py-3" style={{height:'70px'}} src={logo} alt=""/></Link>
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-brand py-5 px-5">
            <form onSubmit={handleSubmit}>
                         <div className="form-group">
                             <label htmlFor="title" className="font-weight-bold">Service Title</label>
                            <input type="text" onBlur={handleBlur} className="form-control" name="title" placeholder="Enter Title"/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="text" className="font-weight-bold">Description</label>
                            <input type="text" onBlur={handleBlur} className="form-control" name="text" placeholder="Enter description"/>
                        </div>
                         <div className="form-group">
                         <label htmlFor="image" className="font-weight-bold">Icon</label>
                            <input onChange={handleFileChange} type="file" className="form-control" name="image" placeholder="Upload your picture"/>
                        </div>
                         <button type="submit" className="btn-brand px-5">Submit</button>
                    </form>
            </div>
        </div>
    </div>
    );
};

export default AddService;