// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WishlistPage from './pages/WishlistPage';
import BookPage from './pages/BookPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
