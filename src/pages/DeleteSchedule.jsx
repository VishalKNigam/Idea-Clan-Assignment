import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../services/api';

// Styled components
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

const DeleteSchedule = () => {
  const [scheduleId, setScheduleId] = useState('');

  const handleChange = (e) => {
    setScheduleId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete('/scheduledelete', { data: { scheduleId } });
      console.log(response.data); 
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  return (
    <Container>
      <Title>Delete Schedule</Title>
      <Input
        type="text"
        placeholder="Schedule ID"
        value={scheduleId}
        onChange={handleChange}
      />
      <Button onClick={handleDelete}>Delete Schedule</Button>
    </Container>
  );
};

export default DeleteSchedule;
