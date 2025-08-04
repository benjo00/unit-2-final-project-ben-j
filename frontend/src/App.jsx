import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Ancient from './components/Ancient';
import Modern from './components/Modern';
import RoutineManager from './components/RoutineManager';
import RoutineList from './components/RoutineList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ancient" element={<Ancient />} />
            <Route path="/modern" element={<Modern />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/routines"
              element={
                <div className="main-content">
                  <RoutineManager />
                  <RoutineList />
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
