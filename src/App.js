import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ButtonsUserRegister from './pages/Register/ButtonsUserRegister.jsx';
import PontosDeDescarte from './pages/dropPoints/PontosDeDescarte.jsx';
import LoginModal from './components/LoginModal';
import RegistroDeUsuarios from './pages/Register/UserRegister.jsx'


function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/buttonsUserRegister" element={<ButtonsUserRegister openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/dropPoints" element={<PontosDeDescarte openLoginModal={() => setIsLoginModalOpen(true)}/>} />
          <Route path="/UserRegister" element={<RegistroDeUsuarios openLoginModal={() => setIsLoginModalOpen(true)}/>} />
        </Routes>
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
