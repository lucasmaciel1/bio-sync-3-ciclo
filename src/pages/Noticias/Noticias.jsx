import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IoIosArrowBack } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';
import React, { useEffect } from 'react';

export default function Conteudos() {

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo quando o componente é montado
  }, []);

  const news = [
    { 
      id: 1, 
      title: 'A Importância da Reciclagem na Conservação do Meio Ambiente', 
      excerpt: 'A reciclagem é uma ferramenta essencial para reduzir a quantidade de resíduos e conservar os recursos naturais. Neste artigo, discutimos como a reciclagem pode impactar positivamente nosso planeta.',
      thumbnail: './cardConteudo.jpg',
      link: '/Noticias' 
    },
    { 
      id: 2, 
      title: 'Mudanças Climáticas e Seus Efeitos na Biodiversidade', 
      excerpt: 'As mudanças climáticas estão afetando os ecossistemas de maneiras alarmantes. Este artigo explora as consequências e o que podemos fazer para mitigar esses efeitos.',
      thumbnail: './cardConteudo.jpg',
      link: '/Noticias'  
    },
    { 
      id: 3, 
      title: 'Iniciativas para Reduzir o Uso de Plástico',
      excerpt: 'O uso excessivo de plástico é um dos maiores desafios ambientais da atualidade. Descubra iniciativas que estão ajudando a reduzir esse problema e promover a sustentabilidade.',
      thumbnail: './cardConteudo.jpg',
      link: '/Noticias'   
    },
    { 
      id: 4, 
      title: 'Energia Renovável: Caminho para um Futuro Sustentável', 
      excerpt: 'A transição para fontes de energia renováveis é crucial para a sustentabilidade do planeta. Saiba mais sobre as vantagens da energia solar e eólica.',
      thumbnail: './cardConteudo.jpg',
      link: '/Noticias'    
    },
  ];
  
  const currentPage = 1;
  const totalPages = 5;

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <main className="container mx-auto px-4 py-12 max-w-screen-md">
       <HashLink to="/#Conscientização" className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-2 mb-4 "> 
        <IoIosArrowBack className="text-green-1 w-6 h-6" />
        <h3 className="font-bold text-green-1 text-lg">Notícias e conteúdos</h3>
        </HashLink>
        <h1 className="text-2xl font-bold text-gray-800 mb-8 pt-5">Notícias</h1>
        <hr className='border-gray-1'></hr>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 pt-4">Todas as notícias</h2>
        <div className="space-y-6 mb-12">
          {news.map((newsItem) => (
            <article key={newsItem.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
              <div className="flex items-center p-4 sm:p-6">
                <img
                  src={newsItem.thumbnail}
                  alt=""
                  className="w-28 h-28 rounded-lg object-cover mr-6 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{newsItem.title}</h3>
                  <p className="text-sm text-gray-600">{newsItem.excerpt}</p>
                  <HashLink to={newsItem.link} className="inline-block mt-3 text-green-600 hover:text-green-1 font-medium">Ler mais</HashLink>
                </div>
              </div>
            </article>
          ))}
        </div>
        <nav className="flex justify-center items-center space-x-2" aria-label="Paginação">
          <button className="p-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label="Página anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                i + 1 === currentPage
                  ? 'bg-green-500 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              aria-label={`Página ${i + 1}`}
              aria-current={i + 1 === currentPage ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button className="p-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label="Próxima página">
            <ChevronRight className="w-5 h-5" />
          </button>
        </nav>
      </main>
    </div>
  );
}
