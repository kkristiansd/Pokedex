import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Pokedex from './Pokedex';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/pokedex">Pokedex</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
