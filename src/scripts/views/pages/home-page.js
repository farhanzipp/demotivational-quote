import AnimeQuoteSource from '../../data/animequote-source';
import { createQuoteCard } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div id="quote-card" class="w-4/5 mx-auto mt-8 p-8 text-center rounded-lg text-slate-50 bg-slate-700 md:w-1/2">
          
      </div>
      <div class="w-full mt-2 flex justify-center">
        <button id="generate-quote" class="p-2 text-white font-bold bg-sky-700 hover:bg-sky-500"> RANDOM </button>
      </div>
        `;
  },

  async afterRender() {
    const generateQuoteBtn = document.querySelector('#generate-quote');
    const cardContainer = document.querySelector('#quote-card');
    let quotes = [];

    const updateQuoteDOM = (quoteText) => {
      cardContainer.innerHTML = createQuoteCard(quoteText);
    };

    const generateQuote = () => {
      try {
        if (quotes.length === 0) {
          AnimeQuoteSource.generateRandomQuotes()
            .then((newQuotes) => {
              quotes = newQuotes;
              updateQuoteDOM(quotes[0]);
            });
        } else {
          updateQuoteDOM(quotes.shift());
        }
      } catch (error) {
        console.error('Error generating quote:', error);
      }
    };

    generateQuoteBtn.addEventListener('click', generateQuote);
    generateQuote();
  },
};

export default HomePage;
