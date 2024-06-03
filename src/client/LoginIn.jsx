import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginIn({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result.data);
                setMessage(result.data);
                if (result.data === 'Success') {
                    setIsLoggedIn(true); 
                    navigate('/home');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex justify-content-center align-item-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" ><strong>Password</strong></label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                {message && <p style={{ color: 'red' }}>{message}</p>}


                <p>Already Have an Account</p>
                <Link to="/register">
                    <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default LoginIn;
