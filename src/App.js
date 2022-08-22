import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminAdd from "./components/AdminAdd";
import AdminAllBook from "./components/AdminAllBook";
import AdminEdit from "./components/AdminEdit";
import AllBooks from "./components/AllBooks";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import UserSelect from "./components/UserSelect";

export const BooksContext = React.createContext();

function App() {
  let [books,setBooks]=useState([
    {
      "id":1,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/HTML-and-CSS-239x300.jpg",
      "name":"HTML and CSS",
      "author":"Jon Duckett",
      "about":"Design and Construct Website is a book that teaches how to design and build websites using HTML and CSS."
    },
    {
      "id":2,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Learning-Web-Design-246x300.jpg",
      "name":" A beginner’s guide to HTML, CSS, Javascript",
      "author":"Jennifer Niederst Robbins",
      "about":"This book has over 600 pages, and the greatest part about it is that it has a plethora of exercises that will allow you to test and play with your code, which will help you understand your ideas better."
    },
    {
      "id":3,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Eloquent-JavaScript-2e-227x300.jpg",
      "name":"Eloquent Javascript",
      "author":"Marijn Haverbeke",
      "about":"In this book, Marijn Haverbeke has brilliantly covered all of the ideas of javascript and will lead you through the foundations of javascript, beginning with variables, control structures, functions, and data structures."
    },
    {
      "id":4,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/You-Dont-Know-JS-Up-Going-200x300.jpg",
      "name":"You Don’t Know JS",
      "author":"Kyle Simpson",
      "about":"The JavaScript language has a plethora of books available, many of which are quite large. However, you Don’t Know JS isn’t a massive textbook; rather, it’s a collection of six short books, each of which covers a distinct subject in JavaScript."
    },
    {
      "id":5,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Dont-Make-Me-Think-234x300.jpg",
      "name":"Don’t Make Me Think",
      "author":"Steve Krug",
      "about":"What if you’ve heard the phrases UX (user experience) and user design but have no idea what they refer to? A fantastic introduction to the world of creating websites that people like using, this book is a must-read."
    },
    {
      "id":6,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Fullstack-Vue-232x300.jpg",
      "name":"Fullstack Vue",
      "author":"Hassan Djirdeh",
      "about":"Vue is another famous JavaScript framework that is used for web development. It is intended for basic and advanced users with the fundamentals of JavaScript."
    },
    {
      "id":7,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Learning-PHP-MySQL-JavaScript-229x300.jpg",
      "name":"Learning PHP, MySQL & JavaScript",
      "author":"Robin Nixon",
      "about":"This web development book will guide you through the process of learning back-end programming and developing data-driven websites and online applications."
    },
    {
      "id":8,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/PHP-and-MySQL-for-Dynamic-Web-Sites-235x300.jpg",
      "name":"PHP and MySQL for Dynamic Web Sites",
      "author":"Larry Ullman",
      "about":"A collection of the greatest web development resources available, this book is aimed at intermediate developers who wish to improve their knowledge of server-side programming languages and other server-side programming techniques."
    },
    {
      "id":9,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/PHP-Objects-Patterns-and-Practice-210x300.webp",
      "name":"PHP Objects, Patterns, and Practice",
      "author":"Matt Zandstra",
      "about":"If you want to push your PHP programming skills to the next level, PHP Objects, Patterns, and Practice is one of the greatest web development books you can find. Complex subjects like attributes, function Object() property promotion, new arguments, and return pseudo-types are covered in detail."
    },
    {
      "id":10,
      "img":"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Dont-Make-Me-Think-1-234x300.jpg",
      "name":" Don’t Make Me Think, Revisited",
      "author":"Steve Krug",
      "about":"It does shed light on the basic notions of online usability that go hand in hand with effective web development methods."
    },
  ])
  return (
    <>
    <Router>
    <BooksContext.Provider value={{ books, setBooks }}>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/newuser' element={<NewUser/>}/>
        <Route path='/allbooks' element={<AllBooks/>}/>
        <Route path='/adminallbooks' element={<AdminAllBook/>}/>
        <Route path='/addbooks' element={<AdminAdd/>}/>
        <Route path='/editbooks/:id' element={<AdminEdit/>}/>
        <Route path='/userselect/:id' element={<UserSelect/>}/>
    </Routes>
    </BooksContext.Provider>
    </Router>
    </>
  );
}

export default App;
