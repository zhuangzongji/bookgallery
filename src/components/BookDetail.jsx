
// src/components/BookDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.summary}</p>
      <h4>Author: {book.author}</h4>
      <p>Price: ${book.price}</p>
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

export default BookDetail;