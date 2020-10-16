import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const OurCustomer = () => {
    return (
        <section className="container customer-container my-5">
              <ul className="list-unstyled d-flex justify-content-center py-5">
                  <li><img src={airbnb} alt=""/></li>
                  <li><img src={google} alt=""/></li>
                  <li><img src={netflix} alt=""/></li>
                  <li><img src={slack} alt=""/></li>
                  <li><img src={uber} alt=""/></li>
              </ul>
      
        </section>
    );
};

export default OurCustomer;