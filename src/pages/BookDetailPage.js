// src/pages/BookDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  const getBookDetail = async () => {
    const res = await fetch(process.env.REACT_APP_API_URL + `/book/${id}`);
    const result = await res.json();
    if(result.status === 200)
      setBook(result.data);
  }

  useEffect(() => {
    getBookDetail();
  }, [id]);

  const handleDelete = async () => {
    const res = await fetch(process.env.REACT_APP_API_URL + `/book/${id}`, {
      method: "DELETE"
    });
    const result = await res.json();
    if(result.status === 200)
      navigate("/")
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container book-detail">
      <h1>{book.title}</h1>
      <p>저자: {book.author}</p>
      <p>출판사: {book.publisher}</p>
      <p>출판일: {book.publishDate}</p>
      <p>{book.description}</p>
      <div className="buttons">
        <button onClick={() => navigate(`/edit/${book.id}`)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={() => navigate("/")}>홈으로</button>
      </div>
    </div>
  );
};

export default BookDetailPage;
