// src/pages/AddBookPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import './AddBookPage.css';

const AddBookPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const res = await fetch(process.env.REACT_APP_API_URL + `/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if(result.status === 200)
      navigate(`/books/${result.data.id}`);
  };

  return (
    <div className="container add-book-page">
      <h1>도서 추가</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddBookPage;
