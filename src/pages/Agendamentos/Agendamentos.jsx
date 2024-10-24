import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

const appointments = [
  {
    id: 1,
    title: "Coleta de Recicláveis Residenciais",
    materialTypes: ["Alumínio", "Papel", "Plástico"],
    address: "Rua das Flores, 123 - Centro, São Paulo",
    city: "São Paulo",
    state: "SP",
    availableTimes: ["08:00", "10:00", "14:00", "16:00"],
    imageUrl: '/placeholder.svg?height=150&width=150'
  },
  {
    id: 2,
    title: "Descarte de Eletrônicos",
    materialTypes: ["Eletrônicos", "Baterias"],
    address: "Av. Principal, 456 - Bairro Novo, Rio de Janeiro",
    city: "Rio de Janeiro",
    state: "RJ",
    availableTimes: ["09:00", "11:00", "15:00", "17:00"],
    imageUrl: '/placeholder.svg?height=150&width=150'
  },
  {
    id: 3,
    title: "Coleta de Vidros e Metais",
    materialTypes: ["Vidro", "Metal"],
    address: "Rua dos Artesãos, 789 - Vila Antiga, Belo Horizonte",
    city: "Belo Horizonte",
    state: "MG",
    availableTimes: ["10:00", "13:00", "16:00", "18:00"],
    imageUrl: '/placeholder.svg?height=150&width=150'
  },
  {
    id: 4,
    title: "Reciclagem de Papelão",
    materialTypes: ["Papelão", "Papel"],
    address: "Alameda das Indústrias, 321 - Distrito Industrial, Curitiba",
    city: "Curitiba",
    state: "PR",
    availableTimes: ["07:00", "09:00", "11:00", "13:00"],
    imageUrl: '/placeholder.svg?height=150&width=150'
  },
  {
    id: 5,
    title: "Coleta de Óleo de Cozinha",
    materialTypes: ["Óleo Usado"],
    address: "Praça da Alimentação, 654 - Centro Gastronômico, Salvador",
    city: "Salvador",
    state: "BA",
    availableTimes: ["10:00", "14:00", "18:00"],
    imageUrl: '/placeholder.svg?height=150&width=150'
  },
  // ... (other appointments)
];

export default function Agendamentos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const cities = useMemo(() => [...new Set(appointments.map(a => a.city))], []);
  const states = useMemo(() => [...new Set(appointments.map(a => a.state))], []);

  const filteredAppointments = useMemo(() => {
    return appointments.filter(appointment =>
      appointment.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCity === '' || appointment.city === selectedCity) &&
      (selectedState === '' || appointment.state === selectedState)
    );
  }, [searchTerm, selectedCity, selectedState]);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  return (
    <div className="min-h-screen bg-white-1 font-montserrat">
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center mt-8 sm:mt-12">Realizar Coleta</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Agendamentos Disponíveis</h2>
        
        <div className="mb-6 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-1"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-1 rounded-md"
            >
              <option value="">Todas as Cidades</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-1 rounded-md"
            >
              <option value="">Todos os Estados</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16 my-8 sm:my-12 lg:my-24">
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white-1 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer" onClick={() => openModal(appointment)}>
              <img src={appointment.imageUrl} alt={appointment.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{appointment.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{appointment.city}, {appointment.state}</p>
                <button 
                  className="w-full bg-green-1 text-white-1 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedAppointment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white-1 p-6 rounded-lg max-w-md w-full border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedAppointment.title}</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <img src={selectedAppointment.imageUrl} alt={selectedAppointment.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-2"><strong>Endereço:</strong> {selectedAppointment.address}</p>
              <p className="text-gray-600 mb-2"><strong>Cidade:</strong> {selectedAppointment.city}</p>
              <p className="text-gray-600 mb-2"><strong>Estado:</strong> {selectedAppointment.state}</p>
              <p className="text-gray-600 mb-2"><strong>Tipos de Materiais:</strong> {selectedAppointment.materialTypes.join(", ")}</p>
              <div className="mb-4">
                <p className="font-semibold mb-2">Horários Disponíveis:</p>
                <div className="grid grid-cols-2 gap-2">
                  {selectedAppointment.availableTimes.map((time, index) => (
                    <button key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded">
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <button className="w-full bg-green-1 text-white-1 py-2 rounded-full hover:bg-opacity-90 transition duration-300">
                Confirmar Coleta
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}