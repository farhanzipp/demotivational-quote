import AnimeQuoteSource from '../../data/animequote-source';
import { createQuoteCard } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="w-4/5 min-h-30 mx-auto mt-8 p-8 text-center rounded-lg text-slate-50 bg-slate-700 md:w-1/2">
          <div id="quote-text"></div>
          <div id="quote-share" class="flex justify-between text-white">
            <button id="copy-btn" class="hover:text-sky-200" title="copy">
                <i class="fa-regular fa-clipboard"></i>
            </button>
            <button id="copy-btn" class="hover:text-sky-200" title="save quote">
                <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>
      </div>
      
      <button id="generate-quote" class="w-4/5 mx-auto my-2 p-2 text-white font-bold bg-sky-700 hover:bg-sky-500 md:w-1/5"> RANDOM </button>
      
        `;
  },

  async afterRender() {
    const generateQuoteBtn = document.querySelector('#generate-quote');
    const quoteContainer = document.querySelector('#quote-text');
    let quotes = [];

    const updateQuoteDOM = (quoteText) => {
      quoteContainer.innerHTML = createQuoteCard(quoteText);
    };

    const generateQuote = async () => {
      try {
        if (quotes.length === 0) {
          const newQuotes = await AnimeQuoteSource.generateRandomQuotes();
          quotes = newQuotes;
        }
        updateQuoteDOM(quotes.shift());
      } catch (error) {
        console.error('Error generating quote:', error);
      }
    };

    generateQuoteBtn.addEventListener('click', generateQuote);
    generateQuote();
  },
};

export default HomePage;
