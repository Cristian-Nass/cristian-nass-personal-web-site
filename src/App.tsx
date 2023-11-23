import React from 'react';
import {Route, Outlet, useLocation, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
