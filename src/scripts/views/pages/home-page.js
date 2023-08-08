import addTooltips from '../../utils/add-tooltips';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
// import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import GenerateButtonInitiator from '../../utils/generate-button-initiator';
import { createQuoteCard, createLikeButton } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
            <div class="w-4/5 min-h-96 mx-auto mt-8 p-8 text-center rounded-lg text-slate-50 bg-slate-700 md:w-1/2">
                <div id="quote-text">
                  <p>Click Button For Motivational Quote!</p>
                </div>
                
                <div id="quote-share" class="flex justify-between text-white">
                  <button id="copy-btn" class="hover:text-sky-200" title="copy">
                    <i class="fa fa-clone"></i>
                    <span id="tooltips-label" class="font-mono hidden">Copied!</span>
                  </button>
                  
                  <div id="fav-btn-container">
                  
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
    const generateQuoteButton = document.querySelector('#generate-btn');
    const copyQuoteButton = document.querySelector('#copy-btn');
    const tooltipsLabel = document.querySelector('#tooltips-label');
    const favButtonContainer = document.querySelector('#fav-btn-container');

    const quote = {};

    // favButtonContainer.innerHTML = createLikeButton();

    GenerateButtonInitiator.init({
      button: generateQuoteButton,
      objContainer: quote,
    });

    generateQuoteButton.addEventListener('click', async () => {
      quoteTextContainer.innerHTML = '<loader-spin></loader-spin>';
      await GenerateButtonInitiator.renderQuoteObject();
      quoteTextContainer.innerHTML = createQuoteCard(quote.result);
    });

    copyQuoteButton.addEventListener('click', async () => {
      try {
        const quoteToCopy = quote.result;
        const textToCopy = `"${quoteToCopy.english}" - ${quoteToCopy.character}`;
        await navigator.clipboard.writeText(textToCopy);
        addTooltips({ label: tooltipsLabel });
      } catch {
        console.log('nothing to copy');
      }
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: favButtonContainer,
      quoteObj: quote,
    });
  },
};

export default HomePage;
