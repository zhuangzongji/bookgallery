// src/pages/Home.jsx
import React from 'react';
import BookList from '../components/BookList.jsx';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Book Store</h2>
      <BookList />
    </div>
  );
};

export default Home;