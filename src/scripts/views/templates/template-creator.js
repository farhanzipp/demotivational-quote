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

export { createQuoteCard };
