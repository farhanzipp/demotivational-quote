import '../styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'regenerator-runtime';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger-btn'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('main'),
});
