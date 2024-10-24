import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ChevronDown, X, User, Lock } from 'lucide-react';

// Modal component for disposal point details
const DisposalPointModal = ({ point, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-green-1 p-6 rounded-lg max-w-2xl w-full mx-4 border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{point.nome}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 mb-4">{point.endereco}</p>
        <h3 className="text-xl font-semibold mb-2">Materiais aceitos:</h3>
        <ul className="list-disc list-inside mb-4">
          {point.materiais.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
        <p className="text-gray-700">{point.descricao}</p>
      </div>
    </div>
  );
};

// Login Modal component
const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full mx-auto relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <img src="/logo-bio-sync-login.png" alt="BIOSYNC Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-2xl font-bold text-white">Login</h2>
          </div>
          <form>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 text-white border-gray-700 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="E-mail"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full bg-gray-800 text-white border-gray-700 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Senha"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-300">
                <input type="checkbox" className="mr-2 form-checkbox text-green-500" />
                Lembrar-se
              </label>
              <a href="/" className="text-sm text-green-500 hover:underline">Esqueceu sua senha?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-400">
            Não tem cadastro? <a href="/" className="text-green-500 hover:underline">Registre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function PontosDeDescarte() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const logo = '/logo-bio-sync-login.png';
  const userlogin = '/user.png';

  const [filters, setFilters] = useState({
    material: '',
    estado: '',
    cidade: '',
    bairro: '',
    periodo: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const pontosDeDescarte = [
    {
      id: 1,
      nome: 'Panificadora Doce Sonho',
      endereco: 'Av. 7 de Setembro, 451 - Centro - Matão/SP',
      materiais: ['Plástico', 'Papel', 'Vidro'],
      descricao: 'Aceitamos materiais recicláveis em bom estado. Horário de funcionamento: 8h às 18h, de segunda a sábado.',
      estado: 'São Paulo',
      cidade: 'Matão',
      bairro: 'Centro',
      periodo: 'Manhã',
    },
    {
      id: 2,
      nome: 'Mercearia Santa Luz',
      endereco: 'Rua João Pessoa, 192 - Centro - Matão/SP',
      materiais: ['Metal', 'Eletrônicos'],
      descricao: 'Especializada em coleta de metais e eletrônicos. Oferecemos descontos em produtos da loja para quem traz materiais para reciclagem.',
      estado: 'São Paulo',
      cidade: 'Matão',
      bairro: 'Centro',
      periodo: 'Tarde',
    },
    {
      id: 3,
      nome: 'Marmoraria Monte Alto',
      endereco: 'Rua Cesário Motta, 204 - Centro - Matão/SP',
      materiais: ['Vidro', 'Cerâmica'],
      descricao: 'Aceitamos resíduos de construção, especialmente vidros e cerâmicas. Agendamento prévio necessário para grandes volumes.',
      estado: 'São Paulo',
      cidade: 'Matão',
      bairro: 'Centro',
      periodo: 'Integral',
    },
    {
      id: 4,
      nome: 'Eco Recicla Araraquara',
      endereco: 'Av. Bento de Abreu, 1172 - Jardim Primavera - Araraquara/SP',
      materiais: ['Plástico', 'Papel', 'Metal', 'Vidro', 'Eletrônicos'],
      descricao: 'Centro de reciclagem completo, aceitamos diversos tipos de materiais. Oferecemos coleta agendada para grandes volumes.',
      estado: 'São Paulo',
      cidade: 'Araraquara',
      bairro: 'Jardim Primavera',
      periodo: 'Integral',
    },
    {
      id: 5,
      nome: 'Cooperativa Verde Futuro',
      endereco: 'Rua das Acácias, 789 - Vila Nova - São Carlos/SP',
      materiais: ['Plástico', 'Papel', 'Metal'],
      descricao: 'Cooperativa de catadores que realiza coleta seletiva e reciclagem. Aceitamos doações de materiais recicláveis.',
      estado: 'São Paulo',
      cidade: 'São Carlos',
      bairro: 'Vila Nova',
      periodo: 'Manhã',
    },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    // Filter logic is now handled by the useMemo hook
    console.log('Filters applied:', filters);
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const stableFilters = useMemo(() => filters, [filters]);

const filteredPontos = useMemo(() => {
    return pontosDeDescarte.filter(ponto => {
      const matchesSearch = ponto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ponto.endereco.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilters = Object.entries(stableFilters).every(([key, value]) => {
        if (!value) return true; // Skip empty filters
        if (key === 'material') {
          return ponto.materiais.includes(value);
        }
        return ponto[key] === value;
      });

      return matchesSearch && matchesFilters;
    });
    
  }, [pontosDeDescarte, searchTerm, stableFilters]);

  // Generate unique options for each filter
  const filterOptions = {
    material: [...new Set(pontosDeDescarte.flatMap(p => p.materiais))],
    estado: [...new Set(pontosDeDescarte.map(p => p.estado))],
    cidade: [...new Set(pontosDeDescarte.map(p => p.cidade))],
    bairro: [...new Set(pontosDeDescarte.map(p => p.bairro))],
    periodo: [...new Set(pontosDeDescarte.map(p => p.periodo))],
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white-1 font-montserrat">
 

      <main className="container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Pontos de Descarte</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-1 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Filtros</h2>
              <div className="space-y-4">
                {Object.entries(filterOptions).map(([filter, options]) => (
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
                        {options.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
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
                  className="w-full bg-green-1 text-white-1 py-2  px-4 rounded hover:bg-opacity-90 transition duration-300"
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
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-1"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="space-y-4">
              {filteredPontos.map((ponto) => (
                <div 
                  key={ponto.id} 
                  className="bg-white-1 p-4 rounded-lg shadow flex items-center cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setSelectedPoint(ponto)}
                >
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{ponto.nome}</h3>
                    <p className="text-gray-600">{ponto.endereco}</p>
                  </div>
                  <div className="w-4 h-4 bg-green-1 rounded-full" aria-label="Ponto ativo"></div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-gray-600">
              Exibindo {filteredPontos.length} de {pontosDeDescarte.length} resultados
            </div>
            <div className="mt-4 flex justify-center">
              <button className="mx-1 px-3 py-1 bg-gray-200 rounded">1</button>
              <button className="mx-1 px-3 py-1 bg-gray-200 rounded">2</button>
              <button className="mx-1 px-3 py-1 bg-gray-200 rounded" aria-label="Próxima página">{'>'}</button>
            </div>
          </div>
        </div>
      </main>

      <DisposalPointModal
        point={selectedPoint}
        isOpen={!!selectedPoint}
        onClose={() => setSelectedPoint(null)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
      />
    </div>
  );
}