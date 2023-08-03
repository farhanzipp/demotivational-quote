/* eslint-disable no-unused-vars */
import '../styles/styles.css';
import 'regenerator-runtime';
import App from './views/app';
import './components/app-bar';
import swRegister from './utils/sw-register';
// import './utils/fontawesome-lib';

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
