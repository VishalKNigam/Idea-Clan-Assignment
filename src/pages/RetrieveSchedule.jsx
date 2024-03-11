import React, { useState, useEffect } from 'react';
import api from '../services/api';

const RetrieveSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await api.get('/getschedule');
        setSchedule(response.data); 
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div>
      <h2>Retrieve Schedule</h2>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>
            <p>Date: {item.date}</p>
            <p>Time: {item.time}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetrieveSchedule;
