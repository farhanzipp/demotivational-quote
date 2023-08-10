/* eslint-disable no-unused-vars */
import '../styles/styles.css';
import '../styles/loader.css';
import 'regenerator-runtime';
import App from './views/app';
import './components/app-bar';
import './components/loader-spin';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger-btn'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('#main-content'),
  footer: document.querySelector('#copyright-year'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
