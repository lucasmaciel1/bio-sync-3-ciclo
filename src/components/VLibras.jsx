import React, { useEffect } from 'react';

const VLibras = () => {
  useEffect(() => {
    const loadVLibras = () => {
      const script = document.createElement('script');
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.onload = () => {
        if (window.VLibras) {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        }
      };
      document.body.appendChild(script);
    };

    // Verifica se o documento já está carregado
    if (document.readyState === 'complete') {
      loadVLibras();
    } else {
      window.addEventListener('load', loadVLibras);
      return () => window.removeEventListener('load', loadVLibras);
    }
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;