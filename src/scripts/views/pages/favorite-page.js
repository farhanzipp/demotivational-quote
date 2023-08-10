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

    quotes.forEach((quote) => {
      favoriteQuotesContainer.innerHTML += createFavoriteCards(quote);
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener('click', (e) => {
        const quoteId = e.target.getAttribute('value');
        // eslint-disable-next-line radix
        const id = parseInt(quoteId); // id in number type
        FavoriteQuoteIdb.deleteQuote(id); // remove from db
        const card = document.getElementById(quoteId);
        card.remove(); // remove from DOM
      });
    });
  },
};

export default FavoritePage;
