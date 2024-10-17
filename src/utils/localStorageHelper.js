

// Retrieve the wishlist from localStorage
export const getWishlist = () => {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  };
  
  // Add a book to the wishlist and update localStorage
  export const addToWishlist = (book) => {
    const wishlist = getWishlist();
    // Check if the book already exists to avoid duplication
    const isAlreadyInWishlist = wishlist.some(item => item.id === book.id);
    
    if (!isAlreadyInWishlist) {
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, book]));
    }
  };
  
  // Remove a book from the wishlist by its ID
  export const removeFromWishlist = (id) => {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter((book) => book.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };
  