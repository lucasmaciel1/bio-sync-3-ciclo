import { DefaultRouters } from './routers';
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