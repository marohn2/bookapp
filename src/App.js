import React from "react";
import './styles.css';
import booklist from "./booklist";
import BookEntry from "./BookEntry";

function createBookList(book){
  return(
    <BookEntry 
      key= {book.key}
      pic= {book.pic}
      name= {book.name}
      author= {book.author}
      genre= {book.genre}
      rating= {book.rating}
    />
  )
}

function App() {
  return (
    <div >
      <header>
        <h1>Ryan's Reading List</h1>
        <h2>A glimpse into the brain beneath those long, blonde hairs </h2>
      </header>
      <dl className = 'booklog'>
        {booklist.map(createBookList)}
      </dl>
    </div>

  );
}

export default App;
