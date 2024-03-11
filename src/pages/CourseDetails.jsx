import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Dummy data
const dummyCourses = [
  { id: 1, title: 'Course 1', description: 'Description for Course 1' },
  { id: 2, title: 'Course 2', description: 'Description for Course 2' },
  { id: 3, title: 'Course 3', description: 'Description for Course 3' },
  { id: 4, title: 'Course 4', description: 'Description for Course 4' },
  { id: 5, title: 'Course 5', description: 'Description for Course 5' }
];

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const Container = styled.div`
  background-color: #00bcd4; /* Light blue */
  padding: 20px;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease;

  &:hover {
    background-color: #008ba3; /* Dark blue on hover */
  }
`;

const Title = styled.h2`
  color: #ffffff; /* White text color */
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #f5f5f5; /* Light gray text color */
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ff5722; /* Orange button */
  color: #ffffff; /* White text color */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7043; /* Lighter orange on hover */
  }
`;

const CourseDetails = () => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 1500); 
  }, []);

  const handleToggleCourse = () => {
    setCourseIndex((prevIndex) => (prevIndex + 1) % dummyCourses.length);
  };

  return (
    <Container>
      <Title>Course Details</Title>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Title>{dummyCourses[courseIndex].title}</Title>
          <Description>{dummyCourses[courseIndex].description}</Description>
          <Button onClick={handleToggleCourse}>Next</Button>
        </>
      )}
    </Container>
  );
};

export default CourseDetails;
