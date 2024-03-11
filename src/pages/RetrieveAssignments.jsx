import React, { useState, useEffect } from 'react';
import api from '../services/api';

const RetrieveAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await api.get('/getassignment');
        setAssignments(response.data); 
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div>
      <h2>Retrieve Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetrieveAssignments;
