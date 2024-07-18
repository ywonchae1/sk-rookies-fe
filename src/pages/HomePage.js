// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const getBooks = async () => {
    const res = await fetch(process.env.REACT_APP_API_URL + "/book");
    const result = await res.json();
    if(result.status === 200)
      setBooks(result.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  const handleAdd = () => navigate("/add");

  return (
    <div className="container">
      <h1>도서 목록</h1>
      <button onClick={handleAdd}>추가</button>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
