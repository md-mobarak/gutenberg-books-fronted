import React from 'react';
import './Pagination.css';

const Pagination = ({ page, setPage }) => {
  const handlePrev = () => setPage(page > 1 ? page - 1 : 1);
  const handleNext = () => setPage(page + 1);

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page === 1}>Previous</button>
      <span>Page {page}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
