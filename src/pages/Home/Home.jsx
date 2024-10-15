// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


function Home({ openLoginModal }) {
  const logo = '/logo-bio-sync-login.png';
  const cardconscientizacao = '/Cerebro.png';
  const cardpontodescarte = '/PontoDescarte.png';
  const cardagendamento = '/Agendamento.png';
  const logoinstagram = '/insta-preto.png';
  const logotiktok = '/tiktok--preto.png';
  const logoyoutube = '/youtube_black.png';
  const cardnoticias = '/cardConteudo.png';
  const cardconteudos = '/cardNoticias.png';
  const causaibama = '/ibamacausa.png';
  const causaecobarr = '/ecobarreira.png';
  const causasosamazonia = '/SOS-Amazonia-logo.png';


  return (
    <div className="min-h-screen bg-gray-100">
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

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center my-24">Quem Somos?</h1>
        <p className="text-center font">
          O objetivo da BIOSYNC é estabelecer um ambiente virtual que
          possibilite a conexão e conscientização de pessoas em prol de
          tornar o futuro mais limpo e sustentável, gerando emprego,
          visibilidade e oportunidade para pequenos coletores,
          além disso, disponibilizar informações de maneira prática para os cidadãos.
        </p>

        
        <div className="gap-16 flex justify-center my-24">
          <div className="bg-white p-6 rounded-lg shadow">
            <img src={cardconscientizacao} alt="card conscientizacao" className="h-40 w-40 mb-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <img src={cardpontodescarte} alt="card pontodescarte" className="h-40 w-40 mb-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <img src={cardagendamento} alt="card agendamento" className="h-40 w-40 mb-4" />
          </div>
        </div>
        

        <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Redes Sociais</h2>
        <div className="flex space-x-16 justify-center">
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

        <div className="bg-[url('/public/back-cont.png')] bg-center bg-cover h-32 text-white-1">
          <h2 className="text-3xl font-bold mt-12 mb-6">Ambiente de Conscientização</h2>
          <div className="flex gap-8 justify-center space-x-24">
            <div>
              
              <img src={cardconteudos} alt="conteudos" className="w-42 h-64 object-cover rounded-lg" />  
            </div>
            <div>
              
              <img src={cardnoticias} alt="noticias" className="w-42 h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <div className="my-80">
        <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Apoie causas ambientais</h2>
        <div className="flex gap-24 justify-center">
          {[<img src={causaibama} alt="conteudos"/>,
            <img src={causaecobarr} alt="conteudos"/>,
            <img src={causasosamazonia} alt="conteudos"/>].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <p className="text-center text-gray-600">{i}</p>
            </div>
          ))}
        </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Apoio causas ambientais</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/sponsor-logo-1.png" alt="Sponsor 1" className="h-16" />
          <img src="/sponsor-logo-2.png" alt="Sponsor 2" className="h-16" />
          <img src="/sponsor-logo-3.png" alt="Sponsor 3" className="h-16" />
        </div>

      </main>

      <footer className="bg-indigo-500 text-white py-8">
        <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Idealizadores</h2>
        
        <div className="container mx-auto px-6">
          <p className="text-center">&copy; 2023 Eco Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;