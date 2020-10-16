import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);
const Form = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            const email = {email : res.user.email};
            const name = {name : res.user.displayName};
            const newInfo = {...loggedInUser,email, name}
            setLoggedInUser(newInfo);
            sessionStorage.setItem('token', res.user.email);
            history.replace(from);
        })
       }
    return (
        <div className="container">
            <div className="banner text-center mt-5">
            <Link to="/"><img className="w-25" src={logo} alt=""/></Link>
            </div>
            <div className="form text-center mt-5">
                <h5 className="py-3 font-weight-bold">Login</h5>
                <button className="px-3" onClick={googleSignIn}><FontAwesomeIcon  className="icon" icon={faGoogle} /> Continue with Google </button>
                <p>Don't have an account? <span onClick={googleSignIn}>Create an account</span></p>
            </div>
        </div>
    );
};

export default Form;