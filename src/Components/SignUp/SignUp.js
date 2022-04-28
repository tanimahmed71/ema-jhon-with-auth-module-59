import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Login/Login.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"

const SignUp = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [error,setError]=useState();
    const navigate =useNavigate();

    const [ createUserWithEmailAndPassword,user,] = useCreateUserWithEmailAndPassword(auth);
    
    const handleEmailBlur =(event)=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur =(event)=>{
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate("/home")
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password did not match');
            return;
        }
        if(password.length < 6){
            setError("Please enter password minimum 6");
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }
    return  ( 
        <div className = 'login' >
            <div> 
            <div className = 'form-container' >
            <h1 className = 'from-title' > SIGNUP </h1>
            <form onSubmit={handleCreateUser}>
            <div className = "input-group">
            <label htmlFor = "email" > <p>Email </p></label><input onBlur={handleEmailBlur} type = "email" name = "email" placeholder = 'Enter your email' id = "" required/ >
             </div>
             <div className="input-group">
                 <label htmlFor="password"><p>Password</p></label>
                 <input onBlur={handlePasswordBlur}type="password" name="password" placeholder='Enter your password' id="" required/>
                 <label htmlFor="confirm-password"><p className='conform-p'>Confirm Password</p></label>
                 <input onBlur={handleConfirmPassword} type="password" name="confirm-password" placeholder='Enter your password' id="" required/>
             </div>
             <p style={{color:"red"}}>{error}</p>
             <input className='input-btn' type="submit" value="shop" />
             <p>Already have an account? <span> <Link to="/login">Login?</Link></span></p>
             <div className='or-container'>
                 <div>
                     <hr />
                 </div>
                 <div>
                     <span>or</span>
                </div>
                 <div>
                     <hr />
                 </div>
             </div>
             <div className='google-container'>
             <div className="google-btn">
                        <img src="google.png" alt="" /><input className='google-btn' type="submit" value="Continue With Google" />
                  
                </div>
             </div>
            </form>
            </div>
            </div>
             </div>
        );
    };

export default SignUp;