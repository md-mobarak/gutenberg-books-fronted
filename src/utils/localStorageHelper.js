export const getWishlist = () => {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  };
  
  export const addToWishlist = (book) => {
    const wishlist = getWishlist();
    localStorage.setItem('wishlist', JSON.stringify([...wishlist, book]));
  };
  
  export const removeFromWishlist = (id) => {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter((book) => book.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };
  