import GenerateButtonInitiator from '../../utils/generate-button-initiator';
import { createQuoteCard } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="w-4/5 min-h-96 mx-auto mt-8 p-8 text-center rounded-lg text-slate-50 bg-slate-700 md:w-1/2">
          <div id="quote-text">
            <p>Click Random to generate Quote !!!</p>
            <p><i class="fa fa-arrow-down" aria-hidden="true"></i></p>
          </div>
          <div id="quote-share" class="flex justify-between text-white">
            <button id="copy-btn" class="hover:text-sky-200" title="copy">
              <i class="fa fa-clone"></i>
            </button>
            <div id="fav-btn-container">
              <button id="save-btn" class="hover:text-sky-200" title="save quote">
                <i class="fa fa-bookmark-o"></i>
              </button>
            </div>
          </div>
      </div>
        <button id="generate-btn" class="w-4/5 mx-auto my-2 p-2 text-white font-bold bg-sky-700 hover:bg-sky-500 md:w-1/5"> 
            RANDOM 
        </button>
        `;
  },
  async afterRender() {
    const quoteTextContainer = document.querySelector('#quote-text');

    const quote = {};
    const generateButton = {
      button: document.querySelector('#generate-btn'),
      container: quote,
    };

    GenerateButtonInitiator.init(generateButton);

    generateButton.button.addEventListener('click', async () => {
      await GenerateButtonInitiator.renderDisplay();
      quoteTextContainer.innerHTML = createQuoteCard(quote.result);
    });
  },
};

export default HomePage;
