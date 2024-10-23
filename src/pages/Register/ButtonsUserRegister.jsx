import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';



export default function ButtonsUserRegister({ openLoginModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = '/logo-bio-sync-login.png';
  const userlogin = '/user.png';
  const imgRegister1 = '/undraw_throw_away_trash_x60k.svg'
  const imgRegister2 = '/undraw_collecting_re_lp6p.svg'

  return (
    <div className="min-h-screen bg-white-1 font-montserrat">
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

      <main className="container mx-auto px-4 sm:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white-1 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Receptor/Catador</h2>
            <p className="mb-4 text-center">Faça seu cadastro para ter acesso total</p>
            <Link to="/UserRegister" className="flex items-center rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={imgRegister1} alt="Receptor/Catador" className="mb-4 mx-auto" />
            </Link>
            <button to className="w-full bg-green-1 text-white-1 py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
              Cadastrar-se
            </button>
          </div>
          <div className="bg-white-1 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Ponto De Descarte</h2>
            <p className="mb-4 text-center">Cadastre sua residência ou comércio para realizarem o descarte</p>
            <Link className="flex items-center rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={imgRegister2} alt="Receptor/Catador" className="mb-4 mx-auto" />
            </Link>
            <button to='/' className="w-full bg-green-1 text-white-1 py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
              Cadastrar Ponto de Descarte
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-green-1 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-green-1 p-4 sm:p-8 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-black-1">Idealizadores</h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-white-1 rounded-full shadow-lg"></div>
              ))}
            </div>
            <p className="text-center text-base sm:text-lg text-black-1 font-semibold">© Copyright 2024 | BIOSYNC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}