import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClientFeedbackDetails from './ClientFeedbackDetails';

const ClientFeedback = () => {
    const [feedback, setFeedback] = useState([])
    useEffect( () => {
        fetch('https://shielded-earth-58023.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])
    return (
        <section className="my-5">
            <div className="container">
            <h2 className="text-center font-weight-bold mb-5">Clients <span className="text-success "> Feedback</span></h2>
                <div className="row">
                    {
                        feedback.map(cd => <ClientFeedbackDetails feedback={cd}></ClientFeedbackDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;