import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Interface from './pages/Interface';
import SecondPage from './pages/SecondPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Root route: full scrollable layout */}
        <Route
          path="/"
          element={
            <div>
              <Home />
            
            </div>
          }
        />
        {/* Separate routes */}
        <Route path="/interface" element={<Interface />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
