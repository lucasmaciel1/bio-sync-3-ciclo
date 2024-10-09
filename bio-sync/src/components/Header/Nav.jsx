import Logo  from '/Logo.png'
import Teste from '/public/Teste.jpg'
function Header(){
    return (
        <header className="w-full bg-light-social-brand">
          <div className="max-w-[1160px] mx-auto py-7 flex justify-between items-center">
            <figure
              className="flex gap-4 items-center cursor-pointer"
              title="Voltar à home"
              aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
            >
              <img
                className="w-24 h-24"
                src={Logo}
                alt="Árvore minimalista simétrica com 5 folhas e com nome BIOSYNC embaixo"
              />
             {/*<figcaption className="text-left max-w-44">
                Grupo <strong className="text-social-brand">Escoteiro</strong> Terra Da Saudade - 05/SP
              </figcaption>*/}
            </figure>
            <nav>
              <ul className="flex gap-4">
                <li>
                  
        
                    <a href="/">Home</a>
                  
                </li>
                {/*<li>
                  
                    to="/PontoDescarte"
                    text={'Ponto de Descarte'}
                  
                </li>
                <li>
                  
                    to="/Agendamento"
                    text={'Agendamento'}
                  
                </li>*/}
                <li>
                  
                    <a href='/Login'>Login</a>
                    
                  
                </li>
                
              </ul>
            </nav>
          </div>
        </header>
      );
}
export {Header};
