import React, { useState, useEffect } from 'react';
import api from '../services/api';

const RetrieveSprints = () => {
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    const fetchSprints = async () => {
      try {
        const response = await api.get('/getsprint');
        setSprints(response.data); 
      } catch (error) {
        console.error('Error fetching sprints:', error);
      }
    };

    fetchSprints();
  }, []);

  return (
    <div>
      <h2>Retrieve Sprints</h2>
      <ul>
        {sprints.map((sprint) => (
          <li key={sprint.id}>
            <h3>{sprint.title}</h3>
            <p>{sprint.description}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetrieveSprints;
