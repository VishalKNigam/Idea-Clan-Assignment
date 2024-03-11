import React, { useState } from 'react';
import api from '../services/api';

const ManageSprints = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/sprint', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error creating sprint:', error);
    }
  };

  return (
    <div>
      <h2>Manage Sprints</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Create Sprint</button>
      </form>
    </div>
  );
};

export default ManageSprints;
