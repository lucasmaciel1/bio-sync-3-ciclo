import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header({ openLoginModal }){
const [isMenuOpen, setIsMenuOpen] = useState(false);
const logo = '/logo-bio-sync-login.png';    
const userlogin = '/user.png';

return(    
<header className="bg-back-header bg-center bg-cover">
<nav className="container mx-auto px-4 sm:px-6 py-4">
  <div className="flex justify-between items-center">
    <Link to="/" className="flex items-center rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={logo} alt="Logo" className="h-12 w-12 sm:h-16 sm:w-16" />
    </Link>
    <div className="hidden sm:flex space-x-4 lg:space-x-8">
      <Link to="/" className="text-white-1 hover:text-white-1 hover:font-bold">Home</Link>
      <Link to="/dropPoints" className="text-white-1 hover:text-white-1 hover:font-bold">Pontos de Descarte</Link>
      <Link to="/" className="text-white-1 hover:text-white-1 hover:font-bold">Agendamento</Link>
    </div>
    <div className="hidden sm:flex items-center">
      <img src={userlogin} alt="userlogin" className="h-8 w-8 mr-2" />
      <div>
        <p className="text-white-1">
          Faça
          <button onClick={openLoginModal} className="ml-2 px-2 font-bold text-white-1 rounded transition-transform transform hover:scale-105 cursor-pointer">Login</button> ou
        </p>
        <Link to="/buttonsUserRegister" className="font-bold text-white-1">
          <p className="rounded transition-transform transform hover:scale-105 cursor-pointer">
            Cadastre-se
          </p>
        </Link>
      </div>
    </div>
    <button 
      className="sm:hidden text-white-1"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
    >
      <Menu size={24} />
    </button>
  </div>
  {isMenuOpen && (
    <div className="mt-4 sm:hidden">
      <Link to="/" className="block text-white-1 py-2">Home</Link>
      <Link to="/dropPoints" className="block text-white-1 py-2">Pontos de Descarte</Link>
      <Link to="/" className="block text-white-1 py-2">Agendamento</Link>
      <button onClick={openLoginModal} className="block text-white-1 py-2 font-bold">Login</button>
      <Link to="/" className="block text-white-1 py-2 font-bold">Cadastre-se</Link>
    </div>
  )}
</nav>
</header>
);
}

