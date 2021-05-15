import React, { useState, useEffect } from 'react';

import fire from '../firebase/config';
import Form from './Form';
import Home from './Home';

const Login = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    const clearInput = () => {
        setEmail('');
        setPassword('');
    }
    
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    } 

    const handleSignup = () => {
        clearErrors();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch(err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
                    default:
                        return        
                }
            })
    }

    const handleLogin = () => {
        clearErrors();
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) =>{
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break
                    default:
                        return                
                }
            })
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                clearInput();
                setUser(user);
            }else{
                setUser('');
            }
        })
    }

    useEffect(()=> {
        authListener();
    },[])


    return(
        <div>
            {user ? (
                <Home handleLogout = {handleLogout} />
            ): (
                <Form
                   email = {email}
                   setEmail = {setEmail}
                   password = {password}
                   setPassword = {setPassword}
                   handleLogin = {handleLogin}
                   handleSignup = {handleSignup}
                   hasAccount = {hasAccount}
                   setHasAccount = {setHasAccount}
                   emailError = {emailError}
                   passwordError = {passwordError}
                />   
            )}
        </div>
    )
};

export default Login;