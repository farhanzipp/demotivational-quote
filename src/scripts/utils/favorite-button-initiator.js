import FavoriteQuoteIdb from '../data/fav-quote-idb';
import { createLikeButton, createUnlikeButton } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, quote }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._quote = quote;

    await this._renderConsole();
    console.log(quote);
  },

  async _renderConsole() {
    console.log(this._quote);
  },

  async _renderButton() {
    const { id } = this._quote;

    if (await this._isQuoteExist(id)) {
      this._renderLiked();
    } else {
      this._renderUnlike();
    }
  },

  async _isQuoteExist(id) {
    const quote = await FavoriteQuoteIdb.getQuote(id);
    return !!quote;
  },

  _renderLiked() {
    this._favoriteButtonContainer.innerHtml = createLikeButton();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteQuoteIdb.deleteQuote(this._quote.id);
      this._renderButton();
    });
  },

  _renderUnlike() {
    this._favoriteButtonContainer.innerHtml = createUnlikeButton();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteQuoteIdb.putQuote(this._quote);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
