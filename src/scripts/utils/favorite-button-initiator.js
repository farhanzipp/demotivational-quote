import FavoriteQuoteIdb from '../data/fav-quote-idb';
import { createLikeButton, createUnlikeButton } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, quote }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._quote = quote;

    this._renderButton();
  },

  updateQuote(newQuote) {
    this._quote = newQuote;
  },

  async _renderConsole() {
    this._favoriteButtonContainer.innerHTML = 'helo';
  },

  async _renderButton() {
    const { id } = this._quote;

    if (await this._isQuoteExist(id)) {
      this._renderlike();
    } else {
      this._renderUnlike();
    }
  },

  async _isQuoteExist(id) {
    const quote = await FavoriteQuoteIdb.getQuote(id);
    return !!quote;
  },

  _renderLike() {
    this._favoriteButtonContainer.innerHTML = createLikeButton();
  },

  _renderUnlike() {
    this._favoriteButtonContainer.innerHTML = createUnlikeButton();
  },
};

export default FavoriteButtonInitiator;
