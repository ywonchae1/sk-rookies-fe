// src/pages/EditBookPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import './EditBookPage.css';

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  
  const getBook = async () => {
    const res = await fetch(process.env.REACT_APP_API_URL + `/book/${id}`);
    const result = await res.json();
    if(result.status === 200)
      setBook(result.data);
  }

  useEffect(() => {
    getBook();
  }, [id]);

  const handleSubmit = async (data) => {
    console.log(data);
    const res = await fetch(process.env.REACT_APP_API_URL + `/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(result);
    if(result.status === 200)
      navigate("/");
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container edit-book-page">
      <h1>도서 수정</h1>
      <BookForm initialData={book} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditBookPage;
