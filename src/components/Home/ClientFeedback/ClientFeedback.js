import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import ClientFeedbackDetails from './ClientFeedbackDetails';

const ClientFeedback = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([])
    useEffect( () => {
        fetch('https://shielded-earth-58023.herokuapp.com/review')
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setFeedback(data)
        })
    }, [])
    return (
        <section className="my-5">
            <div className="container">
            <h2 className="text-center font-weight-bold mb-5">Clients <span className="text-success "> Feedback</span></h2>
                <div className="row mt-5">
                {isLoading && <CircularProgress className='mx-auto' disableShrink>
                </CircularProgress>}
                    {
                        feedback.map(cd => <ClientFeedbackDetails feedback={cd}></ClientFeedbackDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;