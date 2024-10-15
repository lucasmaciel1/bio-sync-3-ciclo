import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Dialog } from '@headlessui/react';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

const cadeadoIcon = '/cadeado_aberto.png';
const XIcon = '/botao-apagar.png';
const avatarIcon = '/avatar.png';
const logo = '/logo-bio-sync-login.png'


  return (
    <Dialog open={isOpen} onClose={onClose}>
    <Dialog.Panel className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black-1 p-8 rounded-xl opacity-95 --tw-shadow-color: #fff;  font-montserrat shadow-lg max-w-sm w-full text-white relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-red-500 hover:fill-white-1 transition-colors"
          aria-label="Fechar"
        >
          <img src={XIcon} className="h-5 w-5" />
        </button>
        <div className="flex items-center justify-start space-x-20">
          <img src={logo} class='object-scale-down h-20 w-10' alt="Logo" ></img>
          <Dialog.Title className="text-white-1 text-2xl font-bold">Login</Dialog.Title>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            </label>
            <div className="relative">
              <input 
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder-white-1  bg-opacity-10  placeholder-opacity-200 mt-1 block w-full bg-gray-1 border border-gray-600 rounded-md p-2 pl-2 focus:outline-none focus:ring focus:ring-green-1 text-white-1"
                required
                placeholder='E-mail'
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white-1">
                <img src={avatarIcon}  className="h-6 w-6"/>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="placeholder-white-1  bg-opacity-10 placeholder-opacity-200 mt-1 block w-full bg-gray-1 border border-gray-600 rounded-md p-2 pl-2 focus:outline-none focus:ring focus:ring-green-1 text-white-1"
                required
                placeholder="Senha"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <img src={cadeadoIcon}  className="h-6 w-6"/>
              </span>
            </div>

            <div class="flex items-center mb-4">
           <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-10 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
           <label for="default-radio-1" class="ms-2 text-sm font-medium text-white-1 dark:text-gray-300">Lembrar-se</label> 
          <a href="#" className="absolute  right-8 text-white-1 hover:text-green-1">
            Esqueceu sua senha?
          </a>
           </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-1 hover:text-white-1 font-bold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center text-sm mt-4">
          <p className="text-white-1 mr-2">Não tem cadastro?</p>
          <a href="#" className="text-white-1 hover:text-green-1">
           Registre-se
          </a>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
  )
}
