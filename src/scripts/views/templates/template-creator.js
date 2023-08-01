/* eslint-disable import/prefer-default-export */
const createQuoteCard = (quote) => `
    <blockquote>
        <p id="quote-text-EN" class="text-lg font-medium">${quote.english}</p>
    </blockquote>
    <div class="m-4 text-sky-500">
        ${quote.character}
    </div>
`;

export { createQuoteCard };
