import React from 'react'
import {useFormik} from "formik";
import { signUpSchema } from '../schemas';
import { Link } from 'react-router-dom';

const initialValues ={
    name:"",
    id:"",
    password:""
};

function AdminLogin(){

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
    <div id='admin'>
    <h1 className='top'>ADMIN</h1>
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
        placeholder='Enter correct password'
        />
       
        {errors.password && touched.password ? (<p className='error-para'>{errors.password}</p>):null}

        <Link to="/adminallbooks"><button id='bottom'
        >Submit</button></Link>
        
        </form>
        </div>
    </>
  )
}

export default AdminLogin