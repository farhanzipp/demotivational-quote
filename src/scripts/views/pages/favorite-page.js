import AnimeQuoteSource from '../../data/animequote-source';
import { createLikeButton } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
        <div class="mt-20">
        <h1 class="text-center">My Recent Lovely Quotes</h1>
        <ul>
            <li>
                <div class="w-2/3 mx-auto my-2 p-4 rounded-lg text-slate-100 bg-slate-500 md:w-1/2">
                    <p>Live is Love tapi boong</p>
                    <div id="quote"></div>
                    <div id="favoriteButtonContainer></div>
                </div>
            </li>
        </ul>
    </div>
          `;
  },

  async afterRender() {
    const quotes = await AnimeQuoteSource.generateRandomQuotes();
    const quotesContainer = document.querySelector('#quote');
    const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer');

    quotes.forEach((quote) => {
      quotesContainer.innerHTML += `${quote.anime}`;
    });
    favoriteButtonContainer.innerHTML = createLikeButton();
  },
};

export default FavoritePage;
