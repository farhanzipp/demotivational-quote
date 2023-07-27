import '../styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';

const hamburgerButtonElement = document.querySelector('#hamburger-btn');
const drawerElement = document.querySelector('#nav-drawer');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});
