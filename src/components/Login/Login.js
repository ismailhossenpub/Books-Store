import React, { useContext } from 'react';
import "./login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || { from: {pathname: '/'}};

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            
        });
    }
    return (
        <div style={{textAlign:'center'}} className="login">
            <button onClick={handleGoogleSignIn} className="btn btn-success">Google Sign In</button>
        </div>
    );
};

export default Login;