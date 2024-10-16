import React from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = ({ books, selectedGenre }) => {
  const filteredBooks = selectedGenre
    ? books.filter((book) => book.subjects.includes(selectedGenre))
    : books;

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.formats['image/jpeg']} alt={book.title} />
          <h3>{book.title}</h3>
          <p>by {book.authors.map((author) => author.name).join(', ')}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
