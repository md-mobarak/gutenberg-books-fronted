

import React from 'react';
import { getWishlist } from '../utils/localStorageHelper'; // Ensure correct import
import './WishlistPage.css';

const WishlistPage = () => {
  const wishlist = getWishlist();

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      <div className="wishlist-list">
        {wishlist?.length ? wishlist.map((book) => (
      
          
          <div key={book.id} className="wishlist-item">
         <img src={book.formats['image/jpeg']} alt={book.title} />
            <p>{book.title}</p>
          </div>
        
          
        )) : <p>No books in wishlist.</p>}
      </div>
    </div>
  );
};

export default WishlistPage;
