import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Education from './pages/Education';

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
