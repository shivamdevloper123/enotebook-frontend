

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import dotenv from 'dotenv';
// dotenv.config("./.env");

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
const apiUrl = process.env.REACT_APP_BASE_URL ||  "https://e-notebook-shfw.onrender.com"  //"http://localhost:8000"


    const handleSubmit = async (e) => {
        e.preventDefault();
        // https://e-notebook-shfw.onrender.com
        const response = await fetch(`${apiUrl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        console.log("api url",apiUrl)
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("LoggedIn successfully","success")
            navigate("/");
        }
        else {
            props.showAlert("Invalid details","error")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
