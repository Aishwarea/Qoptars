import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Team from './Team';
import Clientele from './Clientele';
import Faq from './Faq';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Team />
    <Clientele />
    <Faq />
    <Footer />
  </React.StrictMode>
);

