// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import './BookForm.css';

const BookForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publisher: '',
    publishDate: '',
    description: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <label>
        제목:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        저자:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        출판사:
        <input
          type="text"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
        />
      </label>
      <label>
        출판일:
        <input
          type="date"
          name="publish_date"
          value={formData.publishDate}
          onChange={handleChange}
        />
      </label>
      <label>
        설명:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">저장</button>
    </form>
  );
};

export default BookForm;
