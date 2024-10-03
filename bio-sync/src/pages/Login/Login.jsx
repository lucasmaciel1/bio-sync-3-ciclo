import { useState } from 'react';
import PropTypes from 'prop-types'
import './Login.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/index"
function Login ({ isOpen ,onClose }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onClose();
        } catch (error) {
            console.error('Falha no login: ' + error.message);
        }
    };

    if (!isOpen) return null
    
return(
    <div className='modal-overlay'>
     <div className='modal'>
      <div className='modal-header'> 
       <div>
         <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' className='logo'>
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
         </svg>
         <h2 className='modal-title'>Login</h2>
       </div>
    <button className='close-button' onClick={onClose}>
        X
    </button>
    </div>
    <form onSubmit={handleLogin}>
    <div className='input-group'>
        <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='input'
          />
      <svg className='input-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1- .9 2-2 2h4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
        <polyline points='22,6 12,13 2,6'/>
      </svg>
    </div>
    <div className='input-group'>
        <input
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='input'
          />
          <svg className='input-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <rect x='3' y='11' width='18' height='11' rx='2' ry='2'/>
            <path d='M7 11V7a5 5 0 0 1 10 0v4'/>
          </svg>
    </div>
    <div className='remember-forgot'>
      <label className='remember-me'>
        <input
            type='checkbox'
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className='remember-checkbox'
        />
        Lembrar-se
      </label>
      <a href='#' className='link'>Esqueceu sua senha?</a>
     </div>
     <button type='submit' className='submit-button'>
        Login
     </button>
    </form>
    <p className='register-text'>
       Não tem cadastro? <a href='#' className='link'>Registre-se</a>
    </p>
 </div>
</div>
 );
};

Login.propTypes ={
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export {Login};