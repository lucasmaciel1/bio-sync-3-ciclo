import { useState, useEffect ,useRef } from 'react';
import { IoIosArrowBack, IoMdPlay, IoMdPause } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { HashLink } from 'react-router-hash-link';

export default function Artigo1() {
  const poluicaoImagem = '/Poluição.png';

  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);

  const articleText = `
    A crescente crise ambiental é uma realidade que não pode mais ser ignorada. Um dos principais problemas que contribuem para essa crise é o descarte inadequado de resíduos sólidos.
    
    Quando o lixo é descartado de forma imprópria, suas consequências negativas afetam não apenas o meio ambiente, mas também a saúde humana e a economia. É essencial compreender as implicações profundas e multifacetadas do lixo mal descartado a fim de tomar medidas para mitigar esses impactos negativos.

    Impactos no Meio Ambiente
    O lixo mal descartado pode poluir o solo, a água e o ar, contribuindo para a degradação ambiental. A presença de resíduos sólidos em ambientes naturais pode afetar a fauna e flora local, resultando em perda de biodiversidade e ecossistemas saudáveis.

    Consequências para a Saúde Pública
    A exposição a resíduos sólidos e produtos químicos nocivos pode causar sérios problemas de saúde, incluindo doenças respiratórias, infecciosas e alergias. O descarte inadequado de lixo pode ainda atrair pragas que propagam doenças, colocando em risco a saúde das comunidades.

    O Papel da Sociedade
    A conscientização e a educação sobre a importância do descarte correto de resíduos são fundamentais para reverter essa crise. A sociedade precisa se unir para promover práticas sustentáveis e exigir políticas públicas que incentivem a reciclagem e a redução de resíduos.

    É responsabilidade de cada um de nós fazer a nossa parte na luta contra o lixo mal descartado. Adotar hábitos sustentáveis e pressionar por mudanças é essencial para um futuro mais saudável e sustentável.
  `;

  const speechSynthesisRef = useRef(null);
  const totalDuration = 127; 

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setTimer(0);
    } else {
      const utterance = new SpeechSynthesisUtterance(articleText);
      utterance.lang = 'pt-BR';
      utterance.rate = 1;

      utterance.onend = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setTimer(0);
      speechSynthesisRef.current = utterance;
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "Qual é um dos principais problemas que contribuem para a crise ambiental?",
      options: [
        "Uso excessivo de energia renovável",
        "Descarte inadequado de resíduos sólidos",
        "Plantio de árvores em áreas urbanas",
        "Uso de transporte público"
      ],
      correctAnswer: 1
    },
    {
      question: "Quais são as áreas afetadas pelo lixo mal descartado?",
      options: [
        "Apenas o solo",
        "Apenas a água",
        "Solo, água e ar",
        "Apenas áreas urbanas"
      ],
      correctAnswer: 2
    },
    {
      question: "Qual é uma das consequências do lixo mal descartado para a saúde pública?",
      options: [
        "Aumento da expectativa de vida",
        "Melhoria na qualidade do ar",
        "Doenças respiratórias e infecciosas",
        "Redução de alergias"
      ],
      correctAnswer: 2
    },
    {
      question: "O que é fundamental para reverter a crise do lixo mal descartado?",
      options: [
        "Ignorar o problema",
        "Aumentar a produção de plástico",
        "Conscientização e educação sobre descarte correto",
        "Proibir totalmente o uso de embalagens"
      ],
      correctAnswer: 2
    },
    {
      question: "Qual é a responsabilidade de cada indivíduo em relação ao lixo?",
      options: [
        "Nenhuma, é responsabilidade apenas do governo",
        "Apenas reciclar plásticos",
        "Fazer sua parte e adotar hábitos sustentáveis",
        "Aumentar o consumo para estimular a economia"
      ],
      correctAnswer: 2
    }
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <article className="max-w-screen-md mx-auto p-4 pt-28">
      <HashLink to="/Conteudos" className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-2 mb-4"> 
        <IoIosArrowBack className="text-green-1 w-6 h-6" /> 
        <h3 className="font-bold text-green-1 text-lg">Artigos</h3>
      </HashLink>
      
      <h1 className="text-3xl font-bold text-blue-600 mb-4">As Consequências do Lixo Mal Descartado: Um Chamado à Ação para um Futuro Sustentável</h1>
      
      <div className="flex items-center gap-4 bg-gray-1 rounded-full p-2 w-full mb-4">
        <button
          onClick={handlePlayPause}
          className="flex items-center justify-center w-8 h-8 text-gray-700 hover:text-gray-900"
        >
          {isPlaying ? <IoMdPause size={20} /> : <IoMdPlay size={20} />}
        </button>
        
        <div className="flex items-center gap-4 flex-1">
          <span className="text-sm text-gray-600 min-w-[45px]">
            {formatTime(timer)}
          </span>
          <div className="relative flex-1 h-1 bg-gray-300 rounded-full">
            <div 
              className="absolute h-full bg-gray-500 rounded-full" 
              style={{ width: `${(timer / totalDuration) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-600 min-w-[45px]">
            {formatTime(totalDuration)}
          </span>
        </div>

        <button className="flex items-center justify-center w-8 h-8 text-gray-700 hover:text-gray-900">
          <SlOptions size={20} />
        </button>
      </div>

      <div className="mb-4 flex flex-col items-center">
        <img
        src={poluicaoImagem}
        alt="Poluição de resíduos em água"
        className="w-full mx-auto max-w-sm h-auto rounded-md"
        />
        <p className="text-sm text-gray-500 mt-1">Poluição de resíduos em água - Foto: Unsplash</p>
        </div>

      <p className="mb-4 text-gray-700">
        A crescente crise ambiental é uma realidade que não pode mais ser ignorada. Um dos principais problemas que contribuem para essa crise é o descarte inadequado de resíduos sólidos.
      </p>
      
      <p className="text-gray-700 mb-4">
        Quando o lixo é descartado de forma imprópria, suas consequências negativas afetam não apenas o meio ambiente, mas também a saúde humana e a economia. É essencial compreender as implicações profundas e multifacetadas do lixo mal descartado a fim de tomar medidas para mitigar esses impactos negativos.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Impactos no Meio Ambiente</h2>
      <p className="text-gray-700 mb-4">
        O lixo mal descartado pode poluir o solo, a água e o ar, contribuindo para a degradação ambiental. A presença de resíduos sólidos em ambientes naturais pode afetar a fauna e flora local, resultando em perda de biodiversidade e ecossistemas saudáveis.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Consequências para a Saúde Pública</h2>
      <p className="text-gray-700 mb-4">
        A exposição a resíduos sólidos e produtos químicos nocivos pode causar sérios problemas de saúde, incluindo doenças respiratórias, infecciosas e alergias. O descarte inadequado de lixo pode ainda atrair pragas que propagam doenças, colocando em risco a saúde das comunidades.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">O Papel da Sociedade</h2>
      <p className="text-gray-700 mb-4">
        A conscientização e a educação sobre a importância do descarte correto de resíduos são fundamentais para reverter essa crise. A sociedade precisa se unir para promover práticas sustentáveis e exigir políticas públicas que incentivem a reciclagem e a redução de resíduos.
      </p>
      
      <p className="text-gray-700 mb-4">
        É responsabilidade de cada um de nós fazer a nossa parte na luta contra o lixo mal descartado. Adotar hábitos sustentáveis e pressionar por mudanças é essencial para um futuro mais saudável e sustentável.
      </p>

     

      <div className="max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Quiz sobre Gestão de Resíduos</h2>
        {showScore ? (
          <div className="text-center bg-green-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">
              Parabéns! Você acertou {score} de {questions.length} perguntas!
            </h3>
            <p className="mb-4 text-green-700">Sua pontuação demonstra seu conhecimento sobre gestão de resíduos. Continue aprendendo e praticando hábitos sustentáveis!</p>
            <button 
              onClick={restartQuiz} 
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
            >
              Reiniciar Quiz
            </button>
          </div>
        ) : (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              Pergunta {currentQuestion + 1} de {questions.length}
            </h3>
            <p className="mb-6 text-gray-800 font-medium">{questions[currentQuestion].question}</p>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="w-full text-left bg-white hover:bg-blue-50 transition duration-300 p-3 rounded-lg shadow-sm border border-gray-200 text-gray-700 font-medium"
                  onClick={() => handleAnswerClick(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="mt-4 text-center text-gray-600">
          <p>Progresso: {currentQuestion + 1} de {questions.length}</p>
        </div>
      </div>
    </article>
  );
}