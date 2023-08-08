import FavoriteQuoteIdb from '../data/fav-quote-idb';
import { createLikeButton, createUnlikeButton } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, quote }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._quote = quote;

    await this._renderButton();
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
    this._favoriteButtonContainer.innerHtml = createLikeButton();
  },

  _renderUnlike() {
    this._favoriteButtonContainer.innerHtml = createUnlikeButton();
  },
};

export default FavoriteButtonInitiator;
