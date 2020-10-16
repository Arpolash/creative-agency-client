import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    return (
        <div className="row bg-brand py-5">
            <div className="col-md-6">

           
            <form action="https://shielded-earth-58023.herokuapp.com/addUser" method="post">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Your name/Company's name"/>
                        </div>
                        <div className="form-group">
                            <input type="email"  className="form-control" name="email" placeholder="Your email address"/>
                        </div>
                        <div className="form-group">
                            <input type="text"  className="form-control" name="courseName" value={loggedInUser.courseName}/>
                        </div>
                        <div className="form-group">
                             <textarea className="form-control"  rows="3" name="message" placeholder="Project details"></textarea>
                         </div>
                         <div className="form-group">
                            <input type="text"  className="form-control w-50" name="price" value="Price $23"/>
                        </div>
                         <button type="submit" className="btn-brand px-5">Send</button>
                    </form>
            </div>
            <div className="col-md-6"></div>
        </div>
    );
};

export default Order;