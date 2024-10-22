import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ChevronDown } from 'lucide-react';

export default function PontosDeDescarte({ openLoginModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = '/logo-bio-sync-login.png';
  const userlogin = '/user.png';

  const [filters, setFilters] = useState({
    material: '',
    estado: '',
    cidade: '',
    bairro: '',
    periodo: '',
  });

  const pontosDeDescarte = [
    { id: 1, nome: 'Panificadora Doce Sonho', endereco: 'Av. 7 de Setembro, 451 - Centro - Matão/SP' },
    { id: 2, nome: 'Mercearia Santa Luz', endereco: 'Rua João Pessoa, 192 - Centro - Matão/SP' },
    { id: 3, nome: 'Marmoraria Monte Alto', endereco: 'Rua Cesário Motta, 204 - Centro - Matão/SP' },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    // Implement filter logic here
    console.log('Applying filters:', filters);
  };

  const clearFilters = () => {
    setFilters({
      material: '',
      estado: '',
      cidade: '',
      bairro: '',
      periodo: '',
    });
  };

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
        <h1 className="text-3xl font-bold mb-8 text-center">Pontos de Descarte</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-1 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Filtros</h2>
              <div className="space-y-4">
                {['material', 'estado', 'cidade', 'bairro', 'periodo'].map((filter) => (
                  <div key={filter}>
                    <label htmlFor={filter} className="block text-sm font-medium text-gray-700 capitalize mb-1">
                      {filter}
                    </label>
                    <div className="relative">
                      <select
                        id={filter}
                        name={filter}
                        value={filters[filter]}
                        onChange={handleFilterChange}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-1 focus:border-green-1 sm:text-sm rounded-md"
                      >
                        <option value="">Selecione</option>
                        {/* Add options here */}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={applyFilters}
                  className="w-full bg-green-1 text-white-1 py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
                >
                  Filtrar
                </button>
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
                >
                  Limpar
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar pontos de descarte"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-1"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="space-y-4">
              {pontosDeDescarte.map((ponto) => (
                <div key={ponto.id} className="bg-white-1 p-4 rounded-lg shadow flex items-center">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{ponto.nome}</h3>
                    <p className="text-gray-600">{ponto.endereco}</p>
                  </div>
                  <div className="w-4 h-4 bg-green-1 rounded-full"></div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-gray-600">
              Exibindo 3 de 6 resultados
            </div>
            <div className="mt-4 flex justify-center">
              <button className="mx-1 px-3 py-1 bg-gray-200 rounded">1</button>
              <button className="mx-1 px-3 py-1 bg-gray-200 rounded">2</button>
              <button className="mx-1 px-3 py-1 bg-gray-200 rounded">{'>'}</button>
            </div>
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