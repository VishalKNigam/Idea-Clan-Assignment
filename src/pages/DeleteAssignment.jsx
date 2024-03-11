import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../services/api';

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff5722; /* Orange */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7043; /* Lighter orange on hover */
  }
`;

const DeleteCourse = () => {
  const [courseId, setCourseId] = useState('');

  const handleChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete('/coursedelete', { data: { courseId } });
      console.log(response.data); 
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <Container>
      <Title>Delete Course</Title>
      <Input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={handleChange}
      />
      <Button onClick={handleDelete}>Delete Course</Button>
    </Container>
  );
};

export default DeleteCourse;
