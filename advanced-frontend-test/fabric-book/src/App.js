import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useEffect,useState} from 'react'
import Home from './components/pages/Home'
import Fabric from './components/pages/Fabric'
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fabric/:id" element={<Fabric />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
