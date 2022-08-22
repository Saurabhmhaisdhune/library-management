import React,{ useContext } from 'react'
import { FaBook } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';
import { BooksContext } from '../App';

function AdminAllBook () {
    let context = useContext(BooksContext);
    let handleDelete = (i) => {
      let newArray = [...context.books];
      newArray.splice(i, 1);
      context.setBooks(newArray);
    };
    const navigate=useNavigate();

  return (
    <>
    <div id="navbar"><FaBook id='book'/><strong>CITY  LIBRARY</strong></div>
    <button id='addbook' onClick={()=>navigate('/addbooks')}>Add Book</button>
    <div id='main'>

    {context.books.map((e,i)=>(
    <div id='main2' key={i}>

    <img src={e.img} id='imge' alt='book cover'/>
    <div id='main1'>
    <h3>{e.name}</h3>
    <h4 id='author'>by {e.author}</h4>
    <p id='about'>About:{e.about}</p>
   
    <Link to={`/editbooks/${i + 1}`}><button id='edit'>Edit</button></Link>
    <button id='delete' onClick={()=>handleDelete(i)}>Delete</button>
    </div>
    </div>
    ))}
    </div>
    
    </>
  );
}
export default AdminAllBook;
