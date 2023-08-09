import { createFavoriteCards } from '../templates/template-creator';
import FavoriteQuoteIdb from '../../data/fav-quote-idb';

const FavoritePage = {
  async render() {
    return `
    <div>
        <h1 class="my-4 text-center text-lg font-semibold">My Recent Lovely Quotes</h1>
        <ul id="favorite-quotes-container"></ul>
    </div>
          `;
  },

  async afterRender() {
    const quotes = await FavoriteQuoteIdb.getAllQuotes();
    const favoriteQuotesContainer = document.querySelector('#favorite-quotes-container');
    const deleteFavoriteButton = document.querySelector('#close-btn');

    quotes.forEach((quote) => {
      favoriteQuotesContainer.innerHTML += createFavoriteCards(quote);
    });
  },
};

export default FavoritePage;
