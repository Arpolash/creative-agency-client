import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceDetails = ({service}) => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const handleCourse = (courseName) =>{
    setLoggedInUser({courseName : courseName})
  }

    return ( 
     
        <div className="col-md-4 col-12 my-5">
           <Link to='/dashboard' className="text-decoration-none" onClick={() => handleCourse(service.title)}>
            <div className="card text-center h-100 p-3 card-effect shadow">
        <img  className="card-img w-25 mx-auto"  src={`data:image/png;base64,${service.image.img}`} alt="not found" />
        <div className="card-body">
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text">{service.text}</p>
        </div>
      </div>
      </Link>
        </div>
      
    );
};

export default ServiceDetails;