import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CadastroUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [file, setFile] = useState(null);
  const logo = '/logo-bio-sync-cadastro.png';

  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i=1; i<=9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  };

  const validarDados = () => {
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return false;
    }
    if (!validarCPF(cpf)) {
      setErro('CPF inválido.');
      return false;
    }
    if (celular.length < 10) {
      setErro('Número de celular inválido.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setSucesso(false);
    setCarregando(true);
  
    if (!validarDados()) {
      setCarregando(false);
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
  
      await addDoc(collection(db, 'usuarios'), {
        uid: user.uid,
        nome,
        email,
        cpf,
        celular,
      });
  
      setSucesso(true);
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setCpf('');
      setCelular('');
      setFile(null);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error); // Log do erro
      if (error.code === 'auth/email-already-in-use') {
        setErro('Este e-mail já está em uso por outro usuário.');
      } else if (error.code === 'auth/weak-password') {
        setErro('A senha deve ter pelo menos 6 caracteres.');
      } else {
        setErro('Erro ao cadastrar usuário: ' + error.message);
      }
    } finally {
      setCarregando(false);
    }
  };
  

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="flex justify-center items-center space-x-4">
              <h2 className="text-2xl font-bold">Cadastro de usuário</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome completo</label>
                  <input
                    id="nome"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
                  <input
                    id="cpf"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    maxLength={14}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular</label>
                  <input
                    id="celular"
                    type="tel"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Celular"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    maxLength={15}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
                  <input
                    id="senha"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
                  <input
                    id="confirmarSenha"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Confirmar senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {erro && (
                <div className="flex items-center space-x-2 text-red-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{erro}</span>
                </div>
              )}
              {sucesso && (
                <div className="flex items-center space-x-2 text-green-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cadastro realizado com sucesso!</span>
                </div>
              )}
            </form>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button 
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-1 hover:text-white-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={carregando}
              onClick={handleSubmit}
            >
              {carregando ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}