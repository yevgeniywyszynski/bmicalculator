import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';

function App() {
  return (
    <Router>
        <div className="App">
          
        </div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
