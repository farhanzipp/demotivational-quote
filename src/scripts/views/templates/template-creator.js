const createQuoteCard = (quote) => `
    <blockquote>
        <p class="text-lg font-medium">${quote.english}</p>
    </blockquote>
    <div class="m-4 text-sky-500">
        ${quote.anime}
    </div>
    <div class="flex justify-between text-white ">
        <div>
            <span class="hover:text-sky-200">
                <i class="fa-regular fa-clipboard"></i>
            </span>
            <i class="fa-brands fa-twitter"></i>
        </div>
        <i class="fa-regular fa-bookmark"></i>
    </div>
`;

export { createQuoteCard };
