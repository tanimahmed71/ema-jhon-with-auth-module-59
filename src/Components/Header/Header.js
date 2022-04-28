import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user]=useAuthState(auth);

    const handleSignOut =()=>{
        
    }
    return (    
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {/* <a href="/home">Home</a>
                <a href="/order">Order</a> */}
                {/* <a href="/inventory">Inventory</a> */}
                {/* <a href="/about">About</a> */}
                <Link to="/home">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?
                    <button onClick={handleSignOut}>SIGN OUT</button>:
                    <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;