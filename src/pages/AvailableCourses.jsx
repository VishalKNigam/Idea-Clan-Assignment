import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AvailableCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAvailableCourses = async () => {
      try {
        const response = await api.get('/coursedetails');
        setCourses(response.data.msg); 
      } catch (error) {
        console.error('Error fetching available courses:', error);
      }
    };

    fetchAvailableCourses();
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableCourses;
