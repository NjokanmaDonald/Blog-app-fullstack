import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import "./Login.css"
import { axiosInstance } from '../../config';

function Login() {

    // const [credentials, setCredentials] = useState({
    //     username: undefined,
    //     password: undefined,
    //   });

    const userRef = useRef();
    const passwordRef = useRef();

    // const handleChange = (e) => {
    //     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    //   };

    const { dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axiosInstance.post("/auth/login", 
            { username: userRef.current.value,
                password: passwordRef.current.value,}
                )
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        }catch(err){
            dispatch({type:"LOGIN_SUCCESS"})
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    id="username"
                    // onChange={handleChange}
                    ref={userRef}
                />

                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="password..."
                    id="password"
                    // onChange={handleChange}
                    ref={passwordRef}
                />

                <button className="loginButton" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                    <Link to="/register" className="link">Register</Link>
                </button>
        </div>
    )
}

export default Login
