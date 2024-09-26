import { DefaultRouters } from './routers/index';
import { AuthContextProvider } from './context/AuthContext';
 
function App() {

  return (
    <div>
      <AuthContextProvider>
        <DefaultRouters />
      </AuthContextProvider>
    </div>
  );
}
 
export default App;