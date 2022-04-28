import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user]=useAuthState(auth);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();
    const [phone,setPhone]=useState();
    const [error,setError]=useState();
    // const navigate =useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleAddressBlur =(event)=>{
        setAddress(event.target.value);
    }
    const handlePhoneNumber = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping ={name,email,phone,address}
        console.log(shipping);
    }
    return ( 
        <div className = 'login' >
            <div> 
            <div className = 'form-container' >
            <h1 className = 'from-title' > SHIPPING INFORMATION </h1>
            <form onSubmit={handleCreateUser}>
            <div className = "input-group">
            <label htmlFor = "email" > <p>Name </p></label><input onBlur={handleNameBlur} type = "text" name = "Name" placeholder = 'Enter your Name' id = "" required/ >
             </div>
            <div className = "input-group">
            <label htmlFor = "email" > <p>Email</p></label><input value={user?.email} readOnly type = "text" name = "email" placeholder = 'Enter your email' id = "" required/ >
             </div>
             <div className="input-group">
                 <label htmlFor="address"><p>Address</p></label>
                 <input onBlur={handleAddressBlur}type="text" name="password" placeholder='Enter your address' id="" required/>
                 <label htmlFor="phone-number"><p className='conform-p'>Phone number</p></label>
                 <input onBlur={handlePhoneNumber} type="text" name="Phone number" placeholder='Enter your password' id="" required/>
             </div>
             <p style={{color:"red"}}>{error}</p>
             <input className='input-btn' type="submit" value="Add shipping"  />
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


export default Shipment;