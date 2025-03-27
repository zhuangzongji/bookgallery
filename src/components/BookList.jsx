// src/components/BookList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import booksData from '../data/books_reviews.json';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.ID} className="book-item">
          <Link to={`/book/${book.ID}`}>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;