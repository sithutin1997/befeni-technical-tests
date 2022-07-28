import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
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
