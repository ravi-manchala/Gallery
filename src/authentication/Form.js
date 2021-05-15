import React from 'react';

import classes from './Form.module.css';

const Form = (props) => {
        
        const {
            email, 
            setEmail, 
            password, 
            setPassword, 
            handleLogin, 
            handleSignup, 
            hasAccount, 
            setHasAccount, 
            emailError, 
            passwordError
        } = props;
    return (
        <section className = {classes.login}>
            <div className = {classes.loginContainer}>
                <label for="email">User name</label>
                <div className = {classes.img}>
                   <i className="fas fa-envelope-square fa-2x"></i>
                   <input
                      id="email"
                      type='text'
                      autoFocus
                      required
                      value = {email}
                      placeholder='Enter email'
                      onChange = {(e) => setEmail(e.target.value)}
               />
                </div>
                
               <p className = {classes.errorMsg}>{emailError}</p>
               <label for="password" >Password</label>
               <div className = {classes.img}>
                   <i className="fas fa-lock fa-2x"></i>
                   <input
                       id="password"
                       type ='password'
                       required
                       value = {password}
                       placeholder='Enter password'
                       onChange = {(e) => setPassword(e.target.value)}
                    />
               </div>
               
                <p className = {classes.errorMsg}>{passwordError}</p>
                <div className = {classes.btnContainer}>
                    {hasAccount ? (
                        <>
                           <button onClick = {handleLogin}>Sign in</button>
                           <p>Don't have an account ? 
                               <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>   
                          
                    ): (
                        <>                       
                           <button onClick ={handleSignup}>Sign up</button>
                           <p>Have an account ? 
                               <span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>     

                    )}
                </div>
            </div>
        </section>
    )
};

export  default Form;
