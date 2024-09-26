import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layouts/auth-layout';
import { DefaultLayout } from '../layouts/default-layout';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

function DefaultRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/autenticacao" element={<AuthLayout />}>
          <Route
            path="Login"
            element={<Login />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export { DefaultRouters };