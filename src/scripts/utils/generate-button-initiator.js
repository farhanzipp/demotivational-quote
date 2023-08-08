import AnimeQuoteSource from '../data/animequote-source';

const GenerateButtonInitiator = {
  async init({ button, objContainer }) {
    this._container = objContainer;

    button.addEventListener('click', () => {
      this.renderQuoteObject();
    });
  },

  async renderQuoteObject() {
    const quote = await AnimeQuoteSource.generateRandomQuotes();
    this._container.result = quote;
  },
};

export default GenerateButtonInitiator;
