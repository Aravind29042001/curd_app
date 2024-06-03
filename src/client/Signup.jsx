
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => console.log(result),
            navigate('/login')
            )
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mt-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" autoComplete="off" name="name" className="form-control rounded-0" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                    </form>

                    <p>Already Have an Account</p>
                    <Link to="/login">
                        <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;