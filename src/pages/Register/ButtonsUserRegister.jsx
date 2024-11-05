import React, {  } from 'react';
import { Link } from 'react-router-dom';



export default function ButtonsUserRegister({ openLoginModal }) {
  const imgRegister1 = '/undraw_throw_away_trash_x60k.svg'
  const imgRegister2 = '/undraw_collecting_re_lp6p.svg'

  return (
    <div className="min-h-screen bg-white-1 font-montserrat">
      

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

    </div>
  );
}