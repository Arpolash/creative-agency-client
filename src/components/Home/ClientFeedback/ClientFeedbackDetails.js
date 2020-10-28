import React from 'react';

const ClientFeedbackDetails = ({feedback}) => {
    return (
        <div className="col-md-4 col-12 mb-5">
            <div className="card card-effect h-100 p-3 shadow">
                <div className="card-body row">
                    <div className="col-md-4">
                    <img  className="card-img w-100"  src={`data:image/png;base64,${feedback.image.img}`} alt="not found"/>
                    </div>
                    <div className="col-md-8">
                          <h3>{feedback.name}</h3>
                          <h5>{feedback.title}</h5>
                    </div>
                </div>
                <div className="card-footer">
                    <h5>{feedback.text}</h5>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedbackDetails;