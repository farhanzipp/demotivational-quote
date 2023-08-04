import AnimeQuoteSource from '../../data/animequote-source';

const HomePage = {
  async render() {
    return `
      <div class="w-4/5 min-h-96 mx-auto mt-8 p-8 text-center rounded-lg text-slate-50 bg-slate-700 md:w-1/2">
          <div id="quote-text"></div>
          <div id="quote-share" class="flex justify-between text-white">
            <button id="copy-btn" class="hover:text-sky-200" title="copy">
              <i class="fa fa-clipboard"></i>
            </button>
            <div id="fav-btn-container">
              <button id="save-btn" class="hover:text-sky-200" title="save quote">
                <i class="fa fa-bookmark"></i>
              </button>
            </div>
          </div>
      </div>
      <div id='generate-button-container'></div>
        `;
  },

  async afterRender() {
    const quote = await AnimeQuoteSource.generateRandomQuotes();

    console.log(quote);

    // const updateQuoteDOM = (quoteObj) => {
    //   quoteContainer.innerHTML = createQuoteCard(quoteObj);
    // };

    // const generateQuote = async () => {
    //   try {
    //     let quotes = [];
    //     const newQuotes = await AnimeQuoteSource.generateRandomQuotes();
    //     quotes = newQuotes;
    //     updateQuoteDOM(quotes);
    //   } catch (error) {
    //     console.error('Error generating quote:', error);
    //   }
    // };
    // generateQuoteBtn.addEventListener('click', generateQuote);
    // generateQuote();

    // FavoriteButtonInitiator.init({
    //   favoriteButtonContainer: document.querySelector('#fav-btn-container'),
    //   quote: {
    //     id: quote.id,
    //     anime: quote.anime,
    //   }
    // })
  },
};

export default HomePage;
