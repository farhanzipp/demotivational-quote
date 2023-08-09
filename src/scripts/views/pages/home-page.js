import addTooltips from '../../utils/add-tooltips';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import { createQuoteCard } from '../templates/template-creator';
import renderQuoteObject from '../../utils/generate-quote-object';

const HomePage = {
  async render() {
    return `
            <div class="w-4/5 min-h-96 mx-auto mt-8 p-8 text-center rounded-lg text-slate-50 bg-slate-700 md:w-1/2">
                <div id="quote-text">
                  <p>Click Button For Motivational Quote!</p>
                </div>
                
                <div id="quote-share" class="flex justify-between text-white">
                  <button id="copy-btn" class="hover:text-sky-200" title="copy this quote">
                    <i class="fa fa-clone"></i>
                    <span id="tooltips-label" class="font-mono hidden">Copied!</span>
                  </button>
                  
                  <div id="fav-btn-container"></div>
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

    let quote = null;

    const updateQuote = (newQuote) => {
      quote = newQuote;
      return quote;
    };

    const renderAndUpdateQuote = async () => {
      quoteTextContainer.innerHTML = '<loader-spin></loader-spin>';
      await renderQuoteObject(updateQuote);
      quoteTextContainer.innerHTML = createQuoteCard(quote);
      FavoriteButtonInitiator.updateQuote(quote);
    };

    const copyQuote = async () => {
      if (quote) {
        try {
          const textToCopy = `"${quote.english}" - ${quote.character}`;
          if (navigator.clipboard) {
            await navigator.clipboard.writeText(textToCopy);
          } else {
            console.error('Clipboard API is not supported.');
          }
          addTooltips({ label: tooltipsLabel });
        } catch (error) {
          console.error('Error copying quote:', error);
        }
      }
    };

    await renderAndUpdateQuote();
    generateQuoteButton.addEventListener('click', renderAndUpdateQuote);

    copyQuoteButton.addEventListener('click', copyQuote);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: favButtonContainer,
      quote,
    });
  },
};

export default HomePage;
