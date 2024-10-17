// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { addToWishlist } from '../utils/localStorageHelper'; // Import the addToWishlist function
// import './BookPage.css';

// const BookPage = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [isInWishlist, setIsInWishlist] = useState(false);

//   useEffect(() => {
//     // Fetch the book details by ID
//     fetch(`https://gutendex.com/books/${id}/`)
//       .then((res) => res.json())
//       .then((data) => {
//         const selectedBook = data.results.find((book) => book.id.toString() === id);
//         setBook(selectedBook);
//       });
//   }, [id]);

//   // Function to handle adding the book to the wishlist
//   const handleAddToWishlist = () => {
//     if (book) {
//       const bookDetails = {
//         id: book.id,
//         title: book.title,
//         image: book.formats['image/jpeg'],
//         authors: book.authors.map((author) => author.name).join(', '),
//       };
//       addToWishlist(bookDetails);  // Add book to wishlist
//       setIsInWishlist(true); // Update the state to show it's added
//     }
//   };

//   if (!book) {
//     return <p className="loading">Loading...</p>;
//   }

//   return (
//     <div className="book-page">
//       <div className="book-header">
//         <img src={book.formats['image/jpeg']} alt={book.title} className="book-cover" />
//         <div className="book-info">
//           <h2 className="book-title">{book.title}</h2>
//           <p className="book-author">by {book.authors.map((author) => author.name).join(', ')}</p>
//           <p className="book-genres">
//             <strong>Genres:</strong> {book.subjects.join(', ')}
//           </p>
//           <p className="book-shelves">
//             <strong>Bookshelves:</strong> {book.bookshelves.join(', ')}
//           </p>
//           <button
//             className={`wishlist-button ${isInWishlist ? 'added' : ''}`}
//             onClick={handleAddToWishlist}
//             disabled={isInWishlist}  // Disable the button if already added
//           >
//             {isInWishlist ? '❤️ Added to Wishlist' : '❤️ Add to Wishlist'}
//           </button>
//         </div>
//       </div>
//       <div className="book-description">
//         <h3>Book Description</h3>
//         <p>This API doesn't provide a description. Visit the original source for more details.</p>
//       </div>
//     </div>
//   );
// };

// export default BookPage;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookPage.css';
import { addToWishlist } from '../utils/localStorageHelper'; // Add your localStorage helper here

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}/`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching the book data:", error));
  }, [id]);

  if (!book) {
    return <p className="loading">Loading...</p>;
  }

  // Safely access the properties, ensuring they exist before calling methods like `find`
  const authors = book.authors && book.authors.length > 0 ? book.authors.map((author) => author.name).join(', ') : "Unknown Author";
  const subjects = book.subjects ? book.subjects.join(', ') : "No Subjects Available";
  const bookshelves = book.bookshelves ? book.bookshelves.join(', ') : "No Bookshelves Listed";

  const handleWishlist = () => {
    addToWishlist(book);
  };

  return (
    <div className="book-page">
      <div className="book-header">
        <img src={book.formats['image/jpeg']} alt={book.title} className="book-cover" />
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">by {authors}</p>
          <p className="book-genres">
            <strong>Genres:</strong> {subjects}
          </p>
          <p className="book-shelves">
            <strong>Bookshelves:</strong> {bookshelves}
          </p>
          <button className="wishlist-button" onClick={handleWishlist}>
            ❤️ Add to Wishlist
          </button>
        </div>
      </div>
      <div className="book-description">
        <h3>Book Description</h3>
        <p>Unfortunately, this API doesn't provide a book description. You can visit the original source for more details.</p>
      </div>
    </div>
  );
};

export default BookPage;
