// import WishlistPage from './components/WishlistPage'; // Importing WishlistPage as default

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/wishlist" component={WishlistPage} />
//         {/* Other routes */}
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react';
import { getWishlist } from '../utils/localStorageHelper';
import './WishlistPage.css'; // Importing the CSS file

const WishlistPage = () => {
  const wishlist = getWishlist();

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist?.length ? (
          wishlist.map((book) => (
            <div key={book.id} className="wishlist-item">
              <img src={book.image} alt={book.title} className="wishlist-image" />
              <p className="wishlist-title">{book.title}</p>
            </div>
          ))
        ) : (
          <p>No books in wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
