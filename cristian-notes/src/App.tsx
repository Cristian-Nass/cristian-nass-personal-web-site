import './App.css';
import NotesView from './components/NotesView';
import SwanholmView from './components/SwanholmView';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NotesView />} />
        <Route path="/swanholm" element={<SwanholmView />} />
      </Routes>
    </div>
  );
}

export default App;
