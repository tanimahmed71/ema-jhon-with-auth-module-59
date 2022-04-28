import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css";

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const navigate =useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur =event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handelUserSignIn =event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
        if(user){
            navigate("/home");
        }
    }
    return ( 
    <div className = 'login' >
        <div> 
        <div className = 'form-container' >
        <h1 className = 'from-title' > LOGIN </h1>
        <form onSubmit={handelUserSignIn}>
        <div className = "input-group">
        <label htmlFor = "email" > <b>Email </b></label><input onBlur={handleEmailBlur} type = "email" name = "email" placeholder = 'Enter your email' id = "" required/>
         </div>
         <div className="input-group">
             <label htmlFor="password"><b>Password</b></label>
             <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter your password' id=""required />
         </div>
         <p style={{color:"red"}}>{error?.message}</p>
         {
             loading && <p>Loading...</p>
         }
         <input className='input-btn' type="submit" value="Login" />
         <p>New to Ema-john?<span> <Link to="/signup">Create New Account</Link></span></p>
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

export default Login;