import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import LoginModal from './components/LoginModal';


function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home openLoginModal={() => setIsLoginModalOpen(true)} />} />
        </Routes>
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
