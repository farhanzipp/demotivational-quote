import AnimeQuoteSource from '../data/animequote-source';

const renderQuoteObject = async (callback) => {
  const quote = await AnimeQuoteSource.generateRandomQuotes();
  callback(quote); // Call the provided callback function with the quote
};

export default renderQuoteObject;
