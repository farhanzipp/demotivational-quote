import API_ENDPOINT from '../global/api-endpoint';

class AnimeQuoteSource {
  static async generateRandomQuotes() {
    const response = await fetch(API_ENDPOINT.RANDOM);
    const responseJson = await response.json();
    // i want to return first object only
    return responseJson.result[0];
  }
}

export default AnimeQuoteSource;
