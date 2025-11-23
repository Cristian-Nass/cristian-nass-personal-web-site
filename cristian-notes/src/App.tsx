import './App.css';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
