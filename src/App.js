import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Bio from './components/pages/Bio';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Shows from './components/pages/Shows';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/bio" exact element={<Bio />} />
          <Route path="/music" exact element={<Music />} />
          <Route path="/shows" exact element={<Shows />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
