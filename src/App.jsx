// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import page components
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;