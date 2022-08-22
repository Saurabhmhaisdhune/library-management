import React,{ useContext } from 'react'
import { FaBook } from 'react-icons/fa';
import { BooksContext } from '../App';
import { Link } from 'react-router-dom';

function AllBooks () {
    let context = useContext(BooksContext);

  return (
    <>
    <div id="navbar"><FaBook id='book'/><strong>CITY  LIBRARY</strong></div>
    <div id='main'>

    {context.books.map((e,i)=>(
    <div id='main2' key={i}>

    <img src={e.img} id='imge' alt='book cover'/>
    <div id='main1'>
    <h3>{e.name}</h3>
    <h4 id='author'>by {e.author}</h4>
    <p id='about'>About:{e.about}</p>
    <Link to={`/userselect/${i + 1}`}><button id='edit'>Select</button></Link>
    </div>
    </div>
    ))}
    </div>
    </>
  );
}
export default AllBooks;
