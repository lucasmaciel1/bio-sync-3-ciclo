import { DefaultRouters } from './routers/index';
import { AuthContextProvider } from './context/AuthContext';
import { useState } from 'react';
import { Login } from './pages/Login/Login';
 
function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <div>
      <div>
        <button onClick={openLogin}>Abrir Login</button>
        <Login isOpen={isLoginOpen} onClose={closeLogin}/>
      </div>
      <AuthContextProvider>
        <DefaultRouters />
      </AuthContextProvider>
    </div>
  );
}
 
export default App;