import FavoriteQuoteIdb from '../data/fav-quote-idb';
import { createLikeButton, createUnlikeButton } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, quoteObj }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._quoteObj = quoteObj;

    await this._renderButton();
  },

  async _renderConsole() {
    const favButton = document.querySelector('#fav-btn');

    favButton.addEventListener('click', async () => {
      console.log(this._quoteObj);
      console.log(this._quoteObj.result);
    });
  },

  async _renderButton() {
    console.log(this._quoteObj);
    // const { id } = this._quoteObj.result;

    if (await this._isQuoteExist()) {
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

    const favButton = document.querySelector('#fav-btn');
    favButton.addEventListener('click', async () => {
      await FavoriteQuoteIdb.deleteQuote(this._quote.result.id);
      this._renderButton();
    });
  },

  _renderUnlike() {
    this._favoriteButtonContainer.innerHtml = createUnlikeButton();

    const favButton = document.querySelector('#fav-btn');
    favButton.addEventListener('click', async () => {
      await FavoriteQuoteIdb.putQuote(this._quote.result);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
