import React from 'react'
import {useFormik} from "formik";
import { signUpSchema } from '../schemas';
import { Link } from 'react-router-dom';

const initialValues ={
    name:"",
    id:"",
    password:""
};

function UserLogin(){

const {values, errors,touched, handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
    },
});

  return (
    <>
    <div id='login'>
    <h1 className='top'>USER</h1>
        <form onSubmit={handleSubmit}>

        <input 
        type='text'
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        name='name'
        placeholder='Enter full name'
        />
        <br/>
        {errors.name && touched.name ? (<p className='error-para'>{errors.name}</p>):null}

        <input 
        type='text'
        value={values.id}
        onChange={handleChange}
        onBlur={handleBlur}
        name='id'
        placeholder='Enter library ID'
        />
        <br/>
        {errors.id && touched.id ? (<p className='error-para'>{errors.id}</p>):null}

        <input 
        type='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name='password'
        placeholder='Enter correct password'
        />
        <br/>
        {errors.password && touched.password ? (<p className='error-para'>{errors.password}</p>):null}

        <Link to='/allbooks'><button id='bottom'
        >Submit</button></Link>
        <br/>

        <a href='/newuser' id='tag'>new user</a>
        </form>
        </div>
    </>
  )
}

export default UserLogin