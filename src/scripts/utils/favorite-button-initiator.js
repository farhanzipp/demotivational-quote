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
    this._renderButton();
  },

  async _renderButton() {
    const { id } = this._quote;

    if (await this._isQuoteExist(id)) {
      this._renderLike();
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
    const favButton = document.querySelector('#fav-btn');
    favButton.addEventListener('click', async () => {
      await FavoriteQuoteIdb.deleteQuote(this._quote.id);
      this._renderButton();
    });
  },

  _renderUnlike() {
    this._favoriteButtonContainer.innerHTML = createUnlikeButton();
    const favButton = document.querySelector('#fav-btn');
    favButton.addEventListener('click', async () => {
      await FavoriteQuoteIdb.putQuote(this._quote);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
