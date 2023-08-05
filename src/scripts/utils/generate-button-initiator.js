import AnimeQuoteSource from '../data/animequote-source';

const GenerateButtonInitiator = {
  async init({ button, container }) {
    this._container = container;

    button.addEventListener('click', () => {
      this.renderDisplay();
    });
  },

  async renderDisplay() {
    const quote = await AnimeQuoteSource.generateRandomQuotes();
    this._container.result = quote;
  },
};

export default GenerateButtonInitiator;
