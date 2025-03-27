// src/pages/BookDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books_reviews.json';
import BookDetail from '../components/BookDetail.jsx';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const foundBook = booksData.find((b) => b.ID === parseInt(id));
    setBook(foundBook);
  }, [id]);

  return book ? <BookDetail book={book} /> : <p>Loading...</p>;
};

export default BookDetailPage;