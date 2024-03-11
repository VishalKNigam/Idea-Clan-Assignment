import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
       <Header />
      <Navbar />
     
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
