import { Outlet } from 'react-router-dom';
 
function AuthLayout() {
  return (
    <main
      className={`
        grid place-items-center h-screen w-screen
        bg-[url('../../public/register-flow/background-auth-flow.png')]
        bg-no-repeat bg-cover mix-blend-multiply
      `}>
      <Outlet />
    </main>
  );
}
 
export { AuthLayout };