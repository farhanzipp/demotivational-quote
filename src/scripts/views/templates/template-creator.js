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

const createGenerateButton = () => `
   <button id="generate-quote" class="w-4/5 mx-auto my-2 p-2 text-white font-bold bg-sky-700 hover:bg-sky-500 md:w-1/5"> 
      RANDOM 
   </button>
`;

const createLikeButton = () => `
  <button aria-label="like this movie" id="favButton" class="like">
     <i class="fa-regular fa-bookmark" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButton = () => `
  <button aria-label="like this movie" id="favButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

export {
  createQuoteCard, createGenerateButton, createLikeButton, createUnlikeButton,
};
