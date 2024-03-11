import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../services/api';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #00796b; /* Teal */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d40; /* Darker teal on hover */
  }
`;

const ErrorMessage = styled.p`
  color: #ff5722; /* Red */
  margin-top: 10px;
`;

const ScheduleLecture = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });
  const [error, setError] = useState('');

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
      const response = await api.post('/schedule', formData);
      console.log(response.data); 
      // Reset form after successful submission
      setFormData({
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('Error scheduling lecture:', error);
      setError('Error scheduling lecture. Please try again.');
    }
  };

  return (
    <Container>
      <Title>Schedule Lecture</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <Input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <Button type="submit">Schedule Lecture</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
};

export default ScheduleLecture;
