import React from 'react'
import { FaBook } from 'react-icons/fa';
import { BooksContext } from '../App';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function AdminAdd() {
    let context = useContext(BooksContext);
    let navigate = useNavigate();

    let [img, setImg] = useState("");
    let [name, setName] = useState("");
    let [author, setAuthor] = useState("");
    let [about, setAbout] = useState("");

    let handleSubmit = () => {
        let newData = { img, name, author, about};
        context.setBooks((prev) => [...prev, newData]);
        navigate("/adminallbooks");
      };
  return (
    <>
    <div id="navbar"><FaBook id='book'/><strong>CITY  LIBRARY</strong></div>
    <div id='log-ins'>
    <h1 className='top'>ADD BOOK</h1>

        <input 
        type='text'
        placeholder='Enter image URL'
        onChange={(e) => setImg(e.target.value)}
        />
        <br/>

        <input 
        type='text'
        placeholder='Enter book name'
        onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <input 
        type='text'
        placeholder='Enter author name'
        onChange={(e) => setAuthor(e.target.value)}
        />
        <br/>

        <input 
        type='text'
        placeholder='Enter short detail of book'
        onChange={(e) => setAbout(e.target.value)}
        />
        <br/>

       <button id='bottom'
       onClick={handleSubmit}
        >Submit</button>
        <br/>

        </div>
    </>
  );
}
export default AdminAdd;
