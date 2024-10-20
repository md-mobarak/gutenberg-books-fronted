import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import './Home.css';
import Loaders from '../components/Loaders';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState(['Fiction', 'Non-fiction', 'Adventure', 'History']);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetch(`https://gutendex.com/books/?page=${page}&search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results);
        setLoading(false);
      });
  }, [page, searchTerm]);

  return (
    <div className="home">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select onChange={(e) => setSelectedGenre(e.target.value)} className="genre-dropdown">
          <option value="">All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      {loading ? 
        <Loaders></Loaders>
     : <BookList books={books} selectedGenre={selectedGenre} />}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
