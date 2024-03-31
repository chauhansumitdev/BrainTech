// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import SoundOutputCheck from './Components/SoundOutputCheck';
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        	<SoundOutputCheck/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
