import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const causes = [
  { name: 'IBAMA', logo: '/ibamacausa.png' },
  { name: 'Ecobarreira', logo: '/ecobarreira.png' },
  { name: 'SOS Amazônia', logo: '/SOS-Amazonia-logo.png' },
];

export function EnvironmentalCausesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % causes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + causes.length) % causes.length);
  };

  return (
    <div> {/*TESTE*/}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Apoie causas ambientais</h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-green-500 text-white p-2 rounded-full focus:outline-none"
          aria-label="Previous cause"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-24 justify-center">
          {causes.slice(currentIndex, currentIndex + 3).map((cause, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105 cursor-pointer" >
              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <img src={cause.logo} alt={cause.name} className="max-w-full max-h-full" />
              </div>
              <p className="text-center text-gray-600">{cause.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-green-500 text-white p-2 rounded-full focus:outline-none"
          aria-label="Next cause"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-8 bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentIndex + 1) / causes.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

function Home({ openLoginModal }) {
  const logo = '/logo-bio-sync-login.png';
  const cardconscientizacao = '/Cerebro.png';
  const cardpontodescarte = '/PontoDescarte.png';
  const cardagendamento = '/Agendamento.png';
  const logoinstagram = '/insta-preto.png';
  const logotiktok = '/tiktok--preto.png';
  const logoyoutube = '/youtube_black.png';
  const cardnoticias = '/cardConteudo.jpg';
  const cardconteudos = '/cardNoticias.jpg';

  return (
    <div className="min-h-screen bg-gray-100  font-montserrat">
      <header className="bg-[url('/public/back-header-map-V3.jpg')] bg-center bg-cover h-32">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-25 w-20 mr-2" />
          </div>
          <div className="flex items-center space-x-16">
            <Link to="/" className="mx-2 text-white-1 hover:text-white-1 hover:font-bold">Home</Link>
            <Link to="/" className="mx-2 text-white-1 hover:text-white-1 hover:font-bold">Pontos de Descarte</Link>
            <Link to="/" className="mx-2 text-white-1 hover:text-white-1 hover:font-bold">Agendamento</Link>
          </div>
          <div>
            <button onClick={openLoginModal} className="ml-4 px-4 py-2 text-white-1 rounded hover:text-white-1 hover:font-bold">Login</button>
          </div>
        </nav>
      </header>

      <main className="mx-auto px-0 py-0">
        <h1 className="text-4xl font-bold mb-8 text-center my-24">Quem Somos?</h1>
        <p className="text-left mx-auto max-w-2xl text-xl">
          O objetivo da BIOSYNC é estabelecer um ambiente virtual que
          possibilite a conexão e conscientização de pessoas em prol de
          tornar o futuro mais limpo e sustentável, gerando emprego,
          visibilidade e oportunidade para pequenos coletores,
          além disso, disponibilizar informações de maneira prática para os cidadãos.
        </p>

        <div className="gap-16 flex justify-center my-24">
          <div className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img src={cardconscientizacao} alt="card conscientizacao" className="h-40 w-40 mb-4" />
          </div>
          <div className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ">
            <img src={cardpontodescarte} alt="card pontodescarte" className="h-40 w-40 mb-4" />
          </div>
          <div className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img src={cardagendamento} alt="card agendamento" className="h-40 w-40 mb-4" />
          </div>
        </div>
        
        <div className="bg-white py-8">
          <div className="bg-green-1 h-2 w-4/5 mx-auto"></div> {/* Barra verde superior com centralização */}
           <div className="py-6 px-6 text-left mx-auto max-w-2xl text-xl italic">
              <p>
                "A sustentabilidade cria e mantém as condições sob
                as quais os humanos e a natureza podem existir em
                equilíbrio, que permite a prosperidade a longo prazo."
              </p>
            <p className='p-4 '> 
                Dr. Karl-Henrik Robèrt
            </p>
        </div>
          <div className="bg-green-1 h-2 w-4/5 mx-auto"></div> {/* Barra verde inferior com centralização */}
        </div>

    <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Redes Sociais</h2>
        <div className="flex space-x-16 justify-center p-12">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            <img src={logoinstagram} alt="Instagram" className="h-24 w-24" />
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800">
            <img src={logotiktok} alt="TikTok" className="h-24 w-24" />
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800">
            <img src={logoyoutube} alt="YouTube" className="h-24 w-24" />
          </a>
        </div>

        <div className="bg-[url('/public/back-cont.png')] bg-center bg-cover h-100 p-8 text-white-1 box-border">
          <h2 className="text-3xl font-bold text-left mb-8">Ambiente de Conscientização</h2>
          <div className="flex justify-center space-x-48">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Conteúdos</h3>
              <div className="relative w-64 h-80 overflow-hidden rounded-lg border-4 border-white-1 transition-colors duration-300 hover:border-green-1 cursor-pointer">
                <img
                  src={cardconteudos}
                  alt="Conteúdos"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Notícias</h3>
              <div className="relative w-64 h-80 overflow-hidden rounded-lg border-4 border-white-1 transition-colors duration-300 hover:border-green-1 cursor-pointer">
                <img
                  src={cardnoticias}
                  alt="Notícias"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <EnvironmentalCausesCarousel />

      </main>

      <footer className="bg-green-1 py-8">
      <div className="container mx-auto px-6">
        <div className="bg-green-300 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-500">Idealizadores</h2>
          <div className="flex justify-between mb-8 ">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-28 h-28 bg-white-1 rounded-full shadow-lg"></div>
            ))}
          </div>
          <p className="text-center text-lg text-black-1 font-semibold">© Copyright 2024 | BIOSYNC</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Home;
