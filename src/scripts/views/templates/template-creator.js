/* eslint-disable import/prefer-default-export */
const createQuoteCard = (quote) => `
    <blockquote>
        <p id="quote-text-EN" class="text-lg font-medium">${quote.english}</p>
    </blockquote>
    <div class="m-4">
       <p class="text-sky-500"> ${quote.character}</p>
       <p class="italic text-slate-500"> - ${quote.anime} -</p>
    </div>
`;

const createLikeButton = () => `
  <button aria-label="unfavorite quote" id="fav-btn" class="hover:text-sky-200" title="remove from favorite">
    <i class="fa fa-bookmark" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButton = () => `
  <button aria-label="add to favorite" id="fav-btn" class="hover:text-sky-200" title="add to favorite">
    <i class="fa fa-bookmark-o"></i>
  </button>
`;

const createFavoriteCards = (quote) => `
<li id="${quote.id}">
  <div class="w-4/5 mx-auto my-2 px-2 rounded-lg text-white bg-slate-700 md:w-1/2">
    <div class="flex justify-between items-center">
      <p class="text-slate-400 font-mono text-xs">${quote.anime}</p>
      <button class="delete-btn text-red-500 hover:text-sky-200" title="delete from favorite">
        <i class="fa fa-times" value="${quote.id}"></i>
      </button>
    </div>
    <p id="quote-text-EN" class="m-2 text-lg text-center font-medium">${quote.english}</p>
    <p class="text-right text-slate-400 font-mono text-xs">- ${quote.character}</p>
    </div>
</li>
`;

export {
  createQuoteCard, createLikeButton, createUnlikeButton, createFavoriteCards,
};
