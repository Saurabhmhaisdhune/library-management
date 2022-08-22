import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import {useFormik} from "formik";
import { signUpSchema } from '../schemas1'

const initialValues ={
    name:"",
    phonenumber:"",
    address:"",
    id:"",
    password:""
};

function NewUser(){

    const {values, errors, handleBlur,touched,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>{
            console.log(values);
            action.resetForm();
          },
    });
    return(
        <>
        <div id="navbar"><FaBook id='book'/><strong>CITY  LIBRARY</strong></div>
        <div id='log-in'>
        <h1 className='top'>NEW USER</h1>
        <form onSubmit={handleSubmit}>

        <input 
        type='text'
        name='name'
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter full name'
        />
       
        {errors.name && touched.name ? (<p className='error-para'>{errors.name}</p>):null}
        
        <input 
        type='number'
        name='phonenumber'
        value={values.phonenumber}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter phone number'
        />
      
        {errors.phonenumber && touched.phonenumber ? (<p className='error-para'>{errors.phonenumber}</p>):null}

        <input 
        type='text'
        name='address'
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter full address'
        />
     
        {errors.address && touched.address ? (<p className='error-para'>{errors.address}</p>):null}

        <input 
        type='text'
        name='id'
        value={values.id}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter library ID'
        />
       
        {errors.id && touched.id ? (<p className='error-para'>{errors.id}</p>):null}

        <input 
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter password'
        />
      
        {errors.password && touched.password ? (<p className='error-para'>{errors.password}</p>):null}

        <Link to="/" ><button id='bottom'
        >Submit</button></Link>
       
        </form>

        </div>
        </>
    )
}
export default NewUser;