import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './pages/SignupForm';
import SigninForm from './pages/SigninForm';
import './styles/Global.css';


function App() {
  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
          
        </Routes>
      </main>
    </Router>
  );
}

export default App;
