import AnimeQuoteSource from '../../data/animequote-source';
import { createQuoteCard } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="w-4/5 min-h-96 mx-auto mt-8 p-8 text-center rounded-lg text-slate-50 bg-slate-700 md:w-1/2">
          <div id="quote-text"></div>
          <div id="quote-share" class="flex justify-between text-white">
            <button id="copy-btn" class="hover:text-sky-200" title="copy">
              <i class="fa-regular fa-clipboard"></i>
            </button>
            <button id="save-btn" class="hover:text-sky-200" title="save quote">
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
    // const textToCopy = document.querySelector('#quote-text-EN');
    const copyBtn = document.querySelector('#copy-btn');
    let quotes = [];

    const updateQuoteDOM = (quoteObj) => {
      quoteContainer.innerHTML = createQuoteCard(quoteObj);
    };

    const generateQuote = async () => {
      try {
        const newQuotes = await AnimeQuoteSource.generateRandomQuotes();
        quotes = newQuotes;
        updateQuoteDOM(quotes);
      } catch (error) {
        console.error('Error generating quote:', error);
      }
    };
    generateQuoteBtn.addEventListener('click', generateQuote);
    generateQuote();

    const copyQuoteToClipboard = async () => {
      // navigator.clipboard.writeText();
      console.log(quoteContainer);
    };
    copyBtn.addEventListener('click', copyQuoteToClipboard);
  },
};

export default HomePage;
