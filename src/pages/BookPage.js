import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookPage.css';

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}/`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-details">
      <img src={book.formats['image/jpeg']} alt={book.title} />
      <h2>{book.title}</h2>
      <p>by {book.authors.map((author) => author.name).join(', ')}</p>
      <p>Genre: {book.subjects.join(', ')}</p>
      <p>{book.bookshelves.join(', ')}</p>
    </div>
  );
};

export default BookPage;
