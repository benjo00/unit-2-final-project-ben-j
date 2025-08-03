import RoutineManager from './components/RoutineManager';
import './App.css'
import Home from './components/home'
import Modern from './components/modern'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ancient from './components/Ancient';
import About from './components/About';
import Footer from './components/footer';
import Header from './components/Header';
import RoutineList from './components/RoutineList'; // ✅ NEW IMPORT

function App() {
  return (
    <Router basename="/project-final-unit-1-ben-j">
      {/* had to add this in order to prevent the 404 crash on refresh */}
      <div className='App'>
        <nav id='links'>
          <Link to="/">Home</Link>{ " | " }
          <Link to="/modern">Modern</Link>{ " | " }
          <Link to="/modern/ancient">Ancient</Link>{ " | " }
          <Link to="/modern/ancient/about">About</Link>
        </nav>
        <div className='content'>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <RoutineManager />
                <RoutineList /> {/* ✅ TEMPORARY RENDER TEST */}
              </>
            } />
            <Route path="/modern" element={<Modern />} />
            <Route path="/modern/ancient" element={<Ancient />} />
            <Route path="/modern/ancient/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
