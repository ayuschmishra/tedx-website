// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Import other pages when they're created
// import Events from './pages/Events';
// import About from './pages/About';
// import GetInvolved from './pages/GetInvolved';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header is fixed, so add padding to main content */}
        <Header />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes when components are created */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/get-involved" element={<GetInvolved />} /> */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;