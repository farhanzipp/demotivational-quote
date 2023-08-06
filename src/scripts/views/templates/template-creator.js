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
  <button aria-label="like this movie" id="favButton" class="like">
    <i class="fa fa-arrow-down" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButton = () => `
  <button aria-label="like this movie" id="favButton" class="like">
    <i class="fa fa-bookmark-o"></i>
  </button>
`;

export {
  createQuoteCard, createLikeButton, createUnlikeButton,
};
