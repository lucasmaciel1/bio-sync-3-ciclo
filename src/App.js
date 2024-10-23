import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ButtonsUserRegister from './pages/Register/ButtonsUserRegister.jsx';
import PontosDeDescarte from './pages/dropPoints/PontosDeDescarte.jsx';
import LoginModal from './components/LoginModal';
import RegistroDeUsuarios from './pages/Register/UserRegister.jsx';
import Header from './components/Header'; // Importando o Header
import Footer from './components/Footer.jsx';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <ConditionalHeader openLoginModal={() => setIsLoginModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/buttonsUserRegister" element={<ButtonsUserRegister openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/dropPoints" element={<PontosDeDescarte openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/UserRegister" element={<RegistroDeUsuarios openLoginModal={() => setIsLoginModalOpen(true)} />} />
        </Routes>
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function ConditionalHeader({ openLoginModal }) {
  const location = useLocation();
  const showHeaderRoutes = ['/' ,'/UserRegister', '/buttonsUserRegister' , '/dropPoints' ]; // Rotas onde o Header deve ser exibido

  return showHeaderRoutes.includes(location.pathname) ? (
    <Header openLoginModal={openLoginModal} />
  ) : null;
}

function ConditionalFooter() {
  const location = useLocation();
  const showFooterRoutes = ['/' ,'/UserRegister', '/buttonsUserRegister' , '/dropPoints']; 

  return showFooterRoutes.includes(location.pathname) ? (
    <Footer />
  ) : null;
}

export default App;
