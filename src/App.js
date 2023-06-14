import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (

    <div className="App">
      <div className="Header_container">
        <div className="Header_containerButtons">
          <a className="Header_buttonSelected" href="/">Para Você</a>
          <a className="Header_buttonSelect" href="/about">Quem Somos</a>
          <a className="Header_buttonSelect" href="/businesses">Para Empresas</a>
          <a className="Header_buttonSelect" href="/contact">Contato</a>
          <a className="Header_buttonLogin" href="http://localhost:3000/signup">Entrar</a>
        </div>
      </div>
      <div className="VideoSession_container">
        <div className="VideoSession_text">
          <h3>Explore o Virtual Office</h3>
          <h1>Transforme sua forma de trabalhar<br />com o Virtual Office</h1>
          <h2 style={{ color: '#00b8e6' }}>Acesse seu ambiente de trabalho virtual<br />de qualquer lugar!</h2>
          <p>
            <span>Experimente uma nova maneira de trabalhar com o Virtual Office.<br />Tenha a flexibilidade de acessar seu ambiente de trabalho de forma remota e otimize sua produtividade. Aproveite essa oportunidade e construa um futuro profissional de sucesso com o Virtual Office.</span>
          </p>
          <div className="PriceTable_container">
            <div className="PriceTable">
              <h4>Planos</h4>
              <div className="PriceTable_row">
                <div className="PriceTable_item">
                  <h5>Plano Básico</h5>
                  <p>R$19.99/mês</p>
                  <ul>
                    <li>Recursos básicos</li>
                    <li>Acesso limitado</li>
                    <li>Suporte por e-mail</li>
                  </ul>
                </div>
                <div className="PriceTable_item">
                  <h5>Plano Pro</h5>
                  <p>R$39.99/mês</p>
                  <ul>
                    <li>Recursos avançados</li>
                    <li>Acesso completo</li>
                    <li>Suporte prioritário</li>
                  </ul>
                </div>
              </div>
              <div className="PriceTable_buttonContainer">
                <a className="PriceTable_button" href="https://app.devaria.com.br/entrar">Comece agora</a>
              </div>
            </div>
            <div className="VideoSession_video">
              <div className="VideoSession_player" style={{ width: '640px', height: '360px' }}>
                <div data-vimeo-initialized="true" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                  <iframe src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/rebrand/landing-pages/homepage/kumospace-onboarding-optimized.mp4?tx=w_responsive:fallback-max-width_1920;fallback-max-width-mobile_720" width="426" height="240" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Saiba mais - Pré-venda" data-ready="true" style={{ width: '100%', height: '100%' }}></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
