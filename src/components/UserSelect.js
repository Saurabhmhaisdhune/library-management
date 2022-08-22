import { FaBook } from 'react-icons/fa';
import { BooksContext } from '../App';
import React, { useState, useContext,useEffect } from "react";
import { Link, useParams} from "react-router-dom";

function UserSelect() {
    let context = useContext(BooksContext);
    let params = useParams();

    useEffect(() => {
      if (params.id <= context.books.length) {
        getData();
      } else {
        alert("Selected book is not available");
      }
    });

    let [name, setName] = useState("");
    let [author, setAuthor] = useState("");

    let userid = params.id - 1;
    let getData = () => {
      setName(context.books[userid].name);
      setAuthor(context.books[userid].author);

    };


  return (
    <>
    <div id="navbar"><FaBook id='book'/><strong>CITY  LIBRARY</strong></div>
    <div id='log-ins'>
    <h1 className='top'>SELECTED BOOK</h1>

        <label id='userselectname'>Book Name: <strong>{name}</strong></label>
        <br/>

        <label id='userselectnames'>Author name:  <strong>{author}</strong></label>
        <br/>
        
        <input 
        type='text'
        placeholder='Enter yor full name'
        /><br/>

        <input 
        type='text'
        placeholder='Enter enter library ID'
        /><br/>

       <Link to={'/allbooks'}><button id='bottom'
        >Confirm</button></Link>
        <br/>

        </div>
    </>
  );
}
export default UserSelect;
