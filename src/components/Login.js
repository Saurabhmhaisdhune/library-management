import React from 'react';
import { FaBook } from 'react-icons/fa';
import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';

function Login(){

    return(
        <>
        <div id="navbar"><FaBook id='book'/><strong>CITY  LIBRARY</strong></div>
        <div id='loginn'>
        <UserLogin />
        <AdminLogin />
        </div>
        </>
    )
}
export default Login;