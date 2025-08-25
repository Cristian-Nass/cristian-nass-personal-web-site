import {Route, useLocation, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {AnimatePresence} from 'framer-motion';
import './App.css';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Education from './pages/Education';
import TipsAndNotes from './pages/TipsAndNotes';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tips-and-notes" element={<TipsAndNotes />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
