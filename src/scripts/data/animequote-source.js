import API_ENDPOINT from '../global/api-endpoint';

class AnimeQuoteSource {
  static async generateRandomQuotes() {
    const response = await fetch(API_ENDPOINT.RANDOM);
    const responseJson = await response.json();
    return responseJson.result;
  }
}

export default AnimeQuoteSource;
