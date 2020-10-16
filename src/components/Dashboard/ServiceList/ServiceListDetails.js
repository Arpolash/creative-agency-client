import React from 'react';

const ServiceListDetails = (props) => {
    return (
        <div className="col-md-4 my-5">
            <div className="card service-card shadow h-100">
            <div className="card-header bg-transparent border-bottom-none">
              <h5>Name : {props.serviceList.name}</h5>
            </div>
            <div className="card-body">
                <h6 className="card-title">Course Name :  {props.serviceList.courseName}</h6>
                <p className="card-text">{props.serviceList.price}</p>
            </div>
            </div>
        </div>
    );
};

export default ServiceListDetails;