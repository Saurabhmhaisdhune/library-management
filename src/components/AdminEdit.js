import { FaBook } from 'react-icons/fa';
import { BooksContext } from '../App';
import React, { useState, useContext,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AdminEdit() {
    let context = useContext(BooksContext);
    let params = useParams();

    useEffect(() => {
      if (params.id <= context.books.length) {
        getData();
      } else {
        alert("Selected book is not available");
      }
    }, []);

    let navigate = useNavigate();
    let [img, setImg] = useState("");
    let [name, setName] = useState("");
    let [author, setAuthor] = useState("");
    let [about, setAbout] = useState("");

    let userid = params.id - 1;
    let getData = () => {
      setImg(context.books[userid].img);
      setName(context.books[userid].name);
      setAuthor(context.books[userid].author);
      setAbout(context.books[userid].about);
    };
    
    let handleSubmit = () => {
        let newData = { img, name, author, about};
        let previousArray = [...context.books];
        previousArray.splice(userid, 1, newData);
        context.setBooks(previousArray);
        navigate("/adminallbooks");
      };
  return (
    <>
    <div id="navbar"><FaBook id='book'/><strong>CITY  LIBRARY</strong></div>
    <div id='log-ins'>
        <h1 className='top'>EDIT BOOK</h1>

        <input 
        type='text'
        value={img}
        placeholder='Enter image URL'
        onChange={(e) => setImg(e.target.value)}
        />
        <br/>

        <input 
        type='text'
        value={name}
        placeholder='Enter book name'
        onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <input 
        value={author}
        type='text'
        placeholder='Enter author name'
        onChange={(e) => setAuthor(e.target.value)}
        />
        <br/>

        <input 
        type='text'
        value={about}
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
export default AdminEdit;
