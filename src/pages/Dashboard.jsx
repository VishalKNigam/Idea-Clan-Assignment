import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #f5a623;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d48900;
  }
`;

const Dashboard = () => {
  // Dummy data
  const links = [
    { to: "/coursedetails", label: "View Course Details" },
    { to: "/availablecourses", label: "Available Courses" },
    { to: "/schedulelecture", label: "Schedule Lecture" },
    { to: "/manageassignments", label: "Manage Assignments" },
    { to: "/managesprints", label: "Manage Sprints" },
    { to: "/deletecourse", label: "Delete Course" },
    { to: "/deleteschedule", label: "Delete Schedule" },
    { to: "/deleteassignment", label: "Delete Assignment" }
  ];

  return (
    <Container>
      <Content>
        <Title>Welcome to Dashboard</Title>
        <LinkList>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </LinkList>
      </Content>
    </Container>
  );
};

export default Dashboard;
